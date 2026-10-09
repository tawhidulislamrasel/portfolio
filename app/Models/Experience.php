<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'company',
        'role',
        'location',
        'employment_type',
        'start_date',
        'end_date',
        'is_current',
        'description',
        'achievements_json',
        'order_column',
    ];

    protected $casts = [
        'is_current' => 'boolean',
        'achievements_json' => 'array',
        'order_column' => 'integer',
    ];
}
