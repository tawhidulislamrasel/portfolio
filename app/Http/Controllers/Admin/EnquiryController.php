<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnquiryController extends Controller
{
    public function index()
    {
        $enquiries = Enquiry::latest()->paginate(15);

        return view('admin.enquiries.index', compact('enquiries'));
    }

    public function show(Enquiry $enquiry)
    {
        if ($enquiry->status === 'unread') {
            $enquiry->update(['status' => 'read']);
        }

        return view('admin.enquiries.show', compact('enquiry'));
    }

    public function updateStatus(Request $request, Enquiry $enquiry)
    {
        $validated = $request->validate([
            'status' => 'required|in:unread,read,replied,archived',
            'admin_notes' => 'nullable|string',
        ]);

        $enquiry->update([
            'status' => $validated['status'],
            'admin_notes' => $validated['admin_notes'] ?? $enquiry->admin_notes,
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_enquiry',
            'description' => 'Updated contact enquiry #'.$enquiry->id.' status to '.$enquiry->status,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', 'Enquiry status updated.');
    }

    public function destroy(Enquiry $enquiry, Request $request)
    {
        $id = $enquiry->id;
        $enquiry->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_enquiry',
            'description' => 'Deleted contact enquiry #'.$id,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.enquiries.index')->with('success', 'Enquiry deleted.');
    }
}
