@extends('layouts.admin')

@section('title', 'Blogs & Articles')

@section('content')
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-2xl font-bold text-slate-100">Blogs & Articles</h1>
            <p class="text-sm text-slate-400">Publish engineering posts, technical deep dives, and thoughts.</p>
        </div>
        <a href="{{ route('admin.posts.create') }}" class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-sm font-semibold rounded-xl shadow-lg transition">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Write New Post
        </a>
    </div>

    @if(session('success'))
        <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            {{ session('success') }}
        </div>
    @endif

    <div class="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl">
        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-slate-300">
                <thead class="bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800">
                    <tr>
                        <th class="px-6 py-4">Article</th>
                        <th class="px-6 py-4">Category</th>
                        <th class="px-6 py-4">Status</th>
                        <th class="px-6 py-4">Order</th>
                        <th class="px-6 py-4 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60">
                    @forelse($posts as $post)
                        <tr class="hover:bg-slate-800/40 transition">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    @if($post->cover_image)
                                        <img src="{{ asset($post->cover_image) }}" class="w-12 h-12 object-cover rounded-lg border border-slate-700/50">
                                    @else
                                        <div class="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700/50 flex items-center justify-center text-slate-500 text-xs font-bold">POST</div>
                                    @endif
                                    <div>
                                        <div class="font-bold text-slate-100 line-clamp-1">{{ $post->title }}</div>
                                        <div class="text-xs text-slate-400 font-mono">/blog/{{ $post->slug }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4">
                                <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    {{ $post->category }}
                                </span>
                            </td>
                            <td class="px-6 py-4">
                                @if($post->status === 'published')
                                    <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Published</span>
                                @else
                                    <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">Draft</span>
                                @endif
                            </td>
                            <td class="px-6 py-4 text-xs font-mono text-slate-400">#{{ $post->order_column }}</td>
                            <td class="px-6 py-4 text-right space-x-2">
                                <a href="{{ route('blog.show', $post->slug) }}" target="_blank" class="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition">View</a>
                                <a href="{{ route('admin.posts.edit', $post) }}" class="px-3 py-1.5 text-xs bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30 rounded-lg transition">Edit</a>
                                <form action="{{ route('admin.posts.destroy', $post) }}" method="POST" class="inline" onsubmit="return confirm('Delete this blog post?')">
                                    @csrf
                                    @method('DELETE')
                                    <button class="px-3 py-1.5 text-xs bg-rose-600/20 text-rose-300 hover:bg-rose-600/30 border border-rose-500/30 rounded-lg transition">Delete</button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-6 py-12 text-center text-slate-500">
                                No blog posts created yet. Click "Write New Post" to start.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        <div class="p-4 border-t border-slate-800">
            {{ $posts->links() }}
        </div>
    </div>
</div>
@endsection
