<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'metric_value',
        'description',
        'date',
        'is_featured',
        'order_column',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'order_column' => 'integer',
    ];
}
