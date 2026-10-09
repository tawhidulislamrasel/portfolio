@extends('layouts.app')

@section('title', $settings['seo_title'] ?? $settings['site_name'] ?? 'Alexander Vance | Senior Software Engineer')

@section('content')

<!-- 1. Hero Section -->
@if (isset($sections['hero']) && $sections['hero']->is_enabled)
<section id="hero" class="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden py-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

        <!-- Left Content Column -->
        <div class="lg:col-span-7 space-y-8 text-left">
            <!-- Professional Eyebrow Badge -->
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-blue-400"></span>
                {{ $sections['hero']->subtitle ?? 'Senior Software Engineer & Team Lead' }}
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                {{ $sections['hero']->title ?? 'Architecting Next-Gen SaaS Ecosystems & Digital Systems' }}
            </h1>

            <!-- Introduction Summary -->
            <p class="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {{ $sections['hero']->content ?? 'Building resilient enterprise software, high-concurrency microservices, and cinematic interactive web experiences.' }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="#projects" class="px-8 py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition flex items-center gap-2">
                    <i data-lucide="folder-kanban" class="w-4 h-4"></i> Explore Case Studies
                </a>
                <a href="#contact" class="px-8 py-4 rounded-xl text-sm font-bold bg-slate-900/90 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-500 transition flex items-center gap-2 backdrop-blur-md">
                    <i data-lucide="message-square" class="w-4 h-4"></i> Get In Touch
                </a>
            </div>
        </div>

        <!-- Right Side Large Profile Image Frame -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-md aspect-[4/5] rounded-3xl p-1 bg-gradient-to-tr from-blue-600/40 via-cyan-500/20 to-indigo-600/40 shadow-2xl shadow-blue-500/20">
                <div class="w-full h-full bg-slate-950 rounded-[22px] overflow-hidden relative border border-slate-800">
                    @php
                        $photo = $settings['profile_photo'] ?? $globalSettings['profile_photo'] ?? null;
                    @endphp
                    @if (!empty($photo))
                        <img src="{{ asset($photo) }}" alt="{{ $settings['owner_name'] ?? 'Portfolio Owner' }}" class="w-full h-full object-cover">
                    @else
                        <!-- Sleek Fallback Portrait Frame -->
                        <div class="w-full h-full bg-slate-900 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 mb-4 shadow-xl shadow-blue-500/20">
                                <div class="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-400">
                                    {{ strtoupper(substr($settings['owner_name'] ?? 'AV', 0, 2)) }}
                                </div>
                            </div>
                            <h3 class="text-xl font-bold text-white">{{ $settings['owner_name'] ?? 'Alexander Vance' }}</h3>
                            <p class="text-xs text-blue-400 font-mono mt-1">{{ $settings['owner_title'] ?? 'Senior Software Engineer' }}</p>
                        </div>
                    @endif

                    <!-- Bottom Gradient Overlay -->
                    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-6 flex flex-col justify-end">
                        <span class="text-sm font-bold text-white tracking-wide">{{ $settings['owner_name'] ?? $globalSettings['owner_name'] ?? 'Alexander Vance' }}</span>
                        <span class="text-xs text-cyan-400 font-mono">{{ $settings['owner_title'] ?? $globalSettings['owner_title'] ?? 'Senior Software Engineer' }}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
@endif

<!-- 2. About Engineering Leadership -->
@if (isset($sections['about']) && $sections['about']->is_enabled)
<section id="about" class="py-24 px-6 relative border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-sm">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest">{{ $sections['about']->subtitle ?? 'Leadership & Strategy' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['about']->title ?? 'Engineering Strategy Meets Technical Excellence' }}</h2>
            <p class="text-slate-300 text-base leading-relaxed">
                {{ $sections['about']->content ?? $settings['bio'] }}
            </p>

            <div class="grid grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div>
                    <div class="text-2xl font-bold text-blue-400 font-mono">9+ Years</div>
                    <div class="text-xs text-slate-400 mt-1">Hands-on Software Architecture & Development</div>
                </div>
                <div>
                    <div class="text-2xl font-bold text-cyan-400 font-mono">10+ Engineers</div>
                    <div class="text-xs text-slate-400 mt-1">Cross-Functional Team Mentorship</div>
                </div>
            </div>
        </div>

        <div class="bg-slate-900/80 border border-slate-800/80 p-8 rounded-3xl space-y-6 shadow-2xl relative group">
            @if (!empty($settings['profile_photo']))
                <div class="flex items-center gap-5 border-b border-slate-800 pb-6">
                    <img src="{{ $settings['profile_photo'] }}" alt="{{ $settings['owner_name'] ?? 'Owner' }}" class="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500/30">
                    <div>
                        <h3 class="font-bold text-white text-lg">{{ $settings['owner_name'] ?? 'Alexander Vance' }}</h3>
                        <p class="text-xs text-blue-400 font-mono">{{ $settings['owner_title'] ?? 'Senior Software Engineer' }}</p>
                    </div>
                </div>
            @endif

            <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <i data-lucide="shield-check" class="w-6 h-6"></i>
                </div>
                <div>
                    <h3 class="font-bold text-white text-base">Engineering Philosophy</h3>
                    <p class="text-xs text-slate-400">Core pillars guiding system architecture</p>
                </div>
            </div>

            <ul class="space-y-4 text-sm text-slate-300">
                <li class="flex items-start gap-3">
                    <i data-lucide="check" class="w-5 h-5 text-blue-400 shrink-0 mt-0.5"></i>
                    <span><strong>Domain Driven Design:</strong> Decoupled business logic from framework infrastructure.</span>
                </li>
                <li class="flex items-start gap-3">
                    <i data-lucide="check" class="w-5 h-5 text-cyan-400 shrink-0 mt-0.5"></i>
                    <span><strong>Zero-Downtime Reliability:</strong> Automated CI/CD pipelines with comprehensive test suites.</span>
                </li>
                <li class="flex items-start gap-3">
                    <i data-lucide="check" class="w-5 h-5 text-indigo-400 shrink-0 mt-0.5"></i>
                    <span><strong>Empathetic Mentorship:</strong> Cultivating ownership, clear documentation, and clean code standards.</span>
                </li>
            </ul>
        </div>
    </div>
</section>
@endif

<!-- 3. Technical Expertise & Stack -->
@if (isset($sections['skills']) && $sections['skills']->is_enabled)
<section id="expertise" class="py-24 px-6 relative border-t border-slate-800/60">
    <div class="max-w-6xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-blue-400 uppercase tracking-widest">{{ $sections['skills']->subtitle ?? 'Competencies' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['skills']->title ?? 'Technical Stack & Architecture' }}</h2>
            <p class="text-slate-400 text-sm">{{ $sections['skills']->content }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach ($skills as $category => $categorySkills)
                <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-6 hover:border-slate-700 transition">
                    <h3 class="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-4">
                        <i data-lucide="layers" class="w-5 h-5 text-blue-400"></i>
                        {{ $category }}
                    </h3>

                    <div class="space-y-4">
                        @foreach ($categorySkills as $skill)
                            <div class="space-y-1.5">
                                <div class="flex items-center justify-between text-xs">
                                    <span class="font-semibold text-slate-200 flex items-center gap-2">
                                        <i data-lucide="{{ $skill->icon ?? 'code-2' }}" class="w-3.5 h-3.5 text-blue-400"></i>
                                        {{ $skill->name }}
                                    </span>
                                    <span class="font-mono text-slate-400">{{ $skill->proficiency_percentage }}%</span>
                                </div>
                                <div class="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style="width: {{ $skill->proficiency_percentage }}%"></div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif

<!-- 4. Career Journey Timeline -->
@if (isset($sections['timeline']) && $sections['timeline']->is_enabled)
<section id="career" class="py-24 px-6 relative border-t border-slate-800/60 bg-slate-950/40">
    <div class="max-w-5xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest">{{ $sections['timeline']->subtitle ?? 'Track Record' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['timeline']->title ?? 'Career Experience & Milestones' }}</h2>
        </div>

        <div class="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12 pl-6 sm:pl-10">
            @foreach ($experiences as $exp)
                <div class="relative group">
                    <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-lg shadow-blue-500/50"></div>

                    <div class="hidden sm:block absolute -left-36 top-1 text-xs font-mono font-bold text-slate-400 text-right w-24">
                        {{ $exp->start_date }} — {{ $exp->is_current ? 'Present' : ($exp->end_date ?? 'Present') }}
                    </div>

                    <div class="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-blue-500/40 transition">
                        <div class="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                <h3 class="text-lg font-bold text-white">{{ $exp->role }}</h3>
                                <div class="text-xs font-semibold text-blue-400 mt-0.5">{{ $exp->company }} • {{ $exp->location ?? 'Remote' }}</div>
                            </div>
                            <span class="sm:hidden text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                                {{ $exp->start_date }} — {{ $exp->is_current ? 'Present' : ($exp->end_date ?? 'Present') }}
                            </span>
                        </div>

                        <p class="text-sm text-slate-300 leading-relaxed">{{ $exp->description }}</p>

                        @if (!empty($exp->achievements_json))
                            <ul class="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
                                @foreach ($exp->achievements_json as $achievement)
                                    <li class="flex items-start gap-2">
                                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"></i>
                                        <span>{{ $achievement }}</span>
                                    </li>
                                @endforeach
                            </ul>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif

<!-- 5. Featured Projects Showcase -->
@if (isset($sections['projects']) && $sections['projects']->is_enabled)
<section id="projects" class="py-24 px-6 relative border-t border-slate-800/60">
    <div class="max-w-6xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-blue-400 uppercase tracking-widest">{{ $sections['projects']->subtitle ?? 'Case Studies' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['projects']->title ?? 'Featured Architectural Case Studies' }}</h2>
            <p class="text-slate-400 text-sm">{{ $sections['projects']->content }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            @foreach ($projects as $project)
                <div class="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition flex flex-col justify-between group shadow-2xl">
                    <div class="h-48 w-full bg-slate-950 relative overflow-hidden border-b border-slate-800">
                        @if ($project->cover_image)
                            <img src="{{ $project->cover_image }}" alt="{{ $project->title }}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        @else
                            <div class="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/60 flex items-center justify-center p-6 text-center">
                                <div class="space-y-2">
                                    <div class="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                                        <i data-lucide="cpu" class="w-6 h-6"></i>
                                    </div>
                                    <span class="text-xs font-mono font-semibold text-slate-400 block">{{ $project->title }}</span>
                                </div>
                            </div>
                        @endif
                    </div>

                    <div class="p-8 space-y-6 flex-1">
                        <div class="flex items-center justify-between">
                            <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
                                {{ $project->category }}
                            </span>
                            @if ($project->is_featured)
                                <span class="text-[10px] uppercase font-mono text-cyan-400 flex items-center gap-1">
                                    <i data-lucide="star" class="w-3 h-3 fill-cyan-400"></i> Featured
                                </span>
                            @endif
                        </div>

                        <div>
                            <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition">{{ $project->title }}</h3>
                            <p class="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">{{ $project->summary }}</p>
                        </div>

                        <div class="space-y-3 pt-4 border-t border-slate-800">
                            <span class="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Tech Stack & Infrastructure</span>
                            <div class="flex flex-wrap gap-2">
                                @foreach ($project->tech_stack_json ?? [] as $tech)
                                    <span class="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono">{{ $tech }}</span>
                                @endforeach
                            </div>
                        </div>
                    </div>

                    <div class="p-8 pt-0 flex items-center justify-between">
                        <a href="{{ route('projects.show', $project->slug) }}" class="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 transition flex items-center gap-2">
                            Read Case Study <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                        @if ($project->demo_url)
                            <a href="{{ $project->demo_url }}" target="_blank" class="text-xs font-semibold text-slate-400 hover:text-white transition flex items-center gap-1">
                                Demo <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                            </a>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif

<!-- 6. Proven Outcomes & Achievements -->
@if (isset($sections['achievements']) && $sections['achievements']->is_enabled)
<section id="achievements" class="py-24 px-6 relative border-t border-slate-800/60 bg-slate-950/60">
    <div class="max-w-6xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest">{{ $sections['achievements']->subtitle ?? 'Metrics' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['achievements']->title ?? 'Quantifiable Impact & Benchmarks' }}</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            @foreach ($achievements as $ach)
                <div class="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl text-center space-y-3 hover:border-slate-700 transition">
                    <div class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                        {{ $ach->metric_value }}
                    </div>
                    <div class="font-bold text-white text-sm">{{ $ach->title }}</div>
                    <p class="text-xs text-slate-400 leading-relaxed">{{ $ach->description }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif

<!-- 7. Testimonials -->
@if (isset($sections['testimonials']) && $sections['testimonials']->is_enabled)
<section id="testimonials" class="py-24 px-6 relative border-t border-slate-800/60">
    <div class="max-w-5xl mx-auto space-y-16">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-blue-400 uppercase tracking-widest">{{ $sections['testimonials']->subtitle ?? 'Endorsements' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['testimonials']->title ?? 'Executive Feedback & Endorsements' }}</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            @foreach ($testimonials as $testimonial)
                <div class="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6 flex flex-col justify-between">
                    <p class="text-sm text-slate-300 italic leading-relaxed">"{{ $testimonial->quote }}"</p>
                    <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
                        @if ($testimonial->avatar)
                            <img src="{{ $testimonial->avatar }}" alt="{{ $testimonial->author_name }}" class="w-10 h-10 rounded-full object-cover border border-blue-500/30">
                        @else
                            <div class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-sm border border-slate-700">
                                {{ strtoupper(substr($testimonial->author_name, 0, 1)) }}
                            </div>
                        @endif
                        <div>
                            <div class="font-bold text-white text-sm">{{ $testimonial->author_name }}</div>
                            <div class="text-xs text-slate-400">{{ $testimonial->author_title }} • {{ $testimonial->company }}</div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
@endif

<!-- 8. Contact & Collaboration -->
@if (isset($sections['contact']) && $sections['contact']->is_enabled)
<section id="contact" class="py-24 px-6 relative border-t border-slate-800/60 bg-slate-950/80">
    <div class="max-w-4xl mx-auto space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-4">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest">{{ $sections['contact']->subtitle ?? 'Collaboration' }}</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">{{ $sections['contact']->title ?? 'Let’s Build Something Exceptional' }}</h2>
            <p class="text-slate-400 text-sm">{{ $sections['contact']->content }}</p>
        </div>

        @if (session('success'))
            <div class="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                <i data-lucide="check-circle" class="w-6 h-6 shrink-0"></i>
                <div>{{ session('success') }}</div>
            </div>
        @endif

        <form action="{{ route('contact.submit') }}" method="POST" class="bg-slate-900/80 border border-slate-800 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl">
            @csrf
            <input type="text" name="website_hp" class="hidden" tabindex="-1" autocomplete="off">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label for="c_name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Your Name</label>
                    <input type="text" name="name" id="c_name" required
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
                </div>

                <div>
                    <label for="c_email" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                    <input type="email" name="email" id="c_email" required
                        class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500">
                </div>
            </div>

            <div>
                <label for="c_subject" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Subject / Topic</label>
                <input type="text" name="subject" id="c_subject"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500" placeholder="e.g. Technical Advisory, Architecture Review, Role Inquiry">
            </div>

            <div>
                <label for="c_message" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" id="c_message" rows="5" required
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500" placeholder="Tell me about your application requirements, goals, or system challenges..."></textarea>
            </div>

            <button type="submit" class="w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition">
                Send Direct Message
            </button>
        </form>
    </div>
</section>
@endif

@endsection
