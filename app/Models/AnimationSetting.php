<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AnimationSetting extends Model
{
    use HasFactory;

    protected $fillable = ['key', 'value', 'label'];

    public static function getValue(string $key, ?string $default = null): ?string
    {
        $setting = static::where('key', $key)->first();

        return $setting ? $setting->value : $default;
    }

    public static function setValue(string $key, ?string $value, ?string $label = null): void
    {
        static::updateOrCreate(
            ['key' => $key],
            ['value' => $value, 'label' => $label]
        );
    }
}
