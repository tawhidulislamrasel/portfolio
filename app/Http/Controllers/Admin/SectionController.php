<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SectionController extends Controller
{
    public function index()
    {
        $sections = Section::orderBy('order_column')->get();

        return view('admin.sections.index', compact('sections'));
    }

    public function edit(Section $section)
    {
        return view('admin.sections.edit', compact('section'));
    }

    public function update(Request $request, Section $section)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'is_enabled' => 'boolean',
            'order_column' => 'required|integer',
        ]);

        $section->update([
            'name' => $validated['name'],
            'title' => $validated['title'] ?? null,
            'subtitle' => $validated['subtitle'] ?? null,
            'content' => $validated['content'] ?? null,
            'is_enabled' => $request->boolean('is_enabled'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_section',
            'description' => 'Updated page section: '.$section->name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.sections.index')->with('success', 'Section updated successfully.');
    }

    public function toggle(Section $section)
    {
        $section->update(['is_enabled' => ! $section->is_enabled]);

        return redirect()->back()->with('success', 'Section visibility toggled.');
    }

    public function reorder(Request $request)
    {
        $request->validate([
            'order' => 'required|array',
            'order.*' => 'integer|exists:sections,id',
        ]);

        foreach ($request->order as $index => $id) {
            Section::where('id', $id)->update(['order_column' => $index + 1]);
        }

        return response()->json(['status' => 'success', 'message' => 'Sections reordered.']);
    }
}
