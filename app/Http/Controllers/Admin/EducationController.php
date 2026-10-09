<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EducationController extends Controller
{
    public function index()
    {
        $educations = Education::orderBy('order_column')->get();

        return view('admin.educations.index', compact('educations'));
    }

    public function create()
    {
        return view('admin.educations.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|string|max:100',
            'end_date' => 'nullable|string|max:100',
            'summary' => 'nullable|string',
            'order_column' => 'required|integer',
        ]);

        $education = Education::create([
            'institution' => $validated['institution'],
            'degree' => $validated['degree'],
            'field_of_study' => $validated['field_of_study'] ?? null,
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'] ?? null,
            'summary' => $validated['summary'] ?? null,
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_education',
            'description' => 'Added education record: '.$education->degree,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.educations.index')->with('success', 'Education record added successfully.');
    }

    public function edit(Education $education)
    {
        return view('admin.educations.edit', compact('education'));
    }

    public function update(Request $request, Education $education)
    {
        $validated = $request->validate([
            'institution' => 'required|string|max:255',
            'degree' => 'required|string|max:255',
            'field_of_study' => 'nullable|string|max:255',
            'start_date' => 'required|string|max:100',
            'end_date' => 'nullable|string|max:100',
            'summary' => 'nullable|string',
            'order_column' => 'required|integer',
        ]);

        $education->update([
            'institution' => $validated['institution'],
            'degree' => $validated['degree'],
            'field_of_study' => $validated['field_of_study'] ?? null,
            'start_date' => $validated['start_date'],
            'end_date' => $validated['end_date'] ?? null,
            'summary' => $validated['summary'] ?? null,
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_education',
            'description' => 'Updated education record: '.$education->degree,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.educations.index')->with('success', 'Education record updated successfully.');
    }

    public function destroy(Education $education, Request $request)
    {
        $degree = $education->degree;
        $education->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_education',
            'description' => 'Deleted education record: '.$degree,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.educations.index')->with('success', 'Education record deleted successfully.');
    }
}
