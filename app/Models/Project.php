<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'tagline',
        'category',
        'summary',
        'problem_statement',
        'solution',
        'architecture_description',
        'tech_stack_json',
        'role_description',
        'cover_image',
        'gallery_json',
        'demo_url',
        'repo_url',
        'is_featured',
        'is_confidential',
        'status',
        'order_column',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'tech_stack_json' => 'array',
        'gallery_json' => 'array',
        'is_featured' => 'boolean',
        'is_confidential' => 'boolean',
        'order_column' => 'integer',
    ];
}
