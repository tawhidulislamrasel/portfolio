@extends('layouts.admin')

@section('title', 'Edit Education')

@section('content')
<div class="max-w-2xl space-y-8">

    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-xl font-bold text-white">Edit Education Record</h1>
        </div>
        <a href="{{ route('admin.educations.index') }}" class="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold">Back</a>
    </div>

    <form action="{{ route('admin.educations.update', $education) }}" method="POST" class="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 space-y-6">
        @csrf
        @method('PUT')

        <div>
            <label for="institution" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">University / Institution</label>
            <input type="text" name="institution" id="institution" value="{{ old('institution', $education->institution) }}" required
                class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="degree" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Degree</label>
                <input type="text" name="degree" id="degree" value="{{ old('degree', $education->degree) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="field_of_study" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Field of Study</label>
                <input type="text" name="field_of_study" id="field_of_study" value="{{ old('field_of_study', $education->field_of_study) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label for="start_date" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Start Date</label>
                <input type="text" name="start_date" id="start_date" value="{{ old('start_date', $education->start_date) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="end_date" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">End Date</label>
                <input type="text" name="end_date" id="end_date" value="{{ old('end_date', $education->end_date) }}"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>

            <div>
                <label for="order_column" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Order</label>
                <input type="number" name="order_column" id="order_column" value="{{ old('order_column', $education->order_column) }}" required
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">
            </div>
        </div>

        <div>
            <label for="summary" class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Summary / Honors</label>
            <textarea name="summary" id="summary" rows="3"
                class="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm">{{ old('summary', $education->summary) }}</textarea>
        </div>

        <div class="pt-4 flex justify-end">
            <button type="submit" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-white text-sm">Update Education</button>
        </div>
    </form>

</div>
@endsection
