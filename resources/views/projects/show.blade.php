@extends('layouts.app')

@section('title', ($project->meta_title ?? $project->title) . ' | Architectural Case Study')
@section('meta_description', $project->meta_description ?? $project->summary)

@section('content')
<div class="py-16 px-6 max-w-5xl mx-auto space-y-16">

    <!-- Breadcrumb & Back button -->
    <div class="flex items-center justify-between">
        <a href="{{ route('home') }}#projects" class="text-xs font-semibold text-blue-400 hover:text-blue-300 transition flex items-center gap-1.5">
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to All Projects
        </a>
        <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
            {{ $project->category }}
        </span>
    </div>

    <!-- Header Section -->
    <div class="space-y-6">
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {{ $project->title }}
        </h1>
        <p class="text-lg text-slate-300 font-light leading-relaxed">
            {{ $project->tagline ?? $project->summary }}
        </p>

        <div class="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            <div>
                <span class="text-slate-500 uppercase font-mono block mb-1">Role & Responsibility</span>
                <span class="font-semibold text-slate-200">{{ $project->role_description ?? 'Lead Architect & Software Engineer' }}</span>
            </div>
            @if ($project->demo_url)
                <div>
                    <span class="text-slate-500 uppercase font-mono block mb-1">Live Application</span>
                    <a href="{{ $project->demo_url }}" target="_blank" class="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                        Launch Demo <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            @endif
            @if ($project->repo_url)
                <div>
                    <span class="text-slate-500 uppercase font-mono block mb-1">Source Repository</span>
                    <a href="{{ $project->repo_url }}" target="_blank" class="text-blue-400 hover:underline flex items-center gap-1 font-semibold">
                        GitHub Repo <i data-lucide="github" class="w-3.5 h-3.5"></i>
                    </a>
                </div>
            @endif
        </div>
    </div>

    <!-- Cover Image Banner (If uploaded locally via Admin -> Projects) -->
    @if ($project->cover_image)
        <div class="w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <img src="{{ $project->cover_image }}" alt="{{ $project->title }}" class="w-full h-full object-cover">
        </div>
    @endif

    <!-- Tech Stack Badge Showcase -->
    <div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-3">
        <span class="text-xs font-mono uppercase text-slate-400">System Technology Stack & Infrastructure</span>
        <div class="flex flex-wrap gap-2">
            @foreach ($project->tech_stack_json ?? [] as $tech)
                <span class="px-3 py-1 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono font-semibold">
                    {{ $tech }}
                </span>
            @endforeach
        </div>
    </div>

    <!-- Problem vs Solution Breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div class="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                <i data-lucide="alert-circle" class="w-4 h-4"></i> The Challenge & Problem
            </div>
            <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                {{ $project->problem_statement ?? 'Detailed analysis of scaling friction, database bottlenecks, or operational challenges addressed by this project.' }}
            </p>
        </div>

        <div class="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
            <div class="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                <i data-lucide="check-circle-2" class="w-4 h-4"></i> The Solution Architecture
            </div>
            <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                {{ $project->solution ?? 'Engineered domain service layers, optimized database schemas, and clean decoupled components.' }}
            </p>
        </div>
    </div>

    <!-- Deep-Dive Architecture -->
    @if ($project->architecture_description)
    <div class="bg-slate-900/80 border border-slate-800 p-8 sm:p-10 rounded-3xl space-y-6">
        <h2 class="text-xl font-bold text-white flex items-center gap-2">
            <i data-lucide="cpu" class="w-5 h-5 text-blue-400"></i> Deep-Dive Technical Architecture & Database Design
        </h2>
        <div class="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
            {{ $project->architecture_description }}
        </div>
    </div>
    @endif

    <!-- Local Gallery Screenshots (If uploaded) -->
    @if (!empty($project->gallery_json))
        <div class="space-y-6">
            <h2 class="text-xl font-bold text-white flex items-center gap-2">
                <i data-lucide="image" class="w-5 h-5 text-cyan-400"></i> Project Screenshots & System Interface Gallery
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                @foreach ($project->gallery_json as $galleryImg)
                    <div class="h-64 rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group">
                        <img src="{{ $galleryImg }}" alt="Gallery Image" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    </div>
                @endforeach
            </div>
        </div>
    @endif

    <!-- Related Projects -->
    @if (count($relatedProjects) > 0)
    <div class="pt-8 border-t border-slate-800 space-y-8">
        <h3 class="text-xl font-bold text-white">Explore More Case Studies</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @foreach ($relatedProjects as $rel)
                <a href="{{ route('projects.show', $rel->slug) }}" class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition block space-y-3">
                    <span class="text-[10px] font-semibold text-blue-400 uppercase font-mono">{{ $rel->category }}</span>
                    <h4 class="font-bold text-white text-sm line-clamp-1">{{ $rel->title }}</h4>
                    <p class="text-xs text-slate-400 line-clamp-2">{{ $rel->summary }}</p>
                </a>
            @endforeach
        </div>
    </div>
    @endif

</div>
@endsection
