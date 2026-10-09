<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'author_name',
        'author_title',
        'company',
        'quote',
        'avatar',
        'rating',
        'order_column',
        'is_published',
    ];

    protected $casts = [
        'rating' => 'integer',
        'order_column' => 'integer',
        'is_published' => 'boolean',
    ];
}
