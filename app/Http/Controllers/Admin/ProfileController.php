<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function edit()
    {
        $user = Auth::user();

        return view('admin.profile.edit', compact('user'));
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'current_password' => ['nullable', 'required_with:new_password'],
            'new_password' => ['nullable', 'string', 'min:8', 'confirmed'],
        ]);

        if ($request->filled('current_password')) {
            if (!Hash::check($request->current_password, $user->password)) {
                return back()->withErrors([
                    'current_password' => 'The provided current password does not match your current credentials.',
                ])->withInput();
            }

            $user->password = Hash::make($request->new_password);
        }

        $user->name = $validated['name'];
        $user->email = $validated['email'];
        $user->save();

        try {
            ActivityLog::create([
                'user_id' => $user->id,
                'action' => 'update_profile',
                'description' => 'Updated admin credentials (Name, Email, or Password).',
                'ip_address' => $request->ip(),
            ]);
        } catch (\Throwable $e) {
            // Ignore logging exception if missing table or serverless constraint
        }

        return redirect()->route('admin.profile.edit')->with('success', 'Admin profile & security credentials updated successfully.');
    }
}
