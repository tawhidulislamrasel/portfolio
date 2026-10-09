<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();

if (isset($_SERVER['VERCEL']) || isset($_ENV['VERCEL']) || getenv('VERCEL')) {
    $tmpStorage = '/tmp/storage';
    if (!is_dir($tmpStorage)) {
        @mkdir($tmpStorage, 0755, true);
        @mkdir($tmpStorage.'/framework/views', 0755, true);
        @mkdir($tmpStorage.'/framework/sessions', 0755, true);
        @mkdir($tmpStorage.'/framework/cache', 0755, true);
        @mkdir($tmpStorage.'/framework/cache/data', 0755, true);
        @mkdir($tmpStorage.'/logs', 0755, true);
    }
    $app->useStoragePath($tmpStorage);
}

return $app;
