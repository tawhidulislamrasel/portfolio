@extends('layouts.admin')

@section('title', 'Add Testimonial')

@section('content')
<div class="max-w-2xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Add Executive Endorsement</h1>
        </div>
        <a href="{{ route('admin.testimonials.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back</a>
    </div>

    <form action="{{ route('admin.testimonials.store') }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="author_name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Author Name</label>
                <input type="text" name="author_name" id="author_name" value="{{ old('author_name') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="author_title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Title / Position</label>
                <input type="text" name="author_title" id="author_title" value="{{ old('author_title', 'CTO') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="company" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Company Name</label>
                <input type="text" name="company" id="company" value="{{ old('company') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="rating" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Rating (1 - 5 Stars)</label>
                <input type="number" name="rating" id="rating" value="{{ old('rating', 5) }}" min="1" max="5" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div>
            <label for="quote" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Testimonial Quote</label>
            <textarea name="quote" id="quote" rows="4" required
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">{{ old('quote') }}</textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', 1) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div class="flex items-center pt-6">
                <label class="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-semibold">
                    <input type="checkbox" name="is_published" value="1" checked class="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
                    <span>Published</span>
                </label>
            </div>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm">Add Testimonial</button>
        </div>
    </form>

</div>
@endsection
