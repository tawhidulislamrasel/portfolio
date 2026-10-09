@extends('layouts.app')

@section('title', 'Blog & Technical Articles | ' . ($settings['site_title'] ?? 'Senior Software Engineer'))

@section('content')
<div class="pt-28 pb-20 max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mb-12 space-y-4">
        <span class="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
            Articles & Insights
        </span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Engineering Blog
        </h1>
        <p class="text-lg text-slate-400">
            Deep dives into software architecture, WebGL graphics, microservices, database design, and lessons learned leading engineering teams.
        </p>
    </div>

    @if($categories->count() > 0)
        <div class="flex flex-wrap gap-2 mb-10">
            <span class="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold">All Posts</span>
            @foreach($categories as $category)
                <span class="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-semibold hover:border-slate-700 transition cursor-pointer">
                    {{ $category }}
                </span>
            @endforeach
        </div>
    @endif

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @forelse($posts as $post)
            <article class="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col">
                @if($post->cover_image)
                    <div class="aspect-video overflow-hidden bg-slate-950">
                        <img src="{{ asset($post->cover_image) }}" alt="{{ $post->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>
                @else
                    <div class="aspect-video bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center p-6 border-b border-slate-800">
                        <span class="text-xs font-mono font-bold text-slate-600 tracking-wider uppercase">{{ $post->category }}</span>
                    </div>
                @endif

                <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between text-xs text-slate-400 font-mono">
                            <span class="text-blue-400 font-semibold">{{ $post->category }}</span>
                            <span>{{ $post->published_at ? $post->published_at->format('M d, Y') : 'Recent' }}</span>
                        </div>
                        <h2 class="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition line-clamp-2">
                            <a href="{{ route('blog.show', $post->slug) }}">
                                {{ $post->title }}
                            </a>
                        </h2>
                        <p class="text-sm text-slate-400 line-clamp-3">
                            {{ $post->excerpt }}
                        </p>
                    </div>

                    <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                        <div class="flex flex-wrap gap-1.5">
                            @if(is_array($post->tags_json))
                                @foreach(array_slice($post->tags_json, 0, 3) as $tag)
                                    <span class="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded">#{{ $tag }}</span>
                                @endforeach
                            @endif
                        </div>
                        <a href="{{ route('blog.show', $post->slug) }}" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                            Read More
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </article>
        @empty
            <div class="col-span-full py-16 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
                No articles published yet. Check back soon!
            </div>
        @endforelse
    </div>

    <div class="mt-12">
        {{ $posts->links() }}
    </div>
</div>
@endsection
