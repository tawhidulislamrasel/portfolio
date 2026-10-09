<?php

use App\Http\Controllers\Admin\AchievementController;
use App\Http\Controllers\Admin\AnimationSettingController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EducationController;
use App\Http\Controllers\Admin\EnquiryController;
use App\Http\Controllers\Admin\ExperienceController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\PostController as AdminPostController;
use App\Http\Controllers\Admin\ProjectController as AdminProjectController;
use App\Http\Controllers\Admin\SceneSettingController;
use App\Http\Controllers\Admin\SectionController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\ThemeSettingController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProjectController;
use App\Http\Middleware\EnsureAdminUser;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Portfolio Routes
|--------------------------------------------------------------------------
*/
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/projects/{slug}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/blog', [PostController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [PostController::class, 'show'])->name('blog.show');
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

/*
|--------------------------------------------------------------------------
| Admin Auth Routes
|--------------------------------------------------------------------------
*/
Route::get('/admin/login', [LoginController::class, 'showLoginForm'])->name('admin.login');
Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/admin/login', [LoginController::class, 'login'])->middleware('throttle:10,1');
Route::post('/admin/logout', [LoginController::class, 'logout'])->name('admin.logout');

/*
|--------------------------------------------------------------------------
| Protected Admin Panel Routes
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', EnsureAdminUser::class])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Global Settings
    Route::get('/settings', [SettingController::class, 'index'])->name('settings.index');
    Route::post('/settings', [SettingController::class, 'update'])->name('settings.update');

    // Theme & Design System
    Route::get('/theme', [ThemeSettingController::class, 'index'])->name('theme.index');
    Route::post('/theme', [ThemeSettingController::class, 'update'])->name('theme.update');

    // 3D WebGL Configurator
    Route::get('/scene', [SceneSettingController::class, 'index'])->name('scene.index');
    Route::post('/scene', [SceneSettingController::class, 'update'])->name('scene.update');

    // Animation & Motion Control
    Route::get('/animation', [AnimationSettingController::class, 'index'])->name('animation.index');
    Route::post('/animation', [AnimationSettingController::class, 'update'])->name('animation.update');

    // Page Sections Manager
    Route::get('/sections', [SectionController::class, 'index'])->name('sections.index');
    Route::get('/sections/{section}/edit', [SectionController::class, 'edit'])->name('sections.edit');
    Route::put('/sections/{section}', [SectionController::class, 'update'])->name('sections.update');
    Route::post('/sections/{section}/toggle', [SectionController::class, 'toggle'])->name('sections.toggle');
    Route::post('/sections/reorder', [SectionController::class, 'reorder'])->name('sections.reorder');

    // Projects CRUD
    Route::resource('projects', AdminProjectController::class);

    // Blogs / Posts CRUD
    Route::resource('posts', AdminPostController::class);

    // Skills CRUD
    Route::resource('skills', SkillController::class);

    // Career Timeline CRUD
    Route::resource('experiences', ExperienceController::class);

    // Education CRUD
    Route::resource('educations', EducationController::class);

    // Achievements CRUD
    Route::resource('achievements', AchievementController::class);

    // Testimonials CRUD
    Route::resource('testimonials', TestimonialController::class);

    // Contact Enquiry Inbox
    Route::get('/enquiries', [EnquiryController::class, 'index'])->name('enquiries.index');
    Route::get('/enquiries/{enquiry}', [EnquiryController::class, 'show'])->name('enquiries.show');
    Route::post('/enquiries/{enquiry}/status', [EnquiryController::class, 'updateStatus'])->name('enquiries.update-status');
    Route::delete('/enquiries/{enquiry}', [EnquiryController::class, 'destroy'])->name('enquiries.destroy');

    // Media Asset Library
    Route::get('/media', [MediaController::class, 'index'])->name('media.index');
    Route::post('/media', [MediaController::class, 'store'])->name('media.store');
    Route::delete('/media/{media}', [MediaController::class, 'destroy'])->name('media.destroy');
});
