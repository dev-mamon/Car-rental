<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CarSpecification extends Model
{
    protected $fillable = [
        'car_id',
        'transmission',
        'mileage',
        'fuel_type',
        'steering',
        'model_year',
        'vehicle_type',
        'engine_capacity',
        'color',
    ];

    /**
     * Get the car that owns the specification.
     */
    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
