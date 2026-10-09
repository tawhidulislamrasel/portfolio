<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('order_column')->latest()->paginate(15);

        return view('admin.posts.index', compact('posts'));
    }

    public function create()
    {
        return view('admin.posts.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'required|string',
            'category' => 'required|string|max:100',
            'tags' => 'nullable|string', // comma separated
            'status' => 'required|in:draft,published',
            'order_column' => 'required|integer',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
        ]);

        $slug = Str::slug($validated['title']);
        $count = Post::where('slug', 'LIKE', "{$slug}%")->count();
        if ($count > 0) {
            $slug = "{$slug}-".($count + 1);
        }

        $coverImagePath = null;
        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('posts', 'public');
            $coverImagePath = '/storage/'.$path;
        }

        $tagsArray = array_values(array_filter(array_map('trim', explode(',', $request->input('tags', '')))));

        $post = Post::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'excerpt' => $validated['excerpt'] ?? Str::limit(strip_tags($validated['content']), 160),
            'content' => $validated['content'],
            'category' => $validated['category'],
            'tags_json' => $tagsArray,
            'cover_image' => $coverImagePath,
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? now() : null,
            'order_column' => $validated['order_column'],
            'meta_title' => $validated['meta_title'] ?? $validated['title'],
            'meta_description' => $validated['meta_description'] ?? Str::limit(strip_tags($validated['excerpt'] ?? $validated['content']), 150),
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_post',
            'description' => 'Published blog article: '.$post->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.posts.index')->with('success', 'Blog article created successfully.');
    }

    public function edit(Post $post)
    {
        return view('admin.posts.edit', compact('post'));
    }

    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'required|string',
            'category' => 'required|string|max:100',
            'tags' => 'nullable|string',
            'status' => 'required|in:draft,published',
            'order_column' => 'required|integer',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
        ]);

        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('posts', 'public');
            $post->cover_image = '/storage/'.$path;
        }

        $tagsArray = array_values(array_filter(array_map('trim', explode(',', $request->input('tags', '')))));

        $post->update([
            'title' => $validated['title'],
            'excerpt' => $validated['excerpt'] ?? Str::limit(strip_tags($validated['content']), 160),
            'content' => $validated['content'],
            'category' => $validated['category'],
            'tags_json' => $tagsArray,
            'status' => $validated['status'],
            'published_at' => $validated['status'] === 'published' ? ($post->published_at ?? now()) : null,
            'order_column' => $validated['order_column'],
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_post',
            'description' => 'Updated blog article: '.$post->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.posts.index')->with('success', 'Blog article updated successfully.');
    }

    public function destroy(Post $post, Request $request)
    {
        $title = $post->title;
        $post->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_post',
            'description' => 'Deleted blog article: '.$title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.posts.index')->with('success', 'Blog article deleted successfully.');
    }
}
