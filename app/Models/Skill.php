<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'name',
        'proficiency_percentage',
        'icon',
        'is_featured',
        'order_column',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'proficiency_percentage' => 'integer',
        'order_column' => 'integer',
    ];
}
