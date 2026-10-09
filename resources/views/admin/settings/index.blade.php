@extends('layouts.admin')

@section('title', 'Global Settings & Profile')

@section('content')
<div class="max-w-4xl space-y-8">

    <div>
        <h1 class="text-xl font-bold text-white">Global Settings & Personal Branding</h1>
        <p class="text-xs text-slate-400 mt-1">Manage site title, owner name, bio, resume download PDF, social links, and global SEO metadata.</p>
    </div>

    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="owner_name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Owner Full Name</label>
                <input type="text" name="owner_name" id="owner_name" value="{{ old('owner_name', $settings['owner_name'] ?? '') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="owner_title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Professional Title</label>
                <input type="text" name="owner_title" id="owner_title" value="{{ old('owner_title', $settings['owner_title'] ?? '') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div>
            <label for="site_name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Website Branding Name</label>
            <input type="text" name="site_name" id="site_name" value="{{ old('site_name', $settings['site_name'] ?? '') }}" required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
        </div>

        <div>
            <label for="bio" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Professional Biography Summary</label>
            <textarea name="bio" id="bio" rows="4"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">{{ old('bio', $settings['bio'] ?? '') }}</textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label for="contact_email" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Contact Email Address</label>
                <input type="email" name="contact_email" id="contact_email" value="{{ old('contact_email', $settings['contact_email'] ?? '') }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="contact_phone" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="text" name="contact_phone" id="contact_phone" value="{{ old('contact_phone', $settings['contact_phone'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="location" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Location / City</label>
                <input type="text" name="location" id="location" value="{{ old('location', $settings['location'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label for="github_url" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">GitHub Profile URL</label>
                <input type="url" name="github_url" id="github_url" value="{{ old('github_url', $settings['github_url'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="linkedin_url" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">LinkedIn Profile URL</label>
                <input type="url" name="linkedin_url" id="linkedin_url" value="{{ old('linkedin_url', $settings['linkedin_url'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="twitter_url" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Twitter / X Profile URL</label>
                <input type="url" name="twitter_url" id="twitter_url" value="{{ old('twitter_url', $settings['twitter_url'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
                <label for="site_logo" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Upload Website Branding Logo (PNG / SVG / JPG)</label>
                <input type="file" name="site_logo" id="site_logo" accept="image/*"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                @if (!empty($settings['site_logo']))
                    <div class="mt-2 flex items-center gap-2">
                        <img src="{{ asset($settings['site_logo']) }}" alt="Logo" class="w-10 h-10 object-contain rounded-lg border border-slate-700 bg-slate-950 p-1">
                        <span class="text-xs text-slate-400 font-mono">Current Custom Logo</span>
                    </div>
                @endif
            </div>

            <div>
                <label for="site_favicon" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Upload Website Favicon (ICO / PNG / SVG)</label>
                <input type="file" name="site_favicon" id="site_favicon" accept="image/*,.ico"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                @if (!empty($settings['site_favicon']))
                    <div class="mt-2 flex items-center gap-2">
                        <img src="{{ asset($settings['site_favicon']) }}" alt="Favicon" class="w-6 h-6 object-contain rounded border border-slate-700 bg-slate-950 p-0.5">
                        <span class="text-xs text-slate-400 font-mono">Current Favicon</span>
                    </div>
                @endif
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
                <label for="resume_file" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Upload Resume CV (PDF / DOCX)</label>
                <input type="file" name="resume_file" id="resume_file"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                @if (!empty($settings['resume_file']))
                    <a href="{{ $settings['resume_file'] }}" target="_blank" class="text-xs text-blue-400 underline mt-2 block">Current Resume File</a>
                @endif
            </div>

            <div>
                <label for="profile_photo" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Upload Owner Profile Avatar</label>
                <input type="file" name="profile_photo" id="profile_photo"
                    class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs">
                @if (!empty($settings['profile_photo']))
                    <img src="{{ $settings['profile_photo'] }}" alt="Profile" class="w-10 h-10 rounded-full mt-2 object-cover border border-slate-700">
                @endif
            </div>
        </div>

        <div class="pt-4 border-t border-slate-800 space-y-4">
            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Default SEO & Search Metadata</h3>

            <div>
                <label for="seo_title" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">SEO Meta Title</label>
                <input type="text" name="seo_title" id="seo_title" value="{{ old('seo_title', $settings['seo_title'] ?? '') }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="seo_description" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">SEO Meta Description</label>
                <textarea name="seo_description" id="seo_description" rows="3"
                    class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">{{ old('seo_description', $settings['seo_description'] ?? '') }}</textarea>
            </div>
        </div>

        <div class="pt-4 border-t border-slate-800 space-y-4">
            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Footer Settings & Copyright</h3>

            <div>
                <label for="copyright_text" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Footer Copyright Text</label>
                <input type="text" name="copyright_text" id="copyright_text" value="{{ old('copyright_text', $settings['copyright_text'] ?? '') }}" placeholder="e.g. © 2026 Tawhidul Islam. All rights reserved."
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                <p class="text-xs text-slate-500 mt-1">Leave empty to default to: © {{ date('Y') }} {{ $settings['owner_name'] ?? 'Alexander Vance' }}. All rights reserved.</p>
            </div>

            <div>
                <label for="footer_subtext" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Footer Subtext / Built With Tagline</label>
                <input type="text" name="footer_subtext" id="footer_subtext" value="{{ old('footer_subtext', $settings['footer_subtext'] ?? '') }}" placeholder="e.g. Built with Laravel 12, Three.js WebGL & Tailwind CSS."
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
                <p class="text-xs text-slate-500 mt-1">Leave empty to default to: Built with Laravel 12, SQLite, Three.js WebGL, GSAP & Tailwind CSS.</p>
            </div>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition">
                Save Global Settings
            </button>
        </div>
    </form>

</div>
@endsection
