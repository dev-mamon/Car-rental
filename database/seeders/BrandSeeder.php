<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BrandSeeder extends Seeder
{
    public function run(): void
    {
        $brands = [
            'Toyota',
            'Honda',
            'Nissan',
            'Mitsubishi',
            'Suzuki',
            'Hyundai',
            'Kia',
            'Mazda',
            'Subaru',
            'Ford',
            'Chevrolet',
            'BMW',
            'Mercedes-Benz',
            'Audi',
            'Volkswagen',
            'Tesla',
            'Volvo',
            'Lexus',
            'Jeep',
            'Land Rover',
            'Porsche',
            'Ferrari',
            'Lamborghini',
            'Bentley',
            'Rolls Royce',
            'Bugatti',
            'McLaren',
            'Peugeot',
            'Renault',
            'Skoda',
            'Fiat',
            'Chery',
            'BYD',
            'Geely',
            'Great Wall',
            'Tata',
            'Mahindra',
            'Isuzu',
            'Hino',
        ];

        foreach ($brands as $brand) {
            Brand::updateOrCreate(
                ['name' => $brand],
                [
                    'slug' => Str::slug($brand),
                    'is_active' => true,
                ]
            );
        }
    }
}
