@extends('layouts.admin')

@section('title', 'Media Asset Library')

@section('content')
<div class="space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Media Asset Library</h1>
            <p class="text-xs text-slate-400 mt-1">Upload and manage images, project screenshots, GLTF/GLB 3D assets, and document files.</p>
        </div>
    </div>

    <!-- Upload Box -->
    <form action="{{ route('admin.media.store') }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        @csrf
        <div class="flex-1 w-full">
            <label for="file" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Select Asset File to Upload (Images, PDF, 3D GLB/GLTF)</label>
            <input type="file" name="file" id="file" required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
        </div>
        <div class="w-full sm:w-auto self-end">
            <button type="submit" class="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-xs shadow-lg shadow-blue-500/20 transition flex items-center justify-center gap-2">
                <i data-lucide="upload" class="w-4 h-4"></i> Upload Asset
            </button>
        </div>
    </form>

    <!-- Media Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        @forelse ($assets as $asset)
            <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden group relative flex flex-col justify-between">
                <div class="h-32 bg-slate-950 flex items-center justify-center overflow-hidden p-2">
                    @if (Str::startsWith($asset->mime_type, 'image/'))
                        <img src="{{ $asset->file_path }}" alt="{{ $asset->alt_text }}" class="w-full h-full object-cover rounded-lg">
                    @else
                        <div class="flex flex-col items-center gap-1 text-slate-400">
                            <i data-lucide="file" class="w-8 h-8"></i>
                            <span class="text-[10px] font-mono text-slate-500">{{ uppercase(pathinfo($asset->original_name, PATHINFO_EXTENSION)) }}</span>
                        </div>
                    @endif
                </div>

                <div class="p-3 border-t border-slate-800/60 text-xs">
                    <div class="font-bold text-slate-200 truncate" title="{{ $asset->original_name }}">{{ $asset->original_name }}</div>
                    <div class="text-[10px] text-slate-500 mt-0.5 font-mono">{{ number_format($asset->file_size / 1024, 1) }} KB</div>

                    <div class="mt-3 flex items-center justify-between gap-2">
                        <a href="{{ $asset->file_path }}" target="_blank" class="text-blue-400 hover:underline text-[10px] flex items-center gap-1">
                            <i data-lucide="external-link" class="w-3 h-3"></i> View
                        </a>

                        <form action="{{ route('admin.media.destroy', $asset) }}" method="POST" onsubmit="return confirm('Delete this media asset?')">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="text-rose-400 hover:text-rose-300 text-[10px] font-semibold">Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        @empty
            <div class="col-span-full py-12 text-center text-slate-500 text-xs">No media assets uploaded yet.</div>
        @endforelse
    </div>

    <div>
        {{ $assets->links() }}
    </div>

</div>
@endsection
