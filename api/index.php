<?php

// 1. Set VERCEL environment flag
putenv('VERCEL=1');
$_ENV['VERCEL'] = '1';
$_SERVER['VERCEL'] = '1';

// 2. Prepare required writable /tmp directory structure for Vercel Lambda environment
$tmpStorage = '/tmp/storage';
$directories = [
    $tmpStorage,
    $tmpStorage . '/framework',
    $tmpStorage . '/framework/views',
    $tmpStorage . '/framework/sessions',
    $tmpStorage . '/framework/cache',
    $tmpStorage . '/framework/cache/data',
    $tmpStorage . '/logs',
    $tmpStorage . '/app',
    $tmpStorage . '/app/public',
];

foreach ($directories as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0755, true);
    }
}

// 3. Prepare SQLite Database in /tmp
$tmpDb = '/tmp/database.sqlite';
$sourceDb = __DIR__ . '/../database/database.sqlite';
if (!file_exists($tmpDb) || filesize($tmpDb) === 0) {
    if (file_exists($sourceDb) && filesize($sourceDb) > 0) {
        @copy($sourceDb, $tmpDb);
    } else {
        @touch($tmpDb);
    }
}

// 4. Set Essential Vercel Serverless Environment Variables
$envVars = [
    'APP_KEY' => getenv('APP_KEY') ?: 'base64:pFt8202m8C+z3iaeg0u2ts0+GQRua3nVhN0SGqVWeQc=',
    'APP_ENV' => getenv('APP_ENV') ?: 'production',
    'APP_DEBUG' => getenv('APP_DEBUG') ?: 'true',
    'VIEW_COMPILED_PATH' => $tmpStorage . '/framework/views',
    'APP_SERVICES_CACHE' => $tmpStorage . '/services.php',
    'APP_PACKAGES_CACHE' => $tmpStorage . '/packages.php',
    'APP_CONFIG_CACHE' => $tmpStorage . '/config.php',
    'APP_ROUTES_CACHE' => $tmpStorage . '/routes.php',
    'APP_EVENTS_CACHE' => $tmpStorage . '/events.php',
    'DB_CONNECTION' => 'sqlite',
    'DB_DATABASE' => $tmpDb,
    'LOG_CHANNEL' => 'stderr',
    'SESSION_DRIVER' => 'cookie',
];

foreach ($envVars as $key => $value) {
    putenv("{$key}={$value}");
    $_ENV[$key] = $value;
    $_SERVER[$key] = $value;
}

// 5. Forward to Laravel front controller
require __DIR__ . '/../public/index.php';
