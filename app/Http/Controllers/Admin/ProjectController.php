<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::orderBy('order_column')->get();

        return view('admin.projects.index', compact('projects'));
    }

    public function create()
    {
        return view('admin.projects.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tagline' => 'nullable|string|max:255',
            'category' => 'required|string|max:100',
            'summary' => 'required|string',
            'problem_statement' => 'nullable|string',
            'solution' => 'nullable|string',
            'architecture_description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'role_description' => 'nullable|string|max:255',
            'demo_url' => 'nullable|url',
            'repo_url' => 'nullable|url',
            'is_featured' => 'boolean',
            'is_confidential' => 'boolean',
            'status' => 'required|in:draft,published',
            'order_column' => 'required|integer',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
            'gallery_images.*' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
        ]);

        $slug = Str::slug($validated['title']);
        $count = Project::where('slug', 'LIKE', "{$slug}%")->count();
        if ($count > 0) {
            $slug = "{$slug}-".($count + 1);
        }

        $coverImagePath = null;
        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('projects', 'public');
            $coverImagePath = '/storage/'.$path;
        }

        $galleryPaths = [];
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $path = $file->store('projects/gallery', 'public');
                $galleryPaths[] = '/storage/'.$path;
            }
        }

        $techStackArray = array_values(array_filter(array_map('trim', explode(',', $request->input('tech_stack', '')))));

        $project = Project::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'tagline' => $validated['tagline'] ?? null,
            'category' => $validated['category'],
            'summary' => $validated['summary'],
            'problem_statement' => $validated['problem_statement'] ?? null,
            'solution' => $validated['solution'] ?? null,
            'architecture_description' => $validated['architecture_description'] ?? null,
            'tech_stack_json' => $techStackArray,
            'role_description' => $validated['role_description'] ?? null,
            'cover_image' => $coverImagePath,
            'gallery_json' => $galleryPaths,
            'demo_url' => $validated['demo_url'] ?? null,
            'repo_url' => $validated['repo_url'] ?? null,
            'is_featured' => $request->boolean('is_featured'),
            'is_confidential' => $request->boolean('is_confidential'),
            'status' => $validated['status'],
            'order_column' => $validated['order_column'],
            'meta_title' => $validated['meta_title'] ?? $validated['title'],
            'meta_description' => $validated['meta_description'] ?? Str::limit(strip_tags($validated['summary']), 150),
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_project',
            'description' => 'Created project case study: '.$project->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    public function edit(Project $project)
    {
        return view('admin.projects.edit', compact('project'));
    }

    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'tagline' => 'nullable|string|max:255',
            'category' => 'required|string|max:100',
            'summary' => 'required|string',
            'problem_statement' => 'nullable|string',
            'solution' => 'nullable|string',
            'architecture_description' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'role_description' => 'nullable|string|max:255',
            'demo_url' => 'nullable|url',
            'repo_url' => 'nullable|url',
            'is_featured' => 'boolean',
            'is_confidential' => 'boolean',
            'status' => 'required|in:draft,published',
            'order_column' => 'required|integer',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'cover_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
            'gallery_images.*' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:5120',
        ]);

        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('projects', 'public');
            $project->cover_image = '/storage/'.$path;
        }

        $galleryPaths = $project->gallery_json ?? [];
        if ($request->hasFile('gallery_images')) {
            foreach ($request->file('gallery_images') as $file) {
                $path = $file->store('projects/gallery', 'public');
                $galleryPaths[] = '/storage/'.$path;
            }
        }

        $techStackArray = array_values(array_filter(array_map('trim', explode(',', $request->input('tech_stack', '')))));

        $project->update([
            'title' => $validated['title'],
            'tagline' => $validated['tagline'] ?? null,
            'category' => $validated['category'],
            'summary' => $validated['summary'],
            'problem_statement' => $validated['problem_statement'] ?? null,
            'solution' => $validated['solution'] ?? null,
            'architecture_description' => $validated['architecture_description'] ?? null,
            'tech_stack_json' => $techStackArray,
            'role_description' => $validated['role_description'] ?? null,
            'gallery_json' => $galleryPaths,
            'demo_url' => $validated['demo_url'] ?? null,
            'repo_url' => $validated['repo_url'] ?? null,
            'is_featured' => $request->boolean('is_featured'),
            'is_confidential' => $request->boolean('is_confidential'),
            'status' => $validated['status'],
            'order_column' => $validated['order_column'],
            'meta_title' => $validated['meta_title'] ?? null,
            'meta_description' => $validated['meta_description'] ?? null,
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_project',
            'description' => 'Updated project case study: '.$project->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    public function destroy(Project $project, Request $request)
    {
        $title = $project->title;
        $project->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_project',
            'description' => 'Deleted project case study: '.$title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }
}
