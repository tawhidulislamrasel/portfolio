<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Achievement;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AchievementController extends Controller
{
    public function index()
    {
        $achievements = Achievement::orderBy('order_column')->get();

        return view('admin.achievements.index', compact('achievements'));
    }

    public function create()
    {
        return view('admin.achievements.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'metric_value' => 'nullable|string|max:100',
            'description' => 'nullable|string',
            'date' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'order_column' => 'required|integer',
        ]);

        $achievement = Achievement::create([
            'title' => $validated['title'],
            'category' => $validated['category'] ?? 'Engineering',
            'metric_value' => $validated['metric_value'] ?? null,
            'description' => $validated['description'] ?? null,
            'date' => $validated['date'] ?? null,
            'is_featured' => $request->boolean('is_featured'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_achievement',
            'description' => 'Added achievement metric: '.$achievement->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.achievements.index')->with('success', 'Achievement added successfully.');
    }

    public function edit(Achievement $achievement)
    {
        return view('admin.achievements.edit', compact('achievement'));
    }

    public function update(Request $request, Achievement $achievement)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'metric_value' => 'nullable|string|max:100',
            'description' => 'nullable|string',
            'date' => 'nullable|string|max:100',
            'is_featured' => 'boolean',
            'order_column' => 'required|integer',
        ]);

        $achievement->update([
            'title' => $validated['title'],
            'category' => $validated['category'] ?? 'Engineering',
            'metric_value' => $validated['metric_value'] ?? null,
            'description' => $validated['description'] ?? null,
            'date' => $validated['date'] ?? null,
            'is_featured' => $request->boolean('is_featured'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_achievement',
            'description' => 'Updated achievement metric: '.$achievement->title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.achievements.index')->with('success', 'Achievement updated successfully.');
    }

    public function destroy(Achievement $achievement, Request $request)
    {
        $title = $achievement->title;
        $achievement->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_achievement',
            'description' => 'Deleted achievement metric: '.$title,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.achievements.index')->with('success', 'Achievement deleted successfully.');
    }
}
