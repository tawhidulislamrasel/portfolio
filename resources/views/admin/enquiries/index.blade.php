@extends('layouts.admin')

@section('title', 'Client Enquiries Inbox')

@section('content')
<div class="space-y-8">

    <div>
        <h1 class="text-xl font-bold text-white">Client Enquiries & Collaboration Inbox</h1>
        <p class="text-xs text-slate-400 mt-1">Review contact form submissions, update response statuses, and maintain internal admin notes.</p>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
        <table class="w-full text-left text-sm text-slate-300">
            <thead class="bg-slate-950/80 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <tr>
                    <th class="px-6 py-4">Sender & Email</th>
                    <th class="px-6 py-4">Subject</th>
                    <th class="px-6 py-4">Received Date</th>
                    <th class="px-6 py-4">Status</th>
                    <th class="px-6 py-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
                @forelse ($enquiries as $enquiry)
                    <tr class="hover:bg-slate-800/40 transition">
                        <td class="px-6 py-4">
                            <div class="font-bold text-white">{{ $enquiry->name }}</div>
                            <div class="text-xs text-slate-400 mt-0.5">{{ $enquiry->email }}</div>
                        </td>
                        <td class="px-6 py-4 font-semibold text-slate-200">{{ $enquiry->subject ?? 'General Enquiry' }}</td>
                        <td class="px-6 py-4 text-xs font-mono text-slate-400">{{ $enquiry->created_at->format('M d, Y H:i') }}</td>
                        <td class="px-6 py-4">
                            <span class="px-2.5 py-1 rounded-full text-xs font-semibold {{ $enquiry->status === 'unread' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : ($enquiry->status === 'replied' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-slate-800 text-slate-400') }}">
                                {{ ucfirst($enquiry->status) }}
                            </span>
                        </td>
                        <td class="px-6 py-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <a href="{{ route('admin.enquiries.show', $enquiry) }}" class="px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition">View Message</a>
                                <form action="{{ route('admin.enquiries.destroy', $enquiry) }}" method="POST" onsubmit="return confirm('Delete message?')">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="px-3 py-1.5 rounded-lg bg-rose-500/20 text-rose-400 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold transition">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr><td colspan="5" class="px-6 py-8 text-center text-slate-500 text-xs">No client enquiries in your inbox.</td></tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div>
        {{ $enquiries->links() }}
    </div>

</div>
@endsection
