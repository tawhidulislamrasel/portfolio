<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Enquiry;
use App\Models\MediaAsset;
use App\Models\Project;
use App\Models\Skill;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_projects' => Project::count(),
            'published_projects' => Project::where('status', 'published')->count(),
            'unread_enquiries' => Enquiry::where('status', 'unread')->count(),
            'total_enquiries' => Enquiry::count(),
            'total_skills' => Skill::count(),
            'total_media' => MediaAsset::count(),
        ];

        $recentEnquiries = Enquiry::latest()->take(5)->get();
        $recentLogs = ActivityLog::with('user')->latest()->take(6)->get();

        return view('admin.dashboard', compact('stats', 'recentEnquiries', 'recentLogs'));
    }
}
