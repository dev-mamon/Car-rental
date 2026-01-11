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
        Schema::create('car_specifications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_id')->constrained()->onDelete('cascade');

            // Based on your UI image
            $table->string('transmission');      // Gear Type: Manual/Automatic
            $table->string('mileage');           // 18 KM
            $table->string('fuel_type');        // Petrol
            $table->string('steering');         // Left/Right
            $table->string('model_year');       // 2025
            $table->string('vehicle_type');     //  (Capacity)

            // --  useful fields you had before
            $table->string('engine_capacity')->nullable();
            $table->string('color')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('car_specifications');
    }
};
