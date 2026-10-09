<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Setting;
use App\Models\ThemeSetting;

class PostController extends Controller
{
    public function index()
    {
        $settings = Setting::pluck('value', 'key')->all();
        $theme = ThemeSetting::first() ?? new ThemeSetting;

        $posts = Post::where('status', 'published')
            ->latest('published_at')
            ->paginate(9);

        $categories = Post::where('status', 'published')
            ->select('category')
            ->distinct()
            ->pluck('category');

        return view('posts.index', compact('posts', 'categories', 'settings', 'theme'));
    }

    public function show(string $slug)
    {
        $settings = Setting::pluck('value', 'key')->all();
        $theme = ThemeSetting::first() ?? new ThemeSetting;

        $post = Post::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        $recentPosts = Post::where('status', 'published')
            ->where('id', '!=', $post->id)
            ->latest('published_at')
            ->take(3)
            ->get();

        return view('posts.show', compact('post', 'recentPosts', 'settings', 'theme'));
    }
}
