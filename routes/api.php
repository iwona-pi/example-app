<?php

use App\Http\Controllers\ProductsController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::get('/products/{id}', function ($id) {
    //
//})->whereUlid('id');
Route::get('products', [ProductsController::class, 'index']);
//Route::get('products/av/{availability}', [ProductsController::class, 'a']);
Route::get('products/{product}', [ProductsController::class, 'show']);
Route::post('products', [ProductsController::class, 'store']);
Route::put('products/{product}',[ProductsController::class, 'update']);
Route::delete('products/{product}', [ProductsController::class, 'delete']);
Route::get('categories', [ProductsController::class, 'cat']);
Route::get('category/{category}', [ProductsController::class, 'result']);
Route::get('search/{key}', [ProductsController::class, 'search']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
