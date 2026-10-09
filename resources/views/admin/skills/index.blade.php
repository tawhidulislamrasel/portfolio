@extends('layouts.admin')

@section('title', 'Technical Skills & Skill Groups')

@section('content')
<div class="space-y-8">

    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h1 class="text-xl font-bold text-white">Technical Skills & Skill Groups</h1>
            <p class="text-xs text-slate-400 mt-1">Organize core competencies into skill groups, proficiency levels, and custom icons.</p>
        </div>
        <div class="flex items-center gap-3">
            <a href="{{ route('admin.skills.create') }}" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-lg shadow-blue-500/20 transition flex items-center gap-2">
                <i data-lucide="plus" class="w-4 h-4"></i> Add Skill / Skill Group
            </a>
        </div>
    </div>

    <!-- Skill Groups Overview Cards -->
    <div class="space-y-4">
        <h2 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4 text-blue-400"></i> Active Skill Groups
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            @forelse ($categories as $cat)
                @php
                    $count = $skills->where('category', $cat)->count();
                @endphp
                <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:border-slate-700 transition group">
                    <div>
                        <div class="font-bold text-sm text-slate-200 group-hover:text-blue-400 transition">{{ $cat }}</div>
                        <div class="text-xs text-slate-500 mt-0.5">{{ $count }} {{ Str::plural('Skill', $count) }}</div>
                    </div>
                    <a href="{{ route('admin.skills.create', ['category' => $cat]) }}" title="Add skill to {{ $cat }}" class="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition">
                        <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            @empty
                <div class="col-span-full p-4 rounded-xl bg-slate-900/50 border border-slate-800 text-xs text-slate-500 text-center">
                    No skill groups created yet. Click "+ Add Skill / Skill Group" above to create your first group.
                </div>
            @endforelse
        </div>
    </div>

    <!-- Skills Table -->
    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
            <h3 class="text-sm font-bold text-slate-200">All Technical Skills</h3>
            <span class="text-xs text-slate-500 font-mono">Total: {{ $skills->count() }} Skills</span>
        </div>
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Skill Name</th>
                    <th class="px-6 py-4">Skill Group</th>
                    <th class="px-6 py-4">Proficiency</th>
                    <th class="px-6 py-4">Icon Key</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @forelse ($skills as $skill)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4 font-bold text-white flex items-center gap-2.5">
                            <i data-lucide="{{ $skill->icon ?? 'code-2' }}" class="w-4 h-4 text-blue-400 shrink-0"></i>
                            <span>{{ $skill->name }}</span>
                            @if($skill->is_featured)
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">Featured</span>
                            @endif
                        </td>
                        <td class="px-6 py-4">
                            <span class="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700/60">
                                {{ $skill->category }}
                            </span>
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center gap-3">
                                <div class="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style="width: {{ $skill->proficiency_percentage }}%"></div>
                                </div>
                                <span class="text-xs font-mono text-slate-400">{{ $skill->proficiency_percentage }}%</span>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-xs font-mono text-slate-400">{{ $skill->icon ?? 'code-2' }}</td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.skills.edit', $skill) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition">
                                    Edit
                                </a>
                                <form action="{{ route('admin.skills.destroy', $skill) }}" method="POST" onsubmit="return confirm('Delete this skill?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold transition">
                                        Delete
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="px-6 py-12 text-center text-slate-500 text-xs">
                            No technical skills or groups added yet. Click "+ Add Skill / Skill Group" to get started.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

</div>
@endsection
