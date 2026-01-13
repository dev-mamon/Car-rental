<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarImage extends Model
{
    protected $fillable = ['car_id', 'file_path', 'thumbnail_path'];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
