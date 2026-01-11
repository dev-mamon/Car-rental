<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarPoliceDocument extends Model
{
    protected $fillable = [
        'car_id', 'registration_number', 'chassis_number',
        'engine_number', 'tax_token_expiry', 'fitness_expiry',
    ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
