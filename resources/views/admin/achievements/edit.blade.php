@extends('layouts.admin')

@section('title', 'Edit Achievement Metric')

@section('content')
<div class="max-w-2xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Edit Achievement Metric</h1>
        </div>
        <a href="{{ route('admin.achievements.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back</a>
    </div>

    <form action="{{ route('admin.achievements.update', $achievement) }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Metric Headline Title</label>
                <input type="text" name="title" id="title" value="{{ old('title', $achievement->title) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="metric_value" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Quantifiable Value</label>
                <input type="text" name="metric_value" id="metric_value" value="{{ old('metric_value', $achievement->metric_value) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-mono">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="category" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Category</label>
                <input type="text" name="category" id="category" value="{{ old('category', $achievement->category) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', $achievement->order_column) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div>
            <label for="description" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Impact Description</label>
            <textarea name="description" id="description" rows="3"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">{{ old('description', $achievement->description) }}</textarea>
        </div>

        <div class="flex items-center pt-2">
            <label class="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-semibold">
                <input type="checkbox" name="is_featured" value="1" {{ $achievement->is_featured ? 'checked' : '' }} class="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
                <span>Feature on Main Showcase</span>
            </label>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm">Update Achievement</button>
        </div>
    </form>

</div>
@endsection
