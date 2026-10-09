@extends('layouts.admin')

@section('title', 'Edit Project: ' . $project->title)

@section('content')
<div class="max-w-4xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Edit Project Case Study: {{ $project->title }}</h1>
            <p class="text-xs text-slate-400 mt-1">Update case study documentation, local cover image, gallery screenshots, stack badges, and status.</p>
        </div>
        <a href="{{ route('admin.projects.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back to Projects</a>
    </div>

    <form action="{{ route('admin.projects.update', $project) }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Project Title</label>
                <input type="text" name="title" id="title" value="{{ old('title', $project->title) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="category" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Category</label>
                <input type="text" name="category" id="category" value="{{ old('category', $project->category) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>
        </div>

        <div>
            <label for="tagline" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tagline / Short Subtitle</label>
            <input type="text" name="tagline" id="tagline" value="{{ old('tagline', $project->tagline) }}"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
            <label for="summary" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Project Summary</label>
            <textarea name="summary" id="summary" rows="3" required
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('summary', $project->summary) }}</textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="problem_statement" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Problem Statement</label>
                <textarea name="problem_statement" id="problem_statement" rows="4"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('problem_statement', $project->problem_statement) }}</textarea>
            </div>

            <div>
                <label for="solution" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Architectural Solution</label>
                <textarea name="solution" id="solution" rows="4"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('solution', $project->solution) }}</textarea>
            </div>
        </div>

        <div>
            <label for="architecture_description" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Deep-Dive Architecture & Data Design</label>
            <textarea name="architecture_description" id="architecture_description" rows="4"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('architecture_description', $project->architecture_description) }}</textarea>
        </div>

        <div>
            <label for="tech_stack" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tech Stack Tags (Comma-separated)</label>
            <input type="text" name="tech_stack" id="tech_stack" value="{{ old('tech_stack', implode(', ', $project->tech_stack_json ?? [])) }}"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
        </div>

        <!-- Local Image Uploads & Previews -->
        <div class="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-6">
            <h3 class="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <i data-lucide="image" class="w-4 h-4 text-blue-400"></i> Local Project Image Uploads & Current Previews
            </h3>

            <!-- Cover Image -->
            <div>
                <label for="cover_image" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Main Cover Image (Upload New Local File)</label>
                @if ($project->cover_image)
                    <div class="mb-3 flex items-center gap-4">
                        <img src="{{ $project->cover_image }}" alt="Cover" class="w-28 h-20 object-cover rounded-xl border border-slate-700">
                        <span class="text-xs text-slate-400">Current Cover Image</span>
                    </div>
                @endif
                <input type="file" name="cover_image" id="cover_image" accept="image/*"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
            </div>

            <!-- Gallery Images -->
            <div>
                <label for="gallery_images" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Add Additional Gallery Screenshots (Local Files)</label>
                @if (!empty($project->gallery_json))
                    <div class="mb-3 flex flex-wrap gap-3">
                        @foreach ($project->gallery_json as $img)
                            <img src="{{ $img }}" alt="Gallery" class="w-20 h-16 object-cover rounded-lg border border-slate-700">
                        @endforeach
                    </div>
                @endif
                <input type="file" name="gallery_images[]" id="gallery_images" multiple accept="image/*"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="demo_url" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Live Demo URL (Optional)</label>
                <input type="url" name="demo_url" id="demo_url" value="{{ old('demo_url', $project->demo_url) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="repo_url" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Source Code Repository URL (Optional)</label>
                <input type="url" name="repo_url" id="repo_url" value="{{ old('repo_url', $project->repo_url) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label for="status" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Publication Status</label>
                <select name="status" id="status" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                    <option value="published" {{ old('status', $project->status) === 'published' ? 'selected' : '' }}>Published</option>
                    <option value="draft" {{ old('status', $project->status) === 'draft' ? 'selected' : '' }}>Draft</option>
                </select>
            </div>

            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', $project->order_column) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div class="flex items-center pt-6">
                <label class="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-semibold">
                    <input type="checkbox" name="is_featured" value="1" {{ $project->is_featured ? 'checked' : '' }} class="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
                    <span>Feature on Showcase</span>
                </label>
            </div>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Update Project Case Study
            </button>
        </div>
    </form>

</div>
@endsection
