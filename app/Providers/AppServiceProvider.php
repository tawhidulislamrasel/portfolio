<?php

namespace App\Providers;

use App\Models\Setting;
use App\Models\ThemeSetting;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        View::composer('*', function ($view) {
            try {
                if (Schema::hasTable('settings')) {
                    $globalSettings = Setting::pluck('value', 'key')->all();
                    $view->with('globalSettings', $globalSettings);
                }
                if (Schema::hasTable('theme_settings')) {
                    $globalTheme = ThemeSetting::pluck('value', 'key')->all();
                    $view->with('globalTheme', $globalTheme);
                }
            } catch (\Exception $e) {
                // Database or table not ready during build/migration
            }
        });
    }
}
