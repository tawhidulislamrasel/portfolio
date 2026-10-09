<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'excerpt',
        'content',
        'cover_image',
        'category',
        'tags_json',
        'status',
        'published_at',
        'order_column',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'tags_json' => 'array',
        'published_at' => 'datetime',
        'order_column' => 'integer',
    ];
}
