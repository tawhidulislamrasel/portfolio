@extends('layouts.admin')

@section('title', 'Write New Blog Article')

@section('content')
<div class="max-w-4xl mx-auto space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-2xl font-bold text-slate-100">Write New Article</h1>
            <p class="text-sm text-slate-400">Share engineering insights, tutorial, or technical updates.</p>
        </div>
        <a href="{{ route('admin.posts.index') }}" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl border border-slate-700 transition">
            Back to Posts
        </a>
    </div>

    @if($errors->any())
        <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
            <ul class="list-disc list-inside space-y-1">
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('admin.posts.store') }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-6">
        @csrf

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Title *</label>
                <input type="text" name="title" value="{{ old('title') }}" required placeholder="e.g. Building High-Performance Microservices with Laravel & WebGL" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Category *</label>
                    <input type="text" name="category" value="{{ old('category', 'Engineering') }}" required placeholder="e.g. Architecture, WebGL, Laravel" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Status *</label>
                    <select name="status" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                        <option value="published" {{ old('status') === 'published' ? 'selected' : '' }}>Published</option>
                        <option value="draft" {{ old('status') === 'draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Order Column *</label>
                    <input type="number" name="order_column" value="{{ old('order_column', 0) }}" required class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Tags (Comma separated)</label>
                <input type="text" name="tags" value="{{ old('tags') }}" placeholder="Laravel, Performance, SQLite, Three.js" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Cover Image (Upload from local PC)</label>
                <input type="file" name="cover_image" accept="image/*" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500">
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Excerpt (Short summary)</label>
                <textarea name="excerpt" rows="2" placeholder="Brief summary displayed on article cards..." class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">{{ old('excerpt') }}</textarea>
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Article Content (Markdown or HTML) *</label>
                <textarea name="content" rows="12" required placeholder="Write your full article here..." class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 font-mono text-sm focus:border-blue-500 focus:outline-none">{{ old('content') }}</textarea>
            </div>

            <div class="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">SEO Meta Title</label>
                    <input type="text" name="meta_title" value="{{ old('meta_title') }}" placeholder="SEO Title" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">SEO Meta Description</label>
                    <input type="text" name="meta_description" value="{{ old('meta_description') }}" placeholder="SEO Meta Description" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
            </div>
        </div>

        <div class="flex justify-end gap-4 pt-4 border-t border-slate-800">
            <a href="{{ route('admin.posts.index') }}" class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl transition">Cancel</a>
            <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl shadow-lg transition">
                Save & Publish Post
            </button>
        </div>
    </form>
</div>
@endsection
