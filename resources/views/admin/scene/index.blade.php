@extends('layouts.admin')

@section('title', '3D WebGL Scene Configurator')

@section('content')
<div class="max-w-4xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">3D WebGL Scene & Environment Configurator</h1>
            <p class="text-xs text-slate-400 mt-1">Control interactive 3D centerpiece geometry, volumetric lights, particle density, camera FOV, and mobile performance quality profiles.</p>
        </div>
    </div>

    <form action="{{ route('admin.scene.update') }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <!-- Scene Preset Selector -->
        <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Active 3D Environment Preset</label>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="relative flex flex-col p-4 rounded-xl border {{ ($scene['active_preset'] ?? 'tech_core') === 'tech_core' ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400' }} cursor-pointer hover:border-slate-700">
                    <input type="radio" name="active_preset" value="tech_core" class="sr-only" {{ ($scene['active_preset'] ?? 'tech_core') === 'tech_core' ? 'checked' : '' }}>
                    <span class="font-bold text-sm text-slate-100">Tech Core Sphere</span>
                    <span class="text-xs text-slate-400 mt-1">Floating wireframe tech orb with orbiting rings & glowing core.</span>
                </label>

                <label class="relative flex flex-col p-4 rounded-xl border {{ ($scene['active_preset'] ?? '') === 'cyber_cube' ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400' }} cursor-pointer hover:border-slate-700">
                    <input type="radio" name="active_preset" value="cyber_cube" class="sr-only" {{ ($scene['active_preset'] ?? '') === 'cyber_cube' ? 'checked' : '' }}>
                    <span class="font-bold text-sm text-slate-100">Cyber Tesseract</span>
                    <span class="text-xs text-slate-400 mt-1">Procedural hyper-cube lattice with interactive vertex morphing.</span>
                </label>

                <label class="relative flex flex-col p-4 rounded-xl border {{ ($scene['active_preset'] ?? '') === 'neural_network' ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400' }} cursor-pointer hover:border-slate-700">
                    <input type="radio" name="active_preset" value="neural_network" class="sr-only" {{ ($scene['active_preset'] ?? '') === 'neural_network' ? 'checked' : '' }}>
                    <span class="font-bold text-sm text-slate-100">Neural Lattice</span>
                    <span class="text-xs text-slate-400 mt-1">Interconnected node cloud with dynamic light signal pulses.</span>
                </label>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Light Color -->
            <div>
                <label for="light_color" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Primary Volumetric Light Color</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="light_color" id="light_color" value="{{ $scene['light_color'] ?? '#3b82f6' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $scene['light_color'] ?? '#3b82f6' }}" readonly
                        class="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-mono">
                </div>
            </div>

            <!-- Particle Color -->
            <div>
                <label for="particle_color" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Floating Particle Color</label>
                <div class="flex items-center gap-3">
                    <input type="color" name="particle_color" id="particle_color" value="{{ $scene['particle_color'] ?? '#06b6d4' }}"
                        class="w-12 h-10 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer p-1">
                    <input type="text" value="{{ $scene['particle_color'] ?? '#06b6d4' }}" readonly
                        class="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-mono">
                </div>
            </div>

            <!-- Light Intensity -->
            <div>
                <label for="light_intensity" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Light Intensity Multiplier (0.1 - 10)</label>
                <input type="number" step="0.1" name="light_intensity" id="light_intensity" value="{{ $scene['light_intensity'] ?? '1.8' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Particle Density -->
            <div>
                <label for="particle_density" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Particle Count (100 - 5000)</label>
                <input type="number" name="particle_density" id="particle_density" value="{{ $scene['particle_density'] ?? '1200' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Rotation Speed -->
            <div>
                <label for="rotation_speed" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Continuous Rotation Speed</label>
                <input type="number" step="0.001" name="rotation_speed" id="rotation_speed" value="{{ $scene['rotation_speed'] ?? '0.005' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Camera FOV -->
            <div>
                <label for="camera_fov" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Camera Field of View (FOV)</label>
                <input type="number" name="camera_fov" id="camera_fov" value="{{ $scene['camera_fov'] ?? '60' }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
            </div>

            <!-- Mobile Quality Profile -->
            <div>
                <label for="mobile_quality_preset" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Mobile Performance Profile</label>
                <select name="mobile_quality_preset" id="mobile_quality_preset"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
                    <option value="low" {{ ($scene['mobile_quality_preset'] ?? '') === 'low' ? 'selected' : '' }}>Low (Max FPS & Battery Saver)</option>
                    <option value="medium" {{ ($scene['mobile_quality_preset'] ?? 'medium') === 'medium' ? 'selected' : '' }}>Medium (Balanced Visuals)</option>
                    <option value="high" {{ ($scene['mobile_quality_preset'] ?? '') === 'high' ? 'selected' : '' }}>High (Full Particle Density)</option>
                </select>
            </div>

            <!-- WebGL Fallback -->
            <div>
                <label for="webgl_fallback_enabled" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WebGL Non-3D Fallback Mode</label>
                <select name="webgl_fallback_enabled" id="webgl_fallback_enabled"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
                    <option value="true" {{ ($scene['webgl_fallback_enabled'] ?? 'true') === 'true' ? 'selected' : '' }}>Enabled (Graceful HTML render on legacy browsers)</option>
                    <option value="false" {{ ($scene['webgl_fallback_enabled'] ?? '') === 'false' ? 'selected' : '' }}>Disabled</option>
                </select>
            </div>
        </div>

        <input type="hidden" name="bloom_enabled" value="true">

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Publish 3D Scene Configuration
            </button>
        </div>
    </form>

</div>
@endsection
