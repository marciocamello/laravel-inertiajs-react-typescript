<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookmarkController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::group(['middleware' => 'auth'], function() {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmarks.index');
});
