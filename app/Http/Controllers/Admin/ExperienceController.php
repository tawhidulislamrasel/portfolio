<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Experience;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('order_column')->get();

        return view('admin.experiences.index', compact('experiences'));
    }

    public function create()
    {
        return view('admin.experiences.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'start_date' => 'required|string|max:100',
            'end_date' => 'nullable|string|max:100',
            'is_current' => 'boolean',
            'description' => 'nullable|string',
            'achievements' => 'nullable|string', // newline separated
            'order_column' => 'required|integer',
        ]);

        $achievementsArray = array_values(array_filter(array_map('trim', explode("\n", $request->input('achievements', '')))));

        $experience = Experience::create([
            'company' => $validated['company'],
            'role' => $validated['role'],
            'location' => $validated['location'] ?? null,
            'employment_type' => $validated['employment_type'] ?? 'Full-time',
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'] ?? null,
            'is_current' => $request->boolean('is_current'),
            'description' => $validated['description'] ?? null,
            'achievements_json' => $achievementsArray,
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_experience',
            'description' => 'Added experience: '.$experience->role.' at '.$experience->company,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.experiences.index')->with('success', 'Career milestone added successfully.');
    }

    public function edit(Experience $experience)
    {
        return view('admin.experiences.edit', compact('experience'));
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'start_date' => 'required|string|max:100',
            'end_date' => 'nullable|string|max:100',
            'is_current' => 'boolean',
            'description' => 'nullable|string',
            'achievements' => 'nullable|string',
            'order_column' => 'required|integer',
        ]);

        $achievementsArray = array_values(array_filter(array_map('trim', explode("\n", $request->input('achievements', '')))));

        $experience->update([
            'company' => $validated['company'],
            'role' => $validated['role'],
            'location' => $validated['location'] ?? null,
            'employment_type' => $validated['employment_type'] ?? 'Full-time',
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'] ?? null,
            'is_current' => $request->boolean('is_current'),
            'description' => $validated['description'] ?? null,
            'achievements_json' => $achievementsArray,
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_experience',
            'description' => 'Updated experience: '.$experience->role.' at '.$experience->company,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.experiences.index')->with('success', 'Career milestone updated successfully.');
    }

    public function destroy(Experience $experience, Request $request)
    {
        $title = $experience->role.' at '.$experience->company;
        $experience->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_experience',
            'description' => 'Deleted experience: '.$title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.experiences.index')->with('success', 'Career milestone deleted successfully.');
    }
}
