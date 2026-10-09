@extends('layouts.admin')

@section('title', 'Executive Testimonials')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Executive Endorsements & Peer Reviews</h1>
            <p class="text-xs text-slate-400 mt-1">Manage quotes, author titles, companies, ratings, and publication status.</p>
        </div>
        <a href="{{ route('admin.testimonials.create') }}" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-lg shadow-blue-500/20 transition flex items-center gap-2">
            <i data-lucide="plus" class="w-4 h-4"></i> Add Endorsement
        </a>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Author & Title</th>
                    <th class="px-6 py-4">Quote</th>
                    <th class="px-6 py-4">Rating</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @forelse ($testimonials as $test)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4">
                            <div class="font-bold text-white">{{ $test->author_name }}</div>
                            <div class="text-xs text-blue-400 mt-0.5">{{ $test->author_title }} @if($test->company)— {{ $test->company }}@endif</div>
                        </td>
                        <td class="px-6 py-4 text-xs text-slate-400 italic line-clamp-2">"{{ $test->quote }}"</td>
                        <td class="px-6 py-4 text-amber-400 text-xs">★ {{ $test->rating }}/5</td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.testimonials.edit', $test) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition">Edit</a>
                                <form action="{{ route('admin.testimonials.destroy', $test) }}" method="POST" onsubmit="return confirm('Delete testimonial?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold transition">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="4" class="px-6 py-8 text-center text-slate-500 text-xs">No endorsements added yet.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

</div>
@endsection
