<!DOCTYPE html>
<html lang="en" class="h-full bg-slate-950 text-slate-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Dashboard') | Portfolio Control System</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Dynamic Favicon -->
    @php
        $fav = $globalSettings['site_favicon'] ?? null;
    @endphp
    @if(!empty($fav))
        <link rel="icon" href="{{ asset($fav) }}">
        <link rel="shortcut icon" href="{{ asset($fav) }}">
    @endif

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="h-full flex overflow-hidden font-sans bg-slate-950 text-slate-200">
    <!-- Mobile Sidebar Backdrop Overlay -->
    <div id="admin-sidebar-backdrop" class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 hidden md:hidden"></div>

    <!-- Sidebar Navigation -->
    <aside id="admin-sidebar" class="fixed md:static inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0 h-full overflow-hidden -translate-x-full md:translate-x-0 transition-transform duration-300">
        <!-- Brand Header -->
        <div class="h-16 flex items-center px-6 border-b border-slate-800 gap-3 shrink-0">
            @php
                $customLogo = $globalSettings['site_logo'] ?? null;
                $ownerName = $globalSettings['owner_name'] ?? 'Alexander Vance';
                $nameParts = array_values(array_filter(explode(' ', trim($ownerName))));
                $initials = count($nameParts) >= 2 
                    ? strtoupper(substr($nameParts[0], 0, 1) . substr(end($nameParts), 0, 1))
                    : strtoupper(substr($ownerName, 0, 2));
            @endphp

            @if(!empty($customLogo))
                <img src="{{ asset($customLogo) }}" alt="{{ $ownerName }}" class="w-8 h-8 rounded-lg object-cover border border-slate-700/60 shadow-lg shadow-blue-500/30">
            @else
                <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
                    {{ $initials }}
                </div>
            @endif
            <div>
                <h1 class="text-sm font-bold text-slate-100 leading-none">Portfolio Admin</h1>
                <span class="text-xs text-blue-400 font-mono">v2.0 Cinematic</span>
            </div>
        </div>

        <!-- Navigation Links Container (Scrollable) -->
        <div class="flex-1 overflow-y-auto p-4 space-y-1 text-sm font-medium custom-scrollbar">
            <nav class="space-y-1">
                <a href="{{ route('admin.dashboard') }}" class="flex items-center gap-3 px-3 py-2.5 rounded-lg transition {{ request()->routeIs('admin.dashboard') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                    Dashboard
                </a>

                <div class="pt-3 pb-1 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Appearance & 3D</div>
                <a href="{{ route('admin.theme.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.theme.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="palette" class="w-4 h-4"></i>
                    Design Tokens & Theme
                </a>
                <a href="{{ route('admin.scene.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.scene.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="box" class="w-4 h-4"></i>
                    3D Scene Configurator
                </a>
                <a href="{{ route('admin.animation.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.animation.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="sparkles" class="w-4 h-4"></i>
                    Motion & Animations
                </a>
                <a href="{{ route('admin.sections.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.sections.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="layers" class="w-4 h-4"></i>
                    Section Builder
                </a>

                <div class="pt-3 pb-1 px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Content Management</div>
                <a href="{{ route('admin.projects.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.projects.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="folder-kanban" class="w-4 h-4"></i>
                    Projects Case Studies
                </a>
                <a href="{{ route('admin.posts.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.posts.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="newspaper" class="w-4 h-4"></i>
                    Blogs & Articles
                </a>
                <a href="{{ route('admin.skills.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.skills.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="code-2" class="w-4 h-4"></i>
                    Skills & Stack
                </a>
                <a href="{{ route('admin.experiences.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.experiences.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="briefcase" class="w-4 h-4"></i>
                    Career Timeline
                </a>
                <a href="{{ route('admin.educations.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.educations.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="graduation-cap" class="w-4 h-4"></i>
                    Education
                </a>
                <a href="{{ route('admin.achievements.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.achievements.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="trophy" class="w-4 h-4"></i>
                    Achievements
                </a>
                <a href="{{ route('admin.testimonials.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.testimonials.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="quote" class="w-4 h-4"></i>
                    Testimonials
                </a>
                <a href="{{ route('admin.enquiries.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.enquiries.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="mail" class="w-4 h-4"></i>
                    Enquiries Inbox
                </a>
                <a href="{{ route('admin.media.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.media.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="image" class="w-4 h-4"></i>
                    Media Library
                </a>
                <a href="{{ route('admin.settings.index') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.settings.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="settings" class="w-4 h-4"></i>
                    Global Settings
                </a>
                <a href="{{ route('admin.profile.edit') }}" class="flex items-center gap-3 px-3 py-2 rounded-lg transition {{ request()->routeIs('admin.profile.*') ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold' : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200' }}">
                    <i data-lucide="user-cog" class="w-4 h-4"></i>
                    Admin Profile & Password
                </a>
            </nav>
        </div>

        <!-- Footer User Profile (Fixed at bottom) -->
        <div class="p-4 border-t border-slate-800 flex items-center justify-between shrink-0 bg-slate-900/90">
            <a href="{{ route('admin.profile.edit') }}" class="flex items-center gap-3 hover:opacity-80 transition group truncate">
                <div class="w-9 h-9 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-slate-300">
                    {{ strtoupper(substr(Auth::user()->name ?? 'A', 0, 1)) }}
                </div>
                <div class="truncate text-xs">
                    <div class="font-bold text-slate-200 group-hover:text-blue-400 transition truncate">{{ Auth::user()->name }}</div>
                    <div class="text-slate-400 truncate">{{ Auth::user()->email }}</div>
                </div>
            </a>
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" title="Logout" class="p-2 text-slate-400 hover:text-red-400 transition">
                    <i data-lucide="log-out" class="w-4 h-4"></i>
                </button>
            </form>
        </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-950">
        <!-- Top Navbar -->
        <header class="h-16 border-b border-slate-800 px-4 md:px-8 flex items-center justify-between bg-slate-900/40 shrink-0">
            <div class="flex items-center gap-3">
                <button id="admin-menu-btn" aria-label="Toggle Navigation Sidebar" class="p-2 text-slate-400 hover:text-white md:hidden focus:outline-none rounded-lg border border-slate-800 bg-slate-900">
                    <i data-lucide="menu" class="w-5 h-5"></i>
                </button>
                <h2 class="text-base md:text-lg font-semibold text-slate-100">@yield('title', 'Dashboard')</h2>
            </div>
            <div class="flex items-center gap-4">
                <a href="{{ route('home') }}" target="_blank" class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-blue-400 hover:bg-slate-700 transition border border-slate-700">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                    View Live Site
                </a>
            </div>
        </header>

        <!-- Flash Alert Messages -->
        @if (session('success'))
            <div class="mx-4 md:mx-8 mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                <i data-lucide="check-circle" class="w-5 h-5 shrink-0"></i>
                <div>{{ session('success') }}</div>
            </div>
        @endif

        @if ($errors->any())
            <div class="mx-4 md:mx-8 mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                <div class="font-bold mb-1">Please correct the following errors:</div>
                <ul class="list-disc list-inside space-y-1">
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <!-- Dynamic Body Content -->
        <main class="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
            @yield('content')
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
                lucide.createIcons();
            }

            const menuBtn = document.getElementById('admin-menu-btn');
            const sidebar = document.getElementById('admin-sidebar');
            const backdrop = document.getElementById('admin-sidebar-backdrop');

            if (menuBtn && sidebar && backdrop) {
                const toggleSidebar = () => {
                    sidebar.classList.toggle('-translate-x-full');
                    backdrop.classList.toggle('hidden');
                };

                menuBtn.addEventListener('click', toggleSidebar);
                backdrop.addEventListener('click', toggleSidebar);
            }
        });
    </script>
</body>
</html>
