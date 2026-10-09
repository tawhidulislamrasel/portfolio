@extends('layouts.admin')

@section('title', 'Edit Career Milestone')

@section('content')
<div class="max-w-3xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Edit Career Milestone: {{ $experience->role }}</h1>
            <p class="text-xs text-slate-400 mt-1">Update employment position, company details, and accomplishments.</p>
        </div>
        <a href="{{ route('admin.experiences.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back to Career</a>
    </div>

    <form action="{{ route('admin.experiences.update', $experience) }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf
        @method('PUT')

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="company" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Company Name</label>
                <input type="text" name="company" id="company" value="{{ old('company', $experience->company) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="role" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Role Title</label>
                <input type="text" name="role" id="role" value="{{ old('role', $experience->role) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label for="start_date" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Start Date</label>
                <input type="text" name="start_date" id="start_date" value="{{ old('start_date', $experience->start_date) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="end_date" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">End Date (or Present)</label>
                <input type="text" name="end_date" id="end_date" value="{{ old('end_date', $experience->end_date) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div class="flex items-center pt-6">
                <label class="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-semibold">
                    <input type="checkbox" name="is_current" value="1" {{ $experience->is_current ? 'checked' : '' }} class="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
                    <span>Currently Employed Here</span>
                </label>
            </div>
        </div>

        <div>
            <label for="description" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Role Overview</label>
            <textarea name="description" id="description" rows="3"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('description', $experience->description) }}</textarea>
        </div>

        <div>
            <label for="achievements" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Key Accomplishments (One per line)</label>
            <textarea name="achievements" id="achievements" rows="4"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">{{ old('achievements', implode("\n", $experience->achievements_json ?? [])) }}</textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="location" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Location</label>
                <input type="text" name="location" id="location" value="{{ old('location', $experience->location) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Display Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', $experience->order_column) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Update Milestone
            </button>
        </div>
    </form>

</div>
@endsection
