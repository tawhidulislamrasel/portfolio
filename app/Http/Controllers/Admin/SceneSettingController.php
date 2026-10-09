<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\SceneSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SceneSettingController extends Controller
{
    public function index()
    {
        $scene = SceneSetting::all()->pluck('value', 'key')->toArray();

        return view('admin.scene.index', compact('scene'));
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'active_preset' => 'required|string|in:tech_core,cyber_cube,neural_network',
            'light_color' => 'required|string',
            'light_intensity' => 'required|numeric|min:0.1|max:10',
            'particle_density' => 'required|integer|min:100|max:5000',
            'particle_color' => 'required|string',
            'rotation_speed' => 'required|numeric|min:0|max:0.05',
            'camera_fov' => 'required|integer|min:30|max:120',
            'bloom_enabled' => 'required|in:true,false',
            'webgl_fallback_enabled' => 'required|in:true,false',
            'mobile_quality_preset' => 'required|string|in:low,medium,high',
        ]);

        foreach ($validated as $key => $val) {
            SceneSetting::setValue($key, (string) $val);
        }

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_3d_scene',
            'description' => 'Updated 3D WebGL Scene & Graphics Configurator parameters.',
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', '3D Scene Configuration updated successfully.');
    }
}
