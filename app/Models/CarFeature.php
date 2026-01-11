<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarFeature extends Model
{
    protected $fillable = ['car_id', 'feature_name'];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
