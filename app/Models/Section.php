<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = [
        'key',
        'name',
        'type',
        'title',
        'subtitle',
        'content',
        'order_column',
        'is_enabled',
        'settings_json',
    ];

    protected $casts = [
        'is_enabled' => 'boolean',
        'settings_json' => 'array',
    ];
}
