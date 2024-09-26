<?php

use Illuminate\Support\Facades\Route;

Route::view('/{path?}', 'app')->where('path', '.*');

require __DIR__.'/auth.php';
