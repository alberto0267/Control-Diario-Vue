<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/prueba', function (Request $request) {
    return response()->json([
        'mensaje' => '¡Funciona la API!'
    ]);
});
