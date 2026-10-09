@extends('layouts.admin')

@section('title', 'Page Section Builder')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Dynamic Section Manager & Page Builder</h1>
            <p class="text-xs text-slate-400 mt-1">Enable, disable, reorder, and edit dynamic sections rendered on the public 3D portfolio homepage.</p>
        </div>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Order</th>
                    <th class="px-6 py-4">Section Name</th>
                    <th class="px-6 py-4">Type</th>
                    <th class="px-6 py-4">Title Heading</th>
                    <th class="px-6 py-4">Status</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @foreach ($sections as $section)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4 font-mono text-xs font-bold text-slate-400">#{{ $section->order_column }}</td>
                        <td class="px-6 py-4 font-bold text-white">{{ $section->name }}</td>
                        <td class="px-6 py-4"><span class="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-xs font-mono">{{ $section->type }}</span></td>
                        <td class="px-6 py-4 text-slate-300">{{ $section->title ?? '—' }}</td>
                        <td class="px-6 py-4">
                            <form action="{{ route('admin.sections.toggle', $section) }}" method="POST">
                                @csrf
                                <button type="submit" class="px-3 py-1 rounded-full text-xs font-semibold {{ $section->is_enabled ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30' }}">
                                    {{ $section->is_enabled ? 'Enabled' : 'Disabled' }}
                                </button>
                            </form>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="{{ route('admin.sections.edit', $section) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition">
                                Edit Section
                            </a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</div>
@endsection
