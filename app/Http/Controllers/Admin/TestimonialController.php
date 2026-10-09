<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::orderBy('order_column')->get();

        return view('admin.testimonials.index', compact('testimonials'));
    }

    public function create()
    {
        return view('admin.testimonials.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'author_name' => 'required|string|max:255',
            'author_title' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'quote' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_published' => 'boolean',
            'order_column' => 'required|integer',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $avatarPath = null;
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('testimonials', 'public');
            $avatarPath = '/storage/'.$path;
        }

        $testimonial = Testimonial::create([
            'author_name' => $validated['author_name'],
            'author_title' => $validated['author_title'] ?? null,
            'company' => $validated['company'] ?? null,
            'quote' => $validated['quote'],
            'rating' => $validated['rating'],
            'avatar' => $avatarPath,
            'is_published' => $request->boolean('is_published'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'create_testimonial',
            'description' => 'Added endorsement from: '.$testimonial->author_name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial added successfully.');
    }

    public function edit(Testimonial $testimonial)
    {
        return view('admin.testimonials.edit', compact('testimonial'));
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $validated = $request->validate([
            'author_name' => 'required|string|max:255',
            'author_title' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'quote' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'is_published' => 'boolean',
            'order_column' => 'required|integer',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('testimonials', 'public');
            $testimonial->avatar = '/storage/'.$path;
        }

        $testimonial->update([
            'author_name' => $validated['author_name'],
            'author_title' => $validated['author_title'] ?? null,
            'company' => $validated['company'] ?? null,
            'quote' => $validated['quote'],
            'rating' => $validated['rating'],
            'is_published' => $request->boolean('is_published'),
            'order_column' => $validated['order_column'],
        ]);

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'update_testimonial',
            'description' => 'Updated endorsement from: '.$testimonial->author_name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial updated successfully.');
    }

    public function destroy(Testimonial $testimonial, Request $request)
    {
        $name = $testimonial->author_name;
        $testimonial->delete();

        ActivityLog::create([
            'user_id' => Auth::id(),
            'action' => 'delete_testimonial',
            'description' => 'Deleted endorsement from: '.$name,
            'ip_address' => $request->ip(),
        ]);

        return redirect()->route('admin.testimonials.index')->with('success', 'Testimonial deleted successfully.');
    }
}
