@extends('layouts.admin')

@section('title', 'Edit Section: ' . $section->name)

@section('content')
<div class="max-w-3xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Edit Section: {{ $section->name }}</h1>
            <p class="text-xs text-slate-400 mt-1">Update section titles, subtitles, display order, and content body.</p>
        </div>
        <a href="{{ route('admin.sections.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back to Sections</a>
    </div>

    <form action="{{ route('admin.sections.update', $section) }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Section Identifier Name</label>
                <input type="text" name="name" id="name" value="{{ old('name', $section->name) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Display Order Sequence</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', $section->order_column) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>
        </div>

        <div>
            <label for="title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Section Heading Title</label>
            <input type="text" name="title" id="title" value="{{ old('title', $section->title) }}"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
            <label for="subtitle" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Section Subtitle / Eyebrow Text</label>
            <input type="text" name="subtitle" id="subtitle" value="{{ old('subtitle', $section->subtitle) }}"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
        </div>

        <div>
            <label for="content" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Section Body Content</label>
            <textarea name="content" id="content" rows="6"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('content', $section->content) }}</textarea>
        </div>

        <div class="flex items-center gap-3">
            <input type="checkbox" name="is_enabled" id="is_enabled" value="1" {{ $section->is_enabled ? 'checked' : '' }}
                class="w-4 h-4 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
            <label for="is_enabled" class="text-xs font-semibold text-slate-300">Enable this section on the public homepage</label>
        </div>

        <div class="pt-4 flex justify-end gap-3">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Save Changes
            </button>
        </div>
    </form>

</div>
@endsection
