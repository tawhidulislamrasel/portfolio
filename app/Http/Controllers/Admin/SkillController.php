<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SkillController extends Controller
{
    public function index()
    {
        $skills = Skill::orderBy('order_column')->get();

        return view('admin.skills.index', compact('skills'));
    }

    public function create()
    {
        return view('admin.skills.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'proficiency_percentage' => 'required|integer|min:1|max:100',
            'icon' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'order_column' => 'required|integer',
        ]);

        $skill = Skill::create([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'proficiency_percentage' => $validated['proficiency_percentage'],
            'icon' => $validated['icon'] ?? 'code-2',
            'is_featured' => $request->boolean('is_featured'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_skill',
            'description' => 'Added technical skill: '.$skill->name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.skills.index')->with('success', 'Skill added successfully.');
    }

    public function edit(Skill $skill)
    {
        return view('admin.skills.edit', compact('skill'));
    }

    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'proficiency_percentage' => 'required|integer|min:1|max:100',
            'icon' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'order_column' => 'required|integer',
        ]);

        $skill->update([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'proficiency_percentage' => $validated['proficiency_percentage'],
            'icon' => $validated['icon'] ?? 'code-2',
            'is_featured' => $request->boolean('is_featured'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_skill',
            'description' => 'Updated technical skill: '.$skill->name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.skills.index')->with('success', 'Skill updated successfully.');
    }

    public function destroy(Skill $skill, Request $request)
    {
        $name = $skill->name;
        $skill->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_skill',
            'description' => 'Deleted technical skill: '.$name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.skills.index')->with('success', 'Skill deleted successfully.');
    }
}
