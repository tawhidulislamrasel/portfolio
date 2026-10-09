@extends('layouts.admin')

@section('title', 'Add Technical Skill')

@section('content')
<div class="max-w-2xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Add Technical Skill</h1>
            <p class="text-xs text-slate-400 mt-1">Add a core language, framework, database, or architecture competency.</p>
        </div>
        <a href="{{ route('admin.skills.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back to Skills</a>
    </div>

    <form action="{{ route('admin.skills.store') }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Skill Name</label>
                <input type="text" name="name" id="name" value="{{ old('name') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="category" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Category Group</label>
                <input type="text" name="category" id="category" value="{{ old('category', 'Backend & Architecture') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="proficiency_percentage" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Proficiency Percentage (1 - 100)</label>
                <input type="number" name="proficiency_percentage" id="proficiency_percentage" value="{{ old('proficiency_percentage', 90) }}" min="1" max="100" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <div>
                <label for="icon" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Lucide Icon Key Name</label>
                <input type="text" name="icon" id="icon" value="{{ old('icon', 'code-2') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. code-2, database, layers, cpu">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Display Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', 1) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div class="flex items-center pt-6">
                <label class="flex items-center gap-2 cursor-pointer text-slate-300 text-xs font-semibold">
                    <input type="checkbox" name="is_featured" value="1" checked class="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0">
                    <span>Feature on Main Showcase</span>
                </label>
            </div>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Add Skill
            </button>
        </div>
    </form>

</div>
@endsection
