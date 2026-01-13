<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user->isAdmin()) {
            return Inertia::render('Admin/Dashboard');
        }
        // Default user dashboard
        return Inertia::render('Admin/Dashboard');
    }
}
