<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookmarkController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function() {
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmarks.index');
    Route::get('/bookmarks/add', [BookmarkController::class, 'add'])->name('bookmarks.add');
    Route::get('/bookmarks/view/{bookmark}', [BookmarkController::class, 'view'])->name('bookmarks.view');
    Route::post('/bookmarks/preview', [BookmarkController::class, 'getPreviewData'])->name('bookmarks.preview');
    Route::post('/bookmarks/make-active', [BookmarkController::class, 'makeActive'])->name('bookmarks.active');
});
