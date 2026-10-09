@extends('layouts.admin')

@section('title', 'Technical Skills Stack')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Technical Skills & Competencies</h1>
            <p class="text-xs text-slate-400 mt-1">Manage core competencies, proficiency percentages, Lucide icon keys, and featured flags.</p>
        </div>
        <a href="{{ route('admin.skills.create') }}" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-lg shadow-blue-500/20 transition flex items-center gap-2">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Skill
        </a>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Skill Name</th>
                    <th class="px-6 py-4">Category</th>
                    <th class="px-6 py-4">Proficiency</th>
                    <th class="px-6 py-4">Icon Key</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @forelse ($skills as $skill)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4 font-bold text-white flex items-center gap-2">
                            <i data-lucide="{{ $skill->icon ?? 'code-2' }}" class="w-4 h-4 text-blue-400"></i>
                            {{ $skill->name }}
                        </td>
                        <td class="px-6 py-4"><span class="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono">{{ $skill->category }}</span></td>
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
                        <td colspan="5" class="px-6 py-8 text-center text-slate-500 text-xs">No technical skills added yet.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

</div>
@endsection
