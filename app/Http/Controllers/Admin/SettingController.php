<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::all()->pluck('value', 'key')->toArray();

        return view('admin.settings.index', compact('settings'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'site_name' => 'required|string|max:255',
            'owner_name' => 'required|string|max:255',
            'owner_title' => 'required|string|max:255',
            'bio' => 'nullable|string',
            'contact_email' => 'required|email',
            'contact_phone' => 'nullable|string',
            'location' => 'nullable|string',
            'github_url' => 'nullable|url',
            'linkedin_url' => 'nullable|url',
            'twitter_url' => 'nullable|url',
            'seo_title' => 'nullable|string|max:255',
            'seo_description' => 'nullable|string',
            'seo_keywords' => 'nullable|string',
            'copyright_text' => 'nullable|string|max:255',
            'footer_subtext' => 'nullable|string|max:255',
            'profile_photo' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:4096',
            'resume_file' => 'nullable|file|mimes:pdf,doc,docx|max:10240',
            'site_logo' => 'nullable|file|mimes:jpeg,png,jpg,webp,svg,ico|max:4096',
            'site_favicon' => 'nullable|file|mimes:ico,png,jpg,jpeg,svg,webp|max:2048',
        ]);

        if ($request->hasFile('profile_photo')) {
            $path = $request->file('profile_photo')->store('portfolio', 'public');
            Setting::setValue('profile_photo', '/storage/'.$path, 'general', 'Profile Photo');
        }

        if ($request->hasFile('resume_file')) {
            $path = $request->file('resume_file')->store('resumes', 'public');
            Setting::setValue('resume_file', '/storage/'.$path, 'general', 'Resume File');
        }

        if ($request->hasFile('site_logo')) {
            $path = $request->file('site_logo')->store('branding', 'public');
            Setting::setValue('site_logo', '/storage/'.$path, 'general', 'Site Logo');
        }

        if ($request->hasFile('site_favicon')) {
            $path = $request->file('site_favicon')->store('branding', 'public');
            Setting::setValue('site_favicon', '/storage/'.$path, 'general', 'Site Favicon');
        }

        $textFields = [
            'site_name', 'owner_name', 'owner_title', 'bio', 'contact_email',
            'contact_phone', 'location', 'github_url', 'linkedin_url', 'twitter_url',
            'seo_title', 'seo_description', 'seo_keywords', 'copyright_text', 'footer_subtext',
        ];

        foreach ($textFields as $field) {
            if ($request->has($field)) {
                Setting::setValue($field, $request->input($field), 'general');
            }
        }

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_settings',
            'description' => 'Updated general site settings, branding logo, favicon & SEO.',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
