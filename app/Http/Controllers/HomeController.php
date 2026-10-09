<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Models\AnimationSetting;
use App\Models\Education;
use App\Models\Experience;
use App\Models\Project;
use App\Models\SceneSetting;
use App\Models\Section;
use App\Models\Setting;
use App\Models\Skill;
use App\Models\Testimonial;
use App\Models\ThemeSetting;

class HomeController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();
        $theme = ThemeSetting::all()->pluck('value', 'key')->toArray();
        $scene = SceneSetting::all()->pluck('value', 'key')->toArray();
        $animation = AnimationSetting::all()->pluck('value', 'key')->toArray();

        $sections = Section::where('is_enabled', true)->orderBy('order_column')->get()->keyBy('key');

        $skills = Skill::orderBy('order_column')->get()->groupBy('category');
        $experiences = Experience::orderBy('order_column')->get();
        $educations = Education::orderBy('order_column')->get();
        $projects = Project::where('status', 'published')->orderBy('order_column')->get();
        $achievements = Achievement::where('is_featured', true)->orderBy('order_column')->get();
        $testimonials = Testimonial::where('is_published', true)->orderBy('order_column')->get();

        return view('home', compact(
            'settings',
            'theme',
            'scene',
            'animation',
            'sections',
            'skills',
            'experiences',
            'educations',
            'projects',
            'achievements',
            'testimonials'
        ));
    }
}
