<?php

// 1. Enable full error reporting & display for debugging Vercel deployments
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

// 2. Set VERCEL environment flag
putenv('VERCEL=1');
$_ENV['VERCEL'] = '1';
$_SERVER['VERCEL'] = '1';

// 3. Check if vendor/autoload.php exists
if (!file_exists(__DIR__ . '/../vendor/autoload.php')) {
    http_response_code(500);
    echo "<h1>Vercel Deployment Error</h1>";
    echo "<p>The <code>vendor/autoload.php</code> file was not found. Composer dependencies were not installed during build.</p>";
    exit(1);
}

// 4. Prepare required writable /tmp directory structure for Vercel Lambda environment
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

// 5. Prepare SQLite Database in /tmp
$tmpDb = '/tmp/database.sqlite';
$sourceDb = __DIR__ . '/../database/database.sqlite';
if (!file_exists($tmpDb) || filesize($tmpDb) === 0) {
    if (file_exists($sourceDb) && filesize($sourceDb) > 0) {
        @copy($sourceDb, $tmpDb);
    } else {
        @touch($tmpDb);
    }
}

// 6. Set Essential Vercel Serverless Environment Variables
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

// 7. Forward request to Laravel front controller with Exception boundary
try {
    require __DIR__ . '/../public/index.php';
} catch (\Throwable $e) {
    http_response_code(500);
    echo "<h1>Unhandled Application Exception</h1>";
    echo "<p><strong>Message:</strong> " . htmlspecialchars($e->getMessage()) . "</p>";
    echo "<p><strong>File:</strong> " . htmlspecialchars($e->getFile()) . " line " . $e->getLine() . "</p>";
    echo "<pre>" . htmlspecialchars($e->getTraceAsString()) . "</pre>";
}
