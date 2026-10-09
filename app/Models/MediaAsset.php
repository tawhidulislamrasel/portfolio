<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaAsset extends Model
{
    use HasFactory;

    protected $fillable = [
        'filename',
        'original_name',
        'mime_type',
        'file_path',
        'file_size',
        'alt_text',
    ];

    protected $casts = [
        'file_size' => 'integer',
    ];
}
