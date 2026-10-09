<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Setting;
use App\Models\ThemeSetting;
use App\Models\SceneSetting;
use App\Models\AnimationSetting;
use App\Models\Section;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Post;
use App\Models\Project;
use App\Models\Achievement;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Alexander Vance',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'is_active' => true,
            ]
        );

        // 2. Settings
        $settings = [
            'site_name' => 'Alexander Vance | Senior Software Engineer & Team Lead',
            'owner_name' => 'Alexander Vance',
            'owner_title' => 'Senior Software Engineer & Engineering Team Lead',
            'bio' => 'Senior Software Engineer and Technical Leader with 9+ years of experience architecting resilient SaaS ecosystems, high-throughput backend microservices, and immersive interactive digital experiences.',
            'profile_photo' => '/storage/portfolio/owner_profile.png',
            'resume_file' => null,
            'contact_email' => 'alexander.vance@example.com',
            'contact_phone' => '+1 (555) 019-2831',
            'location' => 'San Francisco, CA / Remote',
            'github_url' => 'https://github.com',
            'linkedin_url' => 'https://linkedin.com',
            'twitter_url' => 'https://x.com',
            'seo_title' => 'Alexander Vance - Senior Software Engineer & Team Lead Portfolio',
            'seo_description' => 'Explore the interactive 3D portfolio of Alexander Vance, a Senior Software Engineer specializing in distributed system architecture, high-performance web applications, and technical team leadership.',
            'seo_keywords' => 'Senior Software Engineer, Laravel, Three.js, WebGL, Software Architect, Engineering Manager, SaaS Developer',
            'copyright_text' => '© '.date('Y').' Alexander Vance. All rights reserved.',
            'footer_subtext' => 'Built with Laravel 12, SQLite, Three.js WebGL, GSAP & Tailwind CSS.',
        ];

        foreach ($settings as $key => $val) {
            Setting::setValue($key, $val, 'general');
        }

        // 3. Theme Settings (Flat UI US American Palette: Electron Blue #0984e3, Robin's Egg Blue #00cec9, Exodus Fruit #6c5ce7, City Lights #dfe6e9, Dracula Orchid #2d3436)
        $theme = [
            'primary_color' => '#0984e3',     // Electron Blue
            'secondary_color' => '#00cec9',   // Robin's Egg Blue
            'accent_color' => '#6c5ce7',      // Exodus Fruit
            'bg_dark' => '#2d3436',          // Dracula Orchid
            'bg_card' => '#1e272e',          // Dark Slate Surface
            'text_main' => '#dfe6e9',        // City Lights
            'border_radius' => '0.75rem',
            'custom_css' => '/* Custom US American Color Palette Injected */',
        ];

        foreach ($theme as $key => $val) {
            ThemeSetting::setValue($key, $val, 'US American Palette', 'color');
        }

        // 4. 3D Scene Settings
        $scene = [
            'active_preset' => 'tech_core',
            'light_color' => '#0984e3',
            'light_intensity' => '1.8',
            'particle_density' => '1200',
            'particle_color' => '#00cec9',
            'rotation_speed' => '0.005',
            'camera_fov' => '60',
            'bloom_enabled' => 'true',
            'webgl_fallback_enabled' => 'true',
            'mobile_quality_preset' => 'medium',
        ];

        foreach ($scene as $key => $val) {
            SceneSetting::setValue($key, $val, '3D Scene Config', '3d');
        }

        // 5. Animation Settings
        $anim = [
            'scroll_duration' => '1.2',
            'transition_speed' => '0.8',
            'easing_function' => 'power2.out',
            'cursor_effect_enabled' => 'true',
            'magnetic_effect_enabled' => 'true',
            'parallax_strength' => '1.0',
            'reduced_motion_mode' => 'respect_os',
        ];

        foreach ($anim as $key => $val) {
            AnimationSetting::setValue($key, $val, 'GSAP Animation Config');
        }

        // 6. Dynamic Sections
        $sections = [
            [
                'key' => 'hero',
                'name' => 'Hero Scene',
                'type' => 'hero',
                'title' => 'Architecting Next-Gen SaaS Ecosystems & Digital Systems',
                'subtitle' => 'Senior Software Engineer & Technical Team Leader',
                'content' => 'Building resilient enterprise software, high-concurrency microservices, and cinematic interactive web experiences.',
                'order_column' => 1,
                'is_enabled' => true,
            ],
            [
                'key' => 'about',
                'name' => 'About Engineering Leadership',
                'type' => 'about',
                'title' => 'Engineering Strategy Meets Technical Excellence',
                'subtitle' => '9+ Years of Hands-on Architecture & Leadership',
                'content' => 'I bridge the gap between high-level business goals and robust software design. From scaling multi-tenant SaaS platforms to mentoring engineering teams, my focus is delivering measurable value through clean code and automated devops.',
                'order_column' => 2,
                'is_enabled' => true,
            ],
            [
                'key' => 'skills',
                'name' => 'Technical Expertise',
                'type' => 'skills',
                'title' => 'Core Competencies & Stack',
                'subtitle' => 'Mastery Across Architecture, Backend, Frontend & Cloud',
                'content' => 'A comprehensive overview of frameworks, languages, databases, and infrastructure tools utilized in production environments.',
                'order_column' => 3,
                'is_enabled' => true,
            ],
            [
                'key' => 'timeline',
                'name' => 'Career Journey',
                'type' => 'timeline',
                'title' => 'Milestones & Impact',
                'subtitle' => 'Track Record of Growth & Enterprise Delivery',
                'content' => 'A timeline of leadership roles, architectural overhauls, and key contributions across fast-scaling tech companies.',
                'order_column' => 4,
                'is_enabled' => true,
            ],
            [
                'key' => 'projects',
                'name' => 'Featured Projects Showcase',
                'type' => 'projects',
                'title' => 'Selected Architectural Case Studies',
                'subtitle' => 'Deep Dives into Real-World Production Platforms',
                'content' => 'Explore comprehensive case studies detailing the business challenge, system architecture, database design, and key outcomes.',
                'order_column' => 5,
                'is_enabled' => true,
            ],
            [
                'key' => 'achievements',
                'name' => 'Proven Outcomes',
                'type' => 'achievements',
                'title' => 'Verified Metrics & Impact',
                'subtitle' => 'Quantifiable Results Delivered to Enterprise Systems',
                'content' => 'Key operational highlights, performance benchmarks, and user growth achievements.',
                'order_column' => 6,
                'is_enabled' => true,
            ],
            [
                'key' => 'testimonials',
                'name' => 'Executive Endorsements',
                'type' => 'testimonials',
                'title' => 'What Leaders Say',
                'subtitle' => 'Feedback from Technical Directors & Engineering Peers',
                'content' => 'Real testimonials regarding leadership, technical execution, and project delivery.',
                'order_column' => 7,
                'is_enabled' => true,
            ],
            [
                'key' => 'contact',
                'name' => 'Contact & Collaboration',
                'type' => 'contact',
                'title' => 'Let’s Build Something Exceptional',
                'subtitle' => 'Open for Technical Leadership & Advisory Roles',
                'content' => 'Interested in discussing a complex engineering challenge, technical consultation, or leadership opportunity?',
                'order_column' => 8,
                'is_enabled' => true,
            ],
            [
                'key' => 'education',
                'name' => 'Education & Degrees',
                'type' => 'education',
                'title' => 'Academic Foundation & Education',
                'subtitle' => 'Degrees, Field of Study & Academic Excellence',
                'content' => 'Formal computer science degree, certifications, and academic specialization.',
                'order_column' => 9,
                'is_enabled' => true,
            ],
        ];

        foreach ($sections as $s) {
            Section::updateOrCreate(['key' => $s['key']], $s);
        }

        // 7. Skills
        $skills = [
            ['category' => 'Backend & Architecture', 'name' => 'Laravel & Modern PHP', 'proficiency_percentage' => 98, 'icon' => 'code-2', 'is_featured' => true, 'order_column' => 1],
            ['category' => 'Backend & Architecture', 'name' => 'Domain Driven Design & OOP', 'proficiency_percentage' => 95, 'icon' => 'layers', 'is_featured' => true, 'order_column' => 2],
            ['category' => 'Backend & Architecture', 'name' => 'RESTful & GraphQL API Design', 'proficiency_percentage' => 94, 'icon' => 'cpu', 'is_featured' => true, 'order_column' => 3],
            ['category' => 'Database & Storage', 'name' => 'MySQL, SQLite & PostgreSQL', 'proficiency_percentage' => 92, 'icon' => 'database', 'is_featured' => true, 'order_column' => 4],
            ['category' => 'Database & Storage', 'name' => 'Redis Caching & Queue Management', 'proficiency_percentage' => 90, 'icon' => 'server', 'is_featured' => true, 'order_column' => 5],
            ['category' => '3D & Creative Frontend', 'name' => 'Three.js & WebGL Shaders', 'proficiency_percentage' => 88, 'icon' => 'box', 'is_featured' => true, 'order_column' => 6],
            ['category' => '3D & Creative Frontend', 'name' => 'GSAP & ScrollTrigger Motion', 'proficiency_percentage' => 92, 'icon' => 'sparkles', 'is_featured' => true, 'order_column' => 7],
            ['category' => '3D & Creative Frontend', 'name' => 'Tailwind CSS & Responsive UI', 'proficiency_percentage' => 96, 'icon' => 'palette', 'is_featured' => true, 'order_column' => 8],
            ['category' => 'DevOps & Quality Assurance', 'name' => 'Docker & Containerization', 'proficiency_percentage' => 88, 'icon' => 'container', 'is_featured' => true, 'order_column' => 9],
            ['category' => 'DevOps & Quality Assurance', 'name' => 'Automated Testing (Pest/PHPUnit)', 'proficiency_percentage' => 95, 'icon' => 'shield-check', 'is_featured' => true, 'order_column' => 10],
            ['category' => 'Leadership & Process', 'name' => 'Agile Team Leadership & Mentorship', 'proficiency_percentage' => 94, 'icon' => 'users', 'is_featured' => true, 'order_column' => 11],
            ['category' => 'Leadership & Process', 'name' => 'CI/CD Pipelines & GitHub Actions', 'proficiency_percentage' => 90, 'icon' => 'git-branch', 'is_featured' => true, 'order_column' => 12],
        ];

        foreach ($skills as $sk) {
            Skill::create($sk);
        }

        // 8. Career Experience Timeline
        $experiences = [
            [
                'company' => 'AetherTech Cloud Solutions',
                'role' => 'Software Engineering Team Lead',
                'location' => 'San Francisco, CA',
                'employment_type' => 'Full-time',
                'start_date' => '2023',
                'end_date' => null,
                'is_current' => true,
                'description' => 'Directing a cross-functional engineering team of 10+ full-stack engineers building multi-tenant SaaS infrastructure, real-time analytics engines, and enterprise integrations.',
                'achievements_json' => [
                    'Architected asynchronous job processing pipeline handling 5M+ daily queue payload units with zero data loss.',
                    'Reduced server infrastructure expenditures by 38% through query optimization and Redis cache tiering.',
                    'Implemented standardized automated test suites elevating code coverage from 45% to 92%.',
                ],
                'order_column' => 1,
            ],
            [
                'company' => 'Nexus Platform Labs',
                'role' => 'Senior Full-Stack Architect',
                'location' => 'Austin, TX',
                'employment_type' => 'Full-time',
                'start_date' => '2020',
                'end_date' => '2023',
                'is_current' => false,
                'description' => 'Lead engineer for multi-property property management solutions and educational SaaS applications.',
                'achievements_json' => [
                    'Designed distributed database architecture supporting multi-building property management across 15,000+ rental units.',
                    'Migrated monolithic legacy app to modular Laravel domain service layers, cutting deployment cycle times by 60%.',
                ],
                'order_column' => 2,
            ],
            [
                'company' => 'Vanguard Software Systems',
                'role' => 'Software Engineer',
                'location' => 'Remote',
                'employment_type' => 'Full-time',
                'start_date' => '2017',
                'end_date' => '2020',
                'is_current' => false,
                'description' => 'Developed custom web applications, RESTful microservices, and customer portal solutions for enterprise clients.',
                'achievements_json' => [
                    'Built secure authentication and role-based access control engine utilized across 4 flagship products.',
                    'Created high-performance search engine with sub-50ms query response speeds across millions of records.',
                ],
                'order_column' => 3,
            ],
        ];

        foreach ($experiences as $exp) {
            Experience::create($exp);
        }

        // 9. Education
        Education::create([
            'institution' => 'University of California, Berkeley',
            'degree' => 'Bachelor of Science',
            'field_of_study' => 'Computer Science & Software Engineering',
            'start_date' => '2013',
            'end_date' => '2017',
            'summary' => 'Graduated with Honors. Specialized in Distributed Systems, Database Optimization, and Computer Graphics.',
            'order_column' => 1,
        ]);

        // 10. Real Projects (SaaS Case Studies)
        $projects = [
            [
                'title' => 'EduPulse SaaS — Comprehensive School Management Platform',
                'slug' => 'school-management-saas',
                'tagline' => 'Next-generation cloud ERP for educational institutions, student records, and administrative workflows.',
                'category' => 'Educational SaaS',
                'summary' => 'A multi-tenant school management software platform delivering end-to-end administration for K-12 and higher education institutions.',
                'problem_statement' => 'Educational institutions struggled with fragmented legacy software, manual attendance tracking, delayed fee collection, and poor parent-teacher communication channels.',
                'solution' => 'Engineered a unified SaaS platform with role-based dashboards for admins, teachers, students, and parents. Features real-time gradebooks, automated fee collection via Stripe, attendance analytics, and dynamic scheduling.',
                'architecture_description' => 'Built using Laravel 12 modular architecture, SQLite/MySQL database engine with row-level tenant isolation, queues for notification dispatching, and Blade + Tailwind interactive views.',
                'tech_stack_json' => ['Laravel 12', 'SQLite / MySQL', 'Tailwind CSS', 'Alpine.js / JS Modules', 'Chart.js', 'Pest PHP'],
                'role_description' => 'Lead Software Architect & Backend Engineer',
                'cover_image' => null,
                'gallery_json' => [],
                'demo_url' => 'https://edupulse-saas-demo.test',
                'repo_url' => 'https://github.com/example/edupulse-saas',
                'is_featured' => true,
                'is_confidential' => false,
                'status' => 'published',
                'order_column' => 1,
                'meta_title' => 'EduPulse SaaS Case Study - School Management Platform',
                'meta_description' => 'Detailed case study on building EduPulse SaaS, a multi-tenant school management application using Laravel, SQLite, and modern frontend technologies.',
            ],
            [
                'title' => 'PropVerse — Multi-Property Rental & Building Operations SaaS',
                'slug' => 'multi-property-rental-management',
                'tagline' => 'Centralized property management solution for multi-building real estate portfolio owners and tenants.',
                'category' => 'PropTech SaaS',
                'summary' => 'An enterprise-grade property management ecosystem automating rent collection, maintenance ticketing, lease generation, and expense accounting.',
                'problem_statement' => 'Property owners managing multiple buildings lacked real-time visibility into tenant payment statuses, unit maintenance requests, and financial reporting across diverse portfolios.',
                'solution' => 'Developed PropVerse: a centralized hub allowing property managers to monitor occupancy rates, automate recurring invoice billing, track tenant work orders in real-time, and store digital lease contracts securely.',
                'architecture_description' => 'Designed with domain-driven Laravel backend services, transaction-safe accounting logs, role-based permission policies, and interactive WebGL property map visualizers.',
                'tech_stack_json' => ['Laravel 12', 'SQLite / MySQL', 'Three.js', 'Tailwind CSS', 'GSAP', 'Docker'],
                'role_description' => 'Principal Engineer & Team Leader',
                'cover_image' => null,
                'gallery_json' => [],
                'demo_url' => 'https://propverse-demo.test',
                'repo_url' => 'https://github.com/example/propverse-saas',
                'is_featured' => true,
                'is_confidential' => false,
                'status' => 'published',
                'order_column' => 2,
                'meta_title' => 'PropVerse Case Study - Multi-Property Rental Management System',
                'meta_description' => 'Explore how PropVerse SaaS streamlines multi-building rental management through centralized financial ledgers and modern software architecture.',
            ],
            [
                'title' => 'OmniTrace — Real-Time Telemetry & Performance Monitoring System',
                'slug' => 'realtime-telemetry-platform',
                'tagline' => 'High-concurrency event ingestion dashboard for distributed application metrics.',
                'category' => 'Developer Tools',
                'summary' => 'A developer dashboard and observability tool capturing live application performance logs, error tracebacks, and health metrics.',
                'problem_statement' => 'Growing microservice fleets created visibility blindspots during traffic spikes, making root-cause analysis slow and expensive.',
                'solution' => 'Created OmniTrace: a high-throughput event processing platform rendering interactive 3D WebGL data streams and real-time alert triggers.',
                'architecture_description' => 'Utilizes asynchronous webhooks, background queue workers, WebSocket push streams, and Three.js node visualization graphs.',
                'tech_stack_json' => ['Laravel 12', 'Redis', 'Three.js WebGL', 'Chart.js', 'Tailwind CSS', 'WebSockets'],
                'role_description' => 'Creator & Lead Developer',
                'cover_image' => null,
                'gallery_json' => [],
                'demo_url' => 'https://omnitrace-demo.test',
                'repo_url' => 'https://github.com/example/omnitrace',
                'is_featured' => true,
                'is_confidential' => false,
                'status' => 'published',
                'order_column' => 3,
                'meta_title' => 'OmniTrace Case Study - WebGL Telemetry Dashboard',
                'meta_description' => 'Case study of OmniTrace, a high-concurrency event monitoring dashboard with 3D WebGL data visualization.',
            ],
        ];

        foreach ($projects as $proj) {
            Project::create($proj);
        }

        // 11. Achievements
        $achievements = [
            ['title' => 'Active SaaS Users Managed', 'category' => 'Scale', 'metric_value' => '300,000+', 'description' => 'Concurrently served active users across enterprise SaaS solutions with high customer satisfaction.', 'date' => '2024', 'is_featured' => true, 'order_column' => 1],
            ['title' => 'System Production Uptime', 'category' => 'Reliability', 'metric_value' => '99.99%', 'description' => 'Maintained high-availability SLA uptime across multi-region server clusters.', 'date' => '2023 - Present', 'is_featured' => true, 'order_column' => 2],
            ['title' => 'Engineers Mentored & Promoted', 'category' => 'Leadership', 'metric_value' => '18 Engineers', 'description' => 'Successfully coached mid-level developers into senior architecture and team lead roles.', 'date' => '2021 - 2024', 'is_featured' => true, 'order_column' => 3],
            ['title' => 'Query Performance Speedup', 'category' => 'Performance', 'metric_value' => '4.2x Faster', 'description' => 'Optimized legacy database indexes and execution plans, reducing p95 latency from 450ms to 95ms.', 'date' => '2023', 'is_featured' => true, 'order_column' => 4],
        ];

        foreach ($achievements as $ach) {
            Achievement::create($ach);
        }

        // 12. Testimonials
        Testimonial::create([
            'author_name' => 'Marcus Holloway',
            'author_title' => 'Chief Technology Officer',
            'company' => 'AetherTech Cloud',
            'quote' => 'Alexander is one of those rare engineering leaders who combines deep architectural mastery with outstanding team mentorship. He transformed our core SaaS pipeline into a highly scalable, reliable platform.',
            'avatar' => null,
            'rating' => 5,
            'order_column' => 1,
            'is_published' => true,
        ]);

        Testimonial::create([
            'author_name' => 'Elena Rostova',
            'author_title' => 'VP of Engineering',
            'company' => 'Nexus Platform Labs',
            'quote' => 'His attention to clean code standards, database performance, and refined user experience is second to none. Working with Alexander on our property SaaS project was a game changer for our engineering culture.',
            'avatar' => null,
            'rating' => 5,
            'order_column' => 2,
            'is_published' => true,
        ]);

        // 13. Blog Posts
        $posts = [
            [
                'title' => 'Architecting High-Throughput Microservices with Modern Laravel 12 & SQLite',
                'slug' => 'architecting-high-throughput-microservices-laravel-12-sqlite',
                'excerpt' => 'How we structured a low-latency, modular microservice ecosystem leveraging Laravel 12 features, SQLite WAL mode, and queue concurrency patterns.',
                'content' => "Building scalable web services doesn't always require multi-node cluster complexity from day one. In this article, we explore how leveraging Laravel 12's lightweight kernel alongside SQLite in Write-Ahead Logging (WAL) mode enables blazing fast sub-10ms response times for high-concurrency SaaS APIs.\n\n### Key Takeaways:\n- Understanding SQLite WAL Mode concurrency for reading while writing.\n- Domain-Driven folder architecture for clean separation of concerns.\n- Redis queue worker distribution for zero-blocking asynchronous tasks.",
                'category' => 'Backend & Architecture',
                'tags_json' => ['Laravel 12', 'SQLite', 'Performance', 'Microservices'],
                'cover_image' => null,
                'status' => 'published',
                'published_at' => now()->subDays(2),
                'order_column' => 1,
                'meta_title' => 'Architecting High-Throughput Microservices with Laravel 12 & SQLite',
                'meta_description' => 'Learn how to build sub-10ms microservices using Laravel 12 and SQLite WAL mode.',
            ],
            [
                'title' => 'Blending WebGL 3D Particle Engines with GSAP ScrollTrigger Storytelling',
                'slug' => 'blending-webgl-3d-particle-engines-with-gsap-scrolltrigger',
                'excerpt' => 'A comprehensive guide to synchronizing Three.js 3D cameras, volumetric lighting, and particle systems with user scroll progress.',
                'content' => "Creating cinematic WebGL web experiences requires seamless harmony between the GPU rendering pipeline and the DOM layout. In this technical deep dive, we walk through how we implemented ScrollTrigger timeline hooks to drive Three.js camera position matrices smoothly without dropping below 60fps.\n\n### Core Engineering Steps:\n1. Reusing vector buffers to avoid garbage collection spikes.\n2. Setting up camera target lerping for smooth inertia.\n3. Responsive canvas resizing with device pixel ratio caps.",
                'category' => '3D & Graphics',
                'tags_json' => ['Three.js', 'WebGL', 'GSAP', 'Frontend'],
                'cover_image' => null,
                'status' => 'published',
                'published_at' => now()->subDays(5),
                'order_column' => 2,
                'meta_title' => 'Blending WebGL 3D Particle Engines with GSAP ScrollTrigger',
                'meta_description' => 'Guide to synchronizing Three.js WebGL scenes with GSAP ScrollTrigger animations.',
            ],
        ];

        foreach ($posts as $p) {
            Post::create($p);
        }
    }
}
