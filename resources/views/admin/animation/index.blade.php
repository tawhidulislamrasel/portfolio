@extends('layouts.admin')

@section('title', 'Animation & Motion Control Center')

@section('content')
<div class="max-w-4xl space-y-8">

    <div>
        <h1 class="text-xl font-bold text-white">GSAP Motion & Scroll Choreography Control Center</h1>
        <p class="text-xs text-slate-400 mt-1">Fine-tune GSAP timeline scroll durations, Lenis smooth scrolling velocity, custom magnetic cursor effects, and accessibility reduced-motion handling.</p>
    </div>

    <form action="{{ route('admin.animation.update') }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Scroll Duration -->
            <div>
                <label for="scroll_duration" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Lenis Smooth Scroll Duration (Seconds)</label>
                <input type="number" step="0.1" name="scroll_duration" id="scroll_duration" value="{{ $animation['scroll_duration'] ?? '1.2' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Transition Speed -->
            <div>
                <label for="transition_speed" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">GSAP Scene Transition Speed (Seconds)</label>
                <input type="number" step="0.1" name="transition_speed" id="transition_speed" value="{{ $animation['transition_speed'] ?? '0.8' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Easing Preset -->
            <div>
                <label for="easing_function" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">GSAP Easing Function Curve</label>
                <select name="easing_function" id="easing_function"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
                    <option value="power2.out" {{ ($animation['easing_function'] ?? 'power2.out') === 'power2.out' ? 'selected' : '' }}>Power2 Out (Smooth & Natural)</option>
                    <option value="power3.inOut" {{ ($animation['easing_function'] ?? '') === 'power3.inOut' ? 'selected' : '' }}>Power3 InOut (Dramatic Deceleration)</option>
                    <option value="expo.out" {{ ($animation['easing_function'] ?? '') === 'expo.out' ? 'selected' : '' }}>Exponential Out (Snappy Tech Curve)</option>
                </select>
            </div>

            <!-- Parallax Strength -->
            <div>
                <label for="parallax_strength" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">3D Camera Parallax Strength</label>
                <input type="number" step="0.1" name="parallax_strength" id="parallax_strength" value="{{ $animation['parallax_strength'] ?? '1.0' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Cursor Effect -->
            <div>
                <label for="cursor_effect_enabled" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Interactive Neon Cursor Effect</label>
                <select name="cursor_effect_enabled" id="cursor_effect_enabled"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                    <option value="true" {{ ($animation['cursor_effect_enabled'] ?? 'true') === 'true' ? 'selected' : '' }}>Enabled</option>
                    <option value="false" {{ ($animation['cursor_effect_enabled'] ?? '') === 'false' ? 'selected' : '' }}>Disabled</option>
                </select>
            </div>

            <!-- Magnetic Buttons -->
            <div>
                <label for="magnetic_effect_enabled" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Magnetic Button Hover Effects</label>
                <select name="magnetic_effect_enabled" id="magnetic_effect_enabled"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                    <option value="true" {{ ($animation['magnetic_effect_enabled'] ?? 'true') === 'true' ? 'selected' : '' }}>Enabled</option>
                    <option value="false" {{ ($animation['magnetic_effect_enabled'] ?? '') === 'false' ? 'selected' : '' }}>Disabled</option>
                </select>
            </div>
        </div>

        <!-- Reduced Motion Preference -->
        <div>
            <label for="reduced_motion_mode" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Accessibility Reduced Motion Handling</label>
            <select name="reduced_motion_mode" id="reduced_motion_mode"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                <option value="respect_os" {{ ($animation['reduced_motion_mode'] ?? 'respect_os') === 'respect_os' ? 'selected' : '' }}>Auto (Respect System OS `prefers-reduced-motion` settings)</option>
                <option value="force_disable" {{ ($animation['reduced_motion_mode'] ?? '') === 'force_disable' ? 'selected' : '' }}>Force Disable Heavy Animations</option>
                <option value="force_enable" {{ ($animation['reduced_motion_mode'] ?? '') === 'force_enable' ? 'selected' : '' }}>Force Full Motion Enabled</option>
            </select>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Publish Motion Settings
            </button>
        </div>
    </form>

</div>
@endsection
