@extends('layouts.admin')

@section('title', 'Admin Profile & Security')

@section('content')
<div class="max-w-4xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Admin Profile & Security Settings</h1>
            <p class="text-xs text-slate-400 mt-1">Update your display name, login email address, and security password.</p>
        </div>
    </div>

    <form action="{{ route('admin.profile.update') }}" method="POST" class="space-y-8">
        @csrf
        @method('PUT')

        <!-- Profile Information Section -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            <div class="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div class="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold">
                    <i data-lucide="user" class="w-5 h-5"></i>
                </div>
                <div>
                    <h2 class="text-base font-bold text-white">Profile Information</h2>
                    <p class="text-xs text-slate-400">Manage your administrative name and account email address.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label for="name" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" name="name" id="name" value="{{ old('name', $user->name) }}" required
                        class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                </div>

                <div>
                    <label for="email" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Login Email Address</label>
                    <input type="email" name="email" id="email" value="{{ old('email', $user->email) }}" required
                        class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                </div>
            </div>
        </div>

        <!-- Security & Password Update Section -->
        <div class="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            <div class="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div class="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
                    <i data-lucide="key-round" class="w-5 h-5"></i>
                </div>
                <div>
                    <h2 class="text-base font-bold text-white">Change Password</h2>
                    <p class="text-xs text-slate-400">Leave blank if you do not wish to update your current password.</p>
                </div>
            </div>

            <div class="space-y-6">
                <div>
                    <label for="current_password" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Current Password</label>
                    <input type="password" name="current_password" id="current_password" placeholder="••••••••"
                        class="w-full md:w-1/2 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="new_password" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">New Password (Min 8 Chars)</label>
                        <input type="password" name="new_password" id="new_password" placeholder="••••••••"
                            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                    </div>

                    <div>
                        <label for="new_password_confirmation" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Confirm New Password</label>
                        <input type="password" name="new_password_confirmation" id="new_password_confirmation" placeholder="••••••••"
                            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition">
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-end gap-4 pt-2">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm shadow-lg shadow-blue-500/25 transition flex items-center gap-2">
                <i data-lucide="save" class="w-4 h-4"></i>
                Save Profile & Security Changes
            </button>
        </div>
    </form>

</div>
@endsection
