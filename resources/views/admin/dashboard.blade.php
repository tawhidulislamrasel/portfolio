@extends('layouts.admin')

@section('title', 'Control Center Dashboard')

@section('content')
<div class="space-y-8">

    <!-- Hero Header -->
    <div class="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950/40 p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <h1 class="text-2xl font-bold text-white tracking-tight">System Status & Content Control Hub</h1>
        <p class="text-sm text-slate-400 mt-2 max-w-2xl">
            Welcome to your centralized portfolio management platform. Modify 3D scene presets, update career case studies, fine-tune design system tokens, and respond to incoming client enquiries.
        </p>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Published Projects</span>
                <div class="text-3xl font-bold text-white mt-1">{{ $stats['published_projects'] }} <span class="text-xs text-slate-500 font-normal">/ {{ $stats['total_projects'] }} Total</span></div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <i data-lucide="folder-kanban" class="w-6 h-6"></i>
            </div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Unread Enquiries</span>
                <div class="text-3xl font-bold text-white mt-1">{{ $stats['unread_enquiries'] }} <span class="text-xs text-slate-500 font-normal">/ {{ $stats['total_enquiries'] }} Total</span></div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <i data-lucide="mail" class="w-6 h-6"></i>
            </div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Technical Skills</span>
                <div class="text-3xl font-bold text-white mt-1">{{ $stats['total_skills'] }}</div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <i data-lucide="code-2" class="w-6 h-6"></i>
            </div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl flex items-center justify-between">
            <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Media Assets</span>
                <div class="text-3xl font-bold text-white mt-1">{{ $stats['total_media'] }}</div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <i data-lucide="image" class="w-6 h-6"></i>
            </div>
        </div>
    </div>

    <!-- Two-Column Section: Recent Enquiries & Activity Audit Log -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Recent Enquiries -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-lg font-bold text-white flex items-center gap-2">
                    <i data-lucide="inbox" class="w-5 h-5 text-blue-400"></i>
                    Recent Client Enquiries
                </h2>
                <a href="{{ route('admin.enquiries.index') }}" class="text-xs text-blue-400 hover:underline">View All</a>
            </div>

            <div class="space-y-4">
                @forelse ($recentEnquiries as $enquiry)
                    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start justify-between">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="font-semibold text-slate-200 text-sm">{{ $enquiry->name }}</span>
                                <span class="text-xs px-2 py-0.5 rounded-full {{ $enquiry->status === 'unread' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-800 text-slate-400' }}">
                                    {{ ucfirst($enquiry->status) }}
                                </span>
                            </div>
                            <p class="text-xs text-slate-400 mt-1 line-clamp-1">{{ $enquiry->subject ?? 'General Enquiry' }} — {{ $enquiry->message }}</p>
                            <span class="text-[10px] text-slate-500 mt-2 block">{{ $enquiry->created_at->diffForHumans() }}</span>
                        </div>
                        <a href="{{ route('admin.enquiries.show', $enquiry) }}" class="px-3 py-1.5 rounded-lg text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 transition">View</a>
                    </div>
                @empty
                    <div class="text-center py-8 text-slate-500 text-xs">No client enquiries received yet.</div>
                @endforelse
            </div>
        </div>

        <!-- Activity Audit Log -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6">
            <h2 class="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <i data-lucide="shield-check" class="w-5 h-5 text-emerald-400"></i>
                Admin Security Audit Trail
            </h2>

            <div class="space-y-3">
                @forelse ($recentLogs as $log)
                    <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                        <div class="flex items-center gap-3">
                            <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                            <div>
                                <span class="font-semibold text-slate-300 uppercase tracking-wider text-[10px] bg-slate-800 px-2 py-0.5 rounded">{{ $log->action }}</span>
                                <p class="text-slate-400 mt-1">{{ $log->description }}</p>
                            </div>
                        </div>
                        <span class="text-[10px] text-slate-500">{{ $log->created_at->diffForHumans() }}</span>
                    </div>
                @empty
                    <div class="text-center py-8 text-slate-500 text-xs">No activity logged yet.</div>
                @endforelse
            </div>
        </div>
    </div>

</div>
@endsection
