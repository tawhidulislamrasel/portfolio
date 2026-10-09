<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Setting;
use App\Models\ThemeSetting;

class ProjectController extends Controller
{
    public function show(string $slug)
    {
        $project = Project::where('slug', $slug)->where('status', 'published')->firstOrFail();
        $settings = Setting::all()->pluck('value', 'key')->toArray();
        $theme = ThemeSetting::all()->pluck('value', 'key')->toArray();

        $relatedProjects = Project::where('status', 'published')
            ->where('id', '!=', $project->id)
            ->take(3)
            ->get();

        return view('projects.show', compact('project', 'settings', 'theme', 'relatedProjects'));
    }
}
