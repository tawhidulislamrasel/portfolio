<?php

namespace Tests\Feature;

use App\Models\Post;
use App\Models\Project;
use App\Models\SceneSetting;
use App\Models\Setting;
use App\Models\ThemeSetting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    /** @test */
    public function public_blog_archive_and_detail_page_render_successfully()
    {
        $response = $this->get(route('blog.index'));
        $response->assertStatus(200);
        $response->assertSee('Engineering Blog');
        $response->assertSee('Architecting High-Throughput Microservices', false);

        $post = Post::where('status', 'published')->first();
        $detailResponse = $this->get(route('blog.show', $post->slug));
        $detailResponse->assertStatus(200);
        $detailResponse->assertSee($post->title);
    }

    /** @test */
    public function admin_can_create_update_and_delete_blog_posts()
    {
        $admin = User::where('email', 'admin@example.com')->first();

        // Create Blog Post
        $createResponse = $this->actingAs($admin)->post(route('admin.posts.store'), [
            'title' => 'Scaling Distributed Databases with SQLite WAL Mode',
            'category' => 'Database Architecture',
            'content' => 'Deep dive analysis of SQLite WAL mode performance.',
            'status' => 'published',
            'order_column' => 1,
            'tags' => 'SQLite, Architecture, Performance',
        ]);

        $createResponse->assertRedirect(route('admin.posts.index'));
        $this->assertDatabaseHas('posts', ['title' => 'Scaling Distributed Databases with SQLite WAL Mode']);

        $post = Post::where('title', 'Scaling Distributed Databases with SQLite WAL Mode')->first();

        // Update Blog Post
        $updateResponse = $this->actingAs($admin)->put(route('admin.posts.update', $post), [
            'title' => 'Scaling Distributed Databases with SQLite WAL Mode V2',
            'category' => 'Database Architecture',
            'content' => 'Updated content analysis.',
            'status' => 'published',
            'order_column' => 1,
            'tags' => 'SQLite, Architecture',
        ]);

        $updateResponse->assertRedirect(route('admin.posts.index'));
        $this->assertDatabaseHas('posts', ['title' => 'Scaling Distributed Databases with SQLite WAL Mode V2']);

        // Delete Blog Post
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.posts.destroy', $post));
        $deleteResponse->assertRedirect(route('admin.posts.index'));
        $this->assertDatabaseMissing('posts', ['id' => $post->id]);
    }

    /** @test */
    public function public_homepage_renders_successfully_with_all_dynamic_sections()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Alexander Vance');
        $response->assertSee('Architecting Next-Gen SaaS Ecosystems', false);
        $response->assertSee('EduPulse SaaS');
    }

    /** @test */
    public function project_case_study_page_renders_successfully()
    {
        $project = Project::where('status', 'published')->first();

        $response = $this->get(route('projects.show', $project->slug));

        $response->assertStatus(200);
        $response->assertSee($project->title, false);
        $response->assertSee($project->category);
    }

    /** @test */
    public function contact_form_submission_stores_enquiry_in_sqlite()
    {
        $data = [
            'name' => 'Sarah Connor',
            'email' => 'sarah@example.com',
            'subject' => 'Enterprise Architecture Consultation',
            'message' => 'Hello Alexander, we would like to discuss an enterprise architecture consultation for our cloud infrastructure.',
        ];

        $response = $this->post(route('contact.submit'), $data);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('enquiries', [
            'name' => 'Sarah Connor',
            'email' => 'sarah@example.com',
            'subject' => 'Enterprise Architecture Consultation',
            'status' => 'unread',
        ]);
    }

    /** @test */
    public function contact_form_honeypot_blocks_spam_bots()
    {
        $data = [
            'name' => 'Spam Bot',
            'email' => 'spammer@example.com',
            'message' => 'Buy cheap links now',
            'website_hp' => 'http://spam-site.test', // Filled honeypot
        ];

        $response = $this->post(route('contact.submit'), $data);

        $response->assertRedirect();
        $this->assertDatabaseMissing('enquiries', ['email' => 'spammer@example.com']);
    }

    /** @test */
    public function guest_cannot_access_admin_panel()
    {
        $response = $this->get(route('admin.dashboard'));
        $response->assertRedirect(route('login'));
    }

    /** @test */
    public function admin_can_authenticate_and_access_dashboard()
    {
        $admin = User::where('email', 'admin@example.com')->first();

        $response = $this->post(route('admin.login'), [
            'email' => 'admin@example.com',
            'password' => 'password',
        ]);

        $response->assertRedirect(route('admin.dashboard'));
        $this->assertAuthenticatedAs($admin);

        $dashResponse = $this->actingAs($admin)->get(route('admin.dashboard'));
        $dashResponse->assertStatus(200);
        $dashResponse->assertSee('System Status', false);
    }

    /** @test */
    public function admin_can_update_global_settings()
    {
        $admin = User::where('email', 'admin@example.com')->first();
        \Illuminate\Support\Facades\Storage::fake('public');

        $response = $this->actingAs($admin)->post(route('admin.settings.update'), [
            'site_name' => 'Alexander Vance | Enterprise Architect',
            'owner_name' => 'Alexander Vance',
            'owner_title' => 'Principal Software Architect',
            'bio' => 'Updated bio information.',
            'contact_email' => 'alexander.updated@example.com',
            'site_logo' => \Illuminate\Http\Testing\File::create('logo.png', 100),
            'site_favicon' => \Illuminate\Http\Testing\File::create('favicon.ico', 50),
        ]);

        $response->assertRedirect();
        $this->assertEquals('Alexander Vance | Enterprise Architect', Setting::getValue('site_name'));
        $this->assertEquals('alexander.updated@example.com', Setting::getValue('contact_email'));
        $this->assertNotNull(Setting::getValue('site_logo'));
        $this->assertNotNull(Setting::getValue('site_favicon'));
    }

    /** @test */
    public function admin_can_update_theme_design_system_tokens()
    {
        $admin = User::where('email', 'admin@example.com')->first();

        $response = $this->actingAs($admin)->post(route('admin.theme.update'), [
            'primary_color' => '#2563eb',
            'secondary_color' => '#0891b2',
            'accent_color' => '#4f46e5',
            'bg_dark' => '#020617',
            'bg_card' => '#0f172a',
            'text_main' => '#ffffff',
            'border_radius' => '1rem',
        ]);

        $response->assertRedirect();
        $this->assertEquals('#2563eb', ThemeSetting::getValue('primary_color'));
        $this->assertEquals('#020617', ThemeSetting::getValue('bg_dark'));
    }

    /** @test */
    public function admin_can_update_3d_webgl_scene_configurator()
    {
        $admin = User::where('email', 'admin@example.com')->first();

        $response = $this->actingAs($admin)->post(route('admin.scene.update'), [
            'active_preset' => 'cyber_cube',
            'light_color' => '#3b82f6',
            'light_intensity' => 2.5,
            'particle_density' => 2000,
            'particle_color' => '#06b6d4',
            'rotation_speed' => 0.01,
            'camera_fov' => 75,
            'bloom_enabled' => 'true',
            'webgl_fallback_enabled' => 'true',
            'mobile_quality_preset' => 'high',
        ]);

        $response->assertRedirect();
        $this->assertEquals('cyber_cube', SceneSetting::getValue('active_preset'));
        $this->assertEquals('2000', SceneSetting::getValue('particle_density'));
    }

    /** @test */
    public function admin_can_create_update_and_delete_projects()
    {
        $admin = User::where('email', 'admin@example.com')->first();

        // Create
        $createResponse = $this->actingAs($admin)->post(route('admin.projects.store'), [
            'title' => 'Quantum Ledger SaaS Platform',
            'category' => 'FinTech SaaS',
            'summary' => 'High-frequency transaction ledger platform.',
            'status' => 'published',
            'order_column' => 10,
        ]);

        $createResponse->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseHas('projects', ['title' => 'Quantum Ledger SaaS Platform']);

        $project = Project::where('title', 'Quantum Ledger SaaS Platform')->first();

        // Update
        $updateResponse = $this->actingAs($admin)->put(route('admin.projects.update', $project), [
            'title' => 'Quantum Ledger SaaS Platform V2',
            'category' => 'FinTech SaaS',
            'summary' => 'Updated ledger summary.',
            'status' => 'published',
            'order_column' => 10,
        ]);

        $updateResponse->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseHas('projects', ['title' => 'Quantum Ledger SaaS Platform V2']);

        // Delete
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.projects.destroy', $project));
        $deleteResponse->assertRedirect(route('admin.projects.index'));
        $this->assertDatabaseMissing('projects', ['id' => $project->id]);
    }

    /** @test */
    public function storage_asset_delivery_serves_uploaded_files()
    {
        $testFileDir = storage_path('app/public/test_assets');
        if (!is_dir($testFileDir)) {
            mkdir($testFileDir, 0777, true);
        }

        $testFilePath = $testFileDir . '/sample.txt';
        file_put_contents($testFilePath, 'Storage file content');

        $response = $this->get('/storage/test_assets/sample.txt');
        $response->assertStatus(200);
        $this->assertEquals('Storage file content', file_get_contents($response->getFile()->getPathname()));

        if (file_exists($testFilePath)) {
            unlink($testFilePath);
        }
    }
}
