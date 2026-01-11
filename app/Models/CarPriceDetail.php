<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CarPriceDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'car_id',
        'daily_rate',
        'weekly_rate',
        'monthly_rate',
        'security_deposit',
        'insurance_fee',
        'late_fee_per_hour',
        'currency',
        'tax_percentage',
    ];

    protected $casts = [
        'daily_rate' => 'decimal:2',
        'weekly_rate' => 'decimal:2',
        'monthly_rate' => 'decimal:2',
        'security_deposit' => 'decimal:2',
        'insurance_fee' => 'decimal:2',
        'late_fee_per_hour' => 'decimal:2',
        'tax_percentage' => 'decimal:2',
    ];

    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
