<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('car_police_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')->constrained()->onDelete('cascade');
            $table->string('registration_number')->unique();
            $table->string('chassis_number')->unique();
            $table->string('engine_number')->unique();
            $table->date('tax_token_expiry');
            $table->date('fitness_expiry');
            $table->string('document_file_path')->nullable(); // PDF or image scan
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_police_documents');
    }
};
