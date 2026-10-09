@extends('layouts.admin')

@section('title', 'Enquiry Message details')

@section('content')
<div class="max-w-3xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Enquiry Message #{{ $enquiry->id }}</h1>
            <p class="text-xs text-slate-400 mt-1">Received on {{ $enquiry->created_at->format('F d, Y \a\t g:i A') }} from {{ $enquiry->ip_address }}</p>
        </div>
        <a href="{{ route('admin.enquiries.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back to Inbox</a>
    </div>

    <!-- Message Body Card -->
    <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        <div class="border-b border-slate-800 pb-6 flex items-start justify-between">
            <div>
                <h2 class="text-lg font-bold text-white">{{ $enquiry->subject ?? 'General Enquiry' }}</h2>
                <div class="mt-2 text-sm text-slate-300">
                    From: <span class="font-bold text-white">{{ $enquiry->name }}</span>
                    &lt;<a href="mailto:{{ $enquiry->email }}" class="text-blue-400 underline">{{ $enquiry->email }}</a>&gt;
                </div>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-semibold {{ $enquiry->status === 'unread' ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400' }}">
                {{ ucfirst($enquiry->status) }}
            </span>
        </div>

        <div>
            <span class="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message Body</span>
            <div class="p-6 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {{ $enquiry->message }}
            </div>
        </div>

        <!-- Status Update & Admin Notes Form -->
        <form action="{{ route('admin.enquiries.update-status', $enquiry) }}" method="POST" class="border-t border-slate-800 pt-6 space-y-4">
            @csrf

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="status" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Update Message Status</label>
                    <select name="status" id="status" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                        <option value="unread" {{ $enquiry->status === 'unread' ? 'selected' : '' }}>Unread</option>
                        <option value="read" {{ $enquiry->status === 'read' ? 'selected' : '' }}>Read</option>
                        <option value="replied" {{ $enquiry->status === 'replied' ? 'selected' : '' }}>Replied</option>
                        <option value="archived" {{ $enquiry->status === 'archived' ? 'selected' : '' }}>Archived</option>
                    </select>
                </div>
            </div>

            <div>
                <label for="admin_notes" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Internal Admin Notes</label>
                <textarea name="admin_notes" id="admin_notes" rows="3"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm" placeholder="Add private follow-up notes...">{{ old('admin_notes', $enquiry->admin_notes) }}</textarea>
            </div>

            <div class="flex justify-end">
                <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs">Save Status & Notes</button>
            </div>
        </form>
    </div>

</div>
@endsection
