@extends('layouts.admin')

@section('title', 'Global Design System & Theme')

@section('content')
<div class="max-w-4xl space-y-8">

    <div>
        <h1 class="text-xl font-bold text-white">Global Design System & Theme Engine</h1>
        <p class="text-xs text-slate-400 mt-1">Configure real-time CSS design tokens, primary neon accents, surface backgrounds, border radius scale, and custom CSS overrides.</p>
    </div>

    <form action="{{ route('admin.theme.update') }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Primary Color -->
            <div>
                <label for="primary_color" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Primary Electric Accent</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="primary_color" id="primary_color" value="{{ $theme['primary_color'] ?? '#3b82f6' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['primary_color'] ?? '#3b82f6' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>

            <!-- Secondary Color -->
            <div>
                <label for="secondary_color" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Secondary Cyan Glow</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="secondary_color" id="secondary_color" value="{{ $theme['secondary_color'] ?? '#06b6d4' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['secondary_color'] ?? '#06b6d4' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>

            <!-- Accent Color -->
            <div>
                <label for="accent_color" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Indigo Highlight Accent</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="accent_color" id="accent_color" value="{{ $theme['accent_color'] ?? '#6366f1' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['accent_color'] ?? '#6366f1' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>

            <!-- Dark Background -->
            <div>
                <label for="bg_dark" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Deep Canvas Background</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="bg_dark" id="bg_dark" value="{{ $theme['bg_dark'] ?? '#090d16' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['bg_dark'] ?? '#090d16' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>

            <!-- Card Background -->
            <div>
                <label for="bg_card" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Surface Card Background</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="bg_card" id="bg_card" value="{{ $theme['bg_card'] ?? '#131b2e' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['bg_card'] ?? '#131b2e' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>

            <!-- Text Main -->
            <div>
                <label for="text_main" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Primary Typography Color</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="text_main" id="text_main" value="{{ $theme['text_main'] ?? '#f8fafc' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $theme['text_main'] ?? '#f8fafc' }}" readonly
                        class="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono">
                </div>
            </div>
        </div>

        <div>
            <label for="border_radius" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">UI Border Radius Scale</label>
            <select name="border_radius" id="border_radius" class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                <option value="0.375rem" {{ ($theme['border_radius'] ?? '') === '0.375rem' ? 'selected' : '' }}>Compact Sharp (0.375rem / 6px)</option>
                <option value="0.75rem" {{ ($theme['border_radius'] ?? '0.75rem') === '0.75rem' ? 'selected' : '' }}>Modern Rounded (0.75rem / 12px)</option>
                <option value="1rem" {{ ($theme['border_radius'] ?? '') === '1rem' ? 'selected' : '' }}>Soft Curved (1rem / 16px)</option>
            </select>
        </div>

        <div>
            <label for="custom_css" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Custom CSS Runtime Injection</label>
            <textarea name="custom_css" id="custom_css" rows="5"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs font-mono focus:outline-none focus:border-blue-500"
                placeholder="/* Custom CSS rules injected directly into public app head */">{{ $theme['custom_css'] ?? '' }}</textarea>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Publish Theme & Tokens
            </button>
        </div>
    </form>

</div>
@endsection
