<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\MediaAsset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller
{
    public function index()
    {
        $assets = MediaAsset::latest()->paginate(20);

        return view('admin.media.index', compact('assets'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,webp,gif,svg,pdf,mp4,glb,gltf|max:20480',
            'alt_text' => 'nullable|string|max:255',
        ]);

        $file = $request->file('file');
        $path = $file->store('media', 'public');

        $asset = MediaAsset::create([
            'filename' => basename($path),
            'original_name' => $file->getClientOriginalName(),
            'mime_type' => $file->getClientMimeType(),
            'file_path' => '/storage/'.$path,
            'file_size' => $file->getSize(),
            'alt_text' => $request->input('alt_text', $file->getClientOriginalName()),
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'upload_media',
            'description' => 'Uploaded media asset: '.$asset->original_name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', 'File uploaded successfully.');
    }

    public function destroy(MediaAsset $media, Request $request)
    {
        $filename = $media->original_name;

        // Remove storage file if present
        $relativePath = str_replace('/storage/', '', $media->file_path);
        if (Storage::disk('public')->exists($relativePath)) {
            Storage::disk('public')->delete($relativePath);
        }

        $media->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_media',
            'description' => 'Deleted media asset: '.$filename,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->back()->with('success', 'Media asset deleted successfully.');
    }
}
