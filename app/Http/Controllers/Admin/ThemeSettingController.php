<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\ThemeSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ThemeSettingController extends Controller
{
    public function index()
    {
        $theme = ThemeSetting::all()->pluck('value', 'key')->toArray();

        return view('admin.theme.index', compact('theme'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'primary_color' => 'required|string',
            'secondary_color' => 'required|string',
            'accent_color' => 'required|string',
            'bg_dark' => 'required|string',
            'bg_card' => 'required|string',
            'text_main' => 'required|string',
            'border_radius' => 'required|string',
            'custom_css' => 'nullable|string',
        ]);

        foreach ($validated as $key => $val) {
            ThemeSetting::setValue($key, $val);
        }

        try {
            ActivityLog::create([
                'user_id' => Auth::id() ?? 1,
                'action' => 'update_theme',
                'description' => 'Updated Global Design System & Theme CSS variables.',
                'ip_address' => $request->ip(),
            ]);
        } catch (\Throwable $e) {
            // Ignore activity log creation exception on serverless
        }

        return redirect()->back()->with('success', 'Theme settings updated successfully.');
    }
}
