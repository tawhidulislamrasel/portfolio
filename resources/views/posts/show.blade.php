@extends('layouts.app')

@section('title', $post->meta_title ?? ($post->title . ' | Blog'))

@section('content')
<article class="pt-28 pb-20 max-w-4xl mx-auto px-6">
    <div class="mb-8 space-y-4">
        <a href="{{ route('blog.index') }}" class="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            Back to Articles
        </a>

        <div class="flex items-center gap-3 text-xs font-mono">
            <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">{{ $post->category }}</span>
            <span class="text-slate-500">•</span>
            <span class="text-slate-400">{{ $post->published_at ? $post->published_at->format('F d, Y') : 'Published' }}</span>
        </div>

        <h1 class="text-3xl md:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {{ $post->title }}
        </h1>

        @if($post->excerpt)
            <p class="text-lg text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
                {{ $post->excerpt }}
            </p>
        @endif
    </div>

    @if($post->cover_image)
        <div class="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img src="{{ asset($post->cover_image) }}" alt="{{ $post->title }}" class="w-full max-h-[480px] object-cover">
        </div>
    @endif

    <div class="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-6">
        {!! nl2br(e($post->content)) !!}
    </div>

    @if(is_array($post->tags_json) && count($post->tags_json) > 0)
        <div class="mt-12 pt-6 border-t border-slate-800 flex items-center gap-2">
            <span class="text-xs text-slate-500 font-mono">Tags:</span>
            <div class="flex flex-wrap gap-2">
                @foreach($post->tags_json as $tag)
                    <span class="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded-lg">#{{ $tag }}</span>
                @endforeach
            </div>
        </div>
    @endif

    @if($recentPosts->count() > 0)
        <div class="mt-16 pt-12 border-t border-slate-800 space-y-6">
            <h3 class="text-xl font-bold text-slate-100">Related Articles</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                @foreach($recentPosts as $recent)
                    <a href="{{ route('blog.show', $recent->slug) }}" class="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition space-y-2 block">
                        <div class="text-[10px] text-blue-400 font-mono font-semibold">{{ $recent->category }}</div>
                        <h4 class="text-sm font-bold text-slate-100 line-clamp-2 hover:text-blue-400 transition">{{ $recent->title }}</h4>
                        <p class="text-xs text-slate-400 line-clamp-2">{{ $recent->excerpt }}</p>
                    </a>
                @endforeach
            </div>
        </div>
    @endif
</article>
@endsection
