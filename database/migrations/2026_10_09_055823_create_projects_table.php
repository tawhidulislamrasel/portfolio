<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('tagline')->nullable();
            $table->string('category')->default('SaaS');
            $table->text('summary')->nullable();
            $table->text('problem_statement')->nullable();
            $table->text('solution')->nullable();
            $table->text('architecture_description')->nullable();
            $table->json('tech_stack_json')->nullable();
            $table->string('role_description')->nullable();
            $table->string('cover_image')->nullable();
            $table->json('gallery_json')->nullable();
            $table->string('demo_url')->nullable();
            $table->string('repo_url')->nullable();
            $table->boolean('is_featured')->default(true);
            $table->boolean('is_confidential')->default(false);
            $table->string('status')->default('published');
            $table->integer('order_column')->default(0);
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
