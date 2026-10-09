<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\AnimationSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AnimationSettingController extends Controller
{
    public function index()
    {
        $animation = AnimationSetting::all()->pluck('value', 'key')->toArray();

        return view('admin.animation.index', compact('animation'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'scroll_duration' => 'required|numeric|min:0.2|max:5',
            'transition_speed' => 'required|numeric|min:0.1|max:3',
            'easing_function' => 'required|string',
            'cursor_effect_enabled' => 'required|in:true,false',
            'magnetic_effect_enabled' => 'required|in:true,false',
            'parallax_strength' => 'required|numeric|min:0|max:3',
            'reduced_motion_mode' => 'required|string|in:respect_os,force_disable,force_enable',
        ]);

        foreach ($validated as $key => $val) {
            AnimationSetting::setValue($key, (string) $val);
        }

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_animation',
            'description' => 'Updated GSAP & Motion Control Center settings.',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', 'Animation settings updated successfully.');
    }
}
