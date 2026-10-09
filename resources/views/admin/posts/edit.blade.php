@extends('layouts.admin')

@section('title', 'Edit Blog Article')

@section('content')
<div class="max-w-4xl mx-auto space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-2xl font-bold text-slate-100">Edit Article</h1>
            <p class="text-sm text-slate-400">Update content, status, tags, or cover photo.</p>
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

    <form action="{{ route('admin.posts.update', $post) }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-6">
        @csrf
        @method('PUT')

        <div class="space-y-4">
            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Title *</label>
                <input type="text" name="title" value="{{ old('title', $post->title) }}" required class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Category *</label>
                    <input type="text" name="category" value="{{ old('category', $post->category) }}" required class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Status *</label>
                    <select name="status" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                        <option value="published" {{ old('status', $post->status) === 'published' ? 'selected' : '' }}>Published</option>
                        <option value="draft" {{ old('status', $post->status) === 'draft' ? 'selected' : '' }}>Draft</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">Order Column *</label>
                    <input type="number" name="order_column" value="{{ old('order_column', $post->order_column) }}" required class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Tags (Comma separated)</label>
                <input type="text" name="tags" value="{{ old('tags', is_array($post->tags_json) ? implode(', ', $post->tags_json) : '') }}" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Cover Image (Upload replacement from local PC)</label>
                @if($post->cover_image)
                    <div class="mb-3 flex items-center gap-4">
                        <img src="{{ asset($post->cover_image) }}" class="w-20 h-20 object-cover rounded-xl border border-slate-700">
                        <span class="text-xs text-slate-400 font-mono">{{ $post->cover_image }}</span>
                    </div>
                @endif
                <input type="file" name="cover_image" accept="image/*" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500">
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Excerpt (Short summary)</label>
                <textarea name="excerpt" rows="2" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">{{ old('excerpt', $post->excerpt) }}</textarea>
            </div>

            <div>
                <label class="block text-sm font-semibold text-slate-300 mb-2">Article Content (Markdown or HTML) *</label>
                <textarea name="content" rows="12" required class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 font-mono text-sm focus:border-blue-500 focus:outline-none">{{ old('content', $post->content) }}</textarea>
            </div>

            <div class="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">SEO Meta Title</label>
                    <input type="text" name="meta_title" value="{{ old('meta_title', $post->meta_title) }}" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-300 mb-2">SEO Meta Description</label>
                    <input type="text" name="meta_description" value="{{ old('meta_description', $post->meta_description) }}" class="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-100 focus:border-blue-500 focus:outline-none">
                </div>
            </div>
        </div>

        <div class="flex justify-end gap-4 pt-4 border-t border-slate-800">
            <a href="{{ route('admin.posts.index') }}" class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold rounded-xl transition">Cancel</a>
            <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl shadow-lg transition">
                Update Article
            </button>
        </div>
    </form>
</div>
@endsection
