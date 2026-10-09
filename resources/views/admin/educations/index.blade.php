@extends('layouts.admin')

@section('title', 'Education')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Education & Qualifications</h1>
            <p class="text-xs text-slate-400 mt-1">Manage academic degrees, institutions, study fields, and honors.</p>
        </div>
        <a href="{{ route('admin.educations.create') }}" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-lg shadow-blue-500/20 transition flex items-center gap-2">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Education
        </a>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Degree & Field</th>
                    <th class="px-6 py-4">Institution</th>
                    <th class="px-6 py-4">Duration</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @forelse ($educations as $edu)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4 font-bold text-white">{{ $edu->degree }} <span class="text-slate-400 font-normal">({{ $edu->field_of_study }})</span></td>
                        <td class="px-6 py-4 text-slate-300">{{ $edu->institution }}</td>
                        <td class="px-6 py-4 text-xs font-mono text-slate-400">{{ $edu->start_date }} — {{ $edu->end_date ?? 'Present' }}</td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.educations.edit', $edu) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition">Edit</a>
                                <form action="{{ route('admin.educations.destroy', $edu) }}" method="POST" onsubmit="return confirm('Delete education record?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold transition">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-8 text-center text-slate-500 text-xs">No education records added yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

</div>
@endsection
