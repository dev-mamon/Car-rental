<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Sedan',
            'SUV',
            'Crossover',
            'Hatchback',
            'Coupe',
            'Convertible',
            'Wagon',
            'Pickup Truck',
            'Microbus',
            'Minivan',
            'Van',
            'Sports Car',
            'Luxury Car',
            'Electric Vehicle',
            'Hybrid Vehicle',
            'Diesel Vehicle',
            'Off-Road Vehicle',
            'Commercial Vehicle',
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['name' => $category],
                [
                    'slug' => Str::slug($category),
                    'description' => $category.' type vehicle',
                ]
            );
        }
    }
}
