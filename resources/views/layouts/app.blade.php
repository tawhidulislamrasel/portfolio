<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth bg-slate-950 text-slate-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', $settings['seo_title'] ?? $settings['site_name'] ?? 'Senior Software Engineer Portfolio')</title>
    <meta name="description" content="@yield('meta_description', $settings['seo_description'] ?? '')">
    <meta name="keywords" content="{{ $settings['seo_keywords'] ?? '' }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Open Graph Metadata -->
    <meta property="og:title" content="@yield('title', $settings['seo_title'] ?? 'Senior Software Engineer Portfolio')">
    <meta property="og:description" content="@yield('meta_description', $settings['seo_description'] ?? '')">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ request()->url() }}">

    <!-- Dynamic Theme CSS Variables Injected from Admin Panel Database Settings -->
    @php
        $activeTheme = $theme ?? $globalTheme ?? [];
    @endphp
    <style>
        :root {
            --color-primary: {{ $activeTheme['primary_color'] ?? '#0984e3' }};
            --color-secondary: {{ $activeTheme['secondary_color'] ?? '#00cec9' }};
            --color-accent: {{ $activeTheme['accent_color'] ?? '#6c5ce7' }};
            --color-bg-dark: {{ $activeTheme['bg_dark'] ?? '#2d3436' }};
            --color-bg-card: {{ $activeTheme['bg_card'] ?? '#1e272e' }};
            --color-text-main: {{ $activeTheme['text_main'] ?? '#dfe6e9' }};
            --border-radius: {{ $activeTheme['border_radius'] ?? '0.75rem' }};
        }

        body {
            background-color: var(--color-bg-dark) !important;
            color: var(--color-text-main) !important;
        }

        /* Dynamic Palette Overrides from Database Settings */
        .bg-slate-950 {
            background-color: var(--color-bg-dark) !important;
        }
        .bg-slate-900, .bg-slate-900\/90, .bg-slate-900\/80, .bg-slate-900\/60, .bg-slate-900\/40 {
            background-color: var(--color-bg-card) !important;
        }
        .text-slate-100, .text-slate-200, .text-white {
            color: var(--color-text-main) !important;
        }
        .text-blue-400, .text-cyan-400 {
            color: var(--color-secondary) !important;
        }
        .bg-blue-600, .bg-blue-500 {
            background-color: var(--color-primary) !important;
        }
        .from-blue-600, .from-blue-500 {
            --tw-gradient-from: var(--color-primary) !important;
            --tw-gradient-to: var(--color-secondary) !important;
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
        }
        .to-cyan-600, .to-cyan-500, .to-cyan-400 {
            --tw-gradient-to: var(--color-secondary) !important;
        }

        {!! $activeTheme['custom_css'] ?? '' !!}
    </style>

    <!-- Dynamic Favicon -->
    @php
        $fav = $settings['site_favicon'] ?? $globalSettings['site_favicon'] ?? null;
    @endphp
    @if(!empty($fav))
        <link rel="icon" href="{{ asset($fav) }}">
        <link rel="shortcut icon" href="{{ asset($fav) }}">
    @endif

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="relative bg-slate-950 text-slate-100 font-sans overflow-x-hidden antialiased selection:bg-blue-500 selection:text-white">

    <!-- WebGL Canvas Container for Three.js (Fixed in background) -->
    <div id="three-canvas-container" class="fixed inset-0 pointer-events-none z-0"></div>

    <!-- WebGL Fallback Banner (If WebGL disabled or unavailable) -->
    <div id="webgl-fallback-banner" class="hidden fixed top-0 inset-x-0 bg-amber-500/20 border-b border-amber-500/30 text-amber-200 text-xs px-4 py-2 text-center z-50">
        WebGL 3D rendering is limited or fallback mode active. Displaying responsive HTML experience.
    </div>

    <!-- Interactive Cursor Dot (Custom motion effect) -->
    <div id="cursor-dot" class="fixed w-4 h-4 rounded-full bg-blue-500/40 pointer-events-none border border-blue-400/80 -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-75 ease-out hidden md:block"></div>

    <!-- Navigation Bar -->
    <header class="fixed top-0 inset-x-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <!-- Brand Logo / Name -->
            <a href="{{ route('home') }}" class="flex items-center gap-3 group">
                @php
                    $customLogo = $settings['site_logo'] ?? $globalSettings['site_logo'] ?? null;
                    $ownerName = $settings['owner_name'] ?? $globalSettings['owner_name'] ?? 'Alexander Vance';
                    $nameParts = array_values(array_filter(explode(' ', trim($ownerName))));
                    $initials = count($nameParts) >= 2 
                        ? strtoupper(substr($nameParts[0], 0, 1) . substr(end($nameParts), 0, 1))
                        : strtoupper(substr($ownerName, 0, 2));
                @endphp

                @if(!empty($customLogo))
                    <img src="{{ asset($customLogo) }}" alt="{{ $ownerName }}" class="w-10 h-10 rounded-xl object-cover border border-slate-700/60 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                @else
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                            {{ $initials }}
                        </div>
                    </div>
                @endif
                <div>
                    <span class="font-bold tracking-tight text-white group-hover:text-blue-400 transition">{{ $ownerName }}</span>
                    <span class="block text-xs text-slate-400 font-mono">{{ $settings['owner_title'] ?? $globalSettings['owner_title'] ?? 'Senior Engineer' }}</span>
                </div>
            </a>

            <!-- Navigation Links -->
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <a href="{{ route('home') }}#about" class="hover:text-blue-400 transition">About</a>
                <a href="{{ route('home') }}#expertise" class="hover:text-blue-400 transition">Expertise</a>
                <a href="{{ route('home') }}#career" class="hover:text-blue-400 transition">Career</a>
                <a href="{{ route('home') }}#education" class="hover:text-blue-400 transition">Education</a>
                <a href="{{ route('home') }}#projects" class="hover:text-blue-400 transition">Case Studies</a>
                <a href="{{ route('home') }}#achievements" class="hover:text-blue-400 transition">Impact</a>
                <a href="{{ route('blog.index') }}" class="hover:text-blue-400 transition">Blog</a>
                <a href="{{ route('home') }}#contact" class="hover:text-blue-400 transition">Contact</a>
            </nav>

            <!-- Action Button / Resume Download (Desktop) -->
            <div class="hidden md:flex items-center gap-4">
                @if (!empty($settings['resume_file']))
                    <a href="{{ $settings['resume_file'] }}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 transition">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i>
                        Resume CV
                    </a>
                @endif
                <a href="#contact" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition">
                    Let's Build
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center gap-3 md:hidden">
                <a href="#contact" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md">
                    Build
                </a>
                <button id="mobile-menu-btn" aria-label="Toggle Navigation Menu" class="p-2 text-slate-300 hover:text-white rounded-lg border border-slate-800 bg-slate-900/80">
                    <i data-lucide="menu" class="w-5 h-5"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown Navigation Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-6 py-6 space-y-4">
            <nav class="flex flex-col space-y-3 text-base font-medium text-slate-300">
                <a href="{{ route('home') }}#about" class="hover:text-blue-400 py-1 transition">About</a>
                <a href="{{ route('home') }}#expertise" class="hover:text-blue-400 py-1 transition">Expertise</a>
                <a href="{{ route('home') }}#career" class="hover:text-blue-400 py-1 transition">Career</a>
                <a href="{{ route('home') }}#education" class="hover:text-blue-400 py-1 transition">Education</a>
                <a href="{{ route('home') }}#projects" class="hover:text-blue-400 py-1 transition">Case Studies</a>
                <a href="{{ route('home') }}#achievements" class="hover:text-blue-400 py-1 transition">Impact</a>
                <a href="{{ route('blog.index') }}" class="hover:text-blue-400 py-1 transition">Blog</a>
                <a href="{{ route('home') }}#contact" class="hover:text-blue-400 py-1 transition">Contact</a>
            </nav>
            @if (!empty($settings['resume_file']))
                <div class="pt-3 border-t border-slate-800">
                    <a href="{{ $settings['resume_file'] }}" target="_blank" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-200 w-full justify-center">
                        <i data-lucide="download" class="w-4 h-4"></i> Download Resume CV
                    </a>
                </div>
            @endif
        </div>
    </header>

    <!-- Main Content Stream -->
    <main class="relative z-10 pt-20">
        @yield('content')
    </main>

    <!-- Footer -->
    <footer class="relative z-10 border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400 text-xs">
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
                <p class="font-medium text-slate-300">{{ $settings['copyright_text'] ?? ('© ' . date('Y') . ' ' . ($settings['owner_name'] ?? 'Alexander Vance') . '. All rights reserved.') }}</p>
                <p class="text-slate-500 mt-1">{{ $settings['footer_subtext'] ?? 'Built with Laravel 12, SQLite, Three.js WebGL, GSAP & Tailwind CSS.' }}</p>
            </div>
            <div class="flex items-center gap-6 text-sm">
                <a href="{{ route('blog.index') }}" class="hover:text-blue-400 transition flex items-center gap-1.5">
                    <i data-lucide="newspaper" class="w-4 h-4"></i> Blog
                </a>
                @if(!empty($settings['github_url']))
                    <a href="{{ $settings['github_url'] }}" target="_blank" class="hover:text-blue-400 transition flex items-center gap-1.5">
                        <i data-lucide="github" class="w-4 h-4"></i> GitHub
                    </a>
                @endif
                @if(!empty($settings['linkedin_url']))
                    <a href="{{ $settings['linkedin_url'] }}" target="_blank" class="hover:text-blue-400 transition flex items-center gap-1.5">
                        <i data-lucide="linkedin" class="w-4 h-4"></i> LinkedIn
                    </a>
                @endif
                <a href="{{ route('admin.login') }}" class="text-slate-600 hover:text-slate-400 transition flex items-center gap-1">
                    <i data-lucide="lock" class="w-3 h-3"></i> Admin
                </a>
            </div>
        </div>
    </footer>

    <!-- Pass Admin 3D & Animation Settings to Frontend JS -->
    <script>
        window.APP_3D_CONFIG = {!! json_encode($scene ?? []) !!};
        window.APP_ANIM_CONFIG = {!! json_encode($animation ?? []) !!};
    </script>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
                lucide.createIcons();
            }

            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });

                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                    });
                });
            }
        });
    </script>
</body>
</html>
