<?php

use Illuminate\Http\Request;
use App\Article;
use App\Http\Controllers\ArticlesController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('articles/paginate', 'ArticlesController@paginate');
Route::get('articles', 'ArticlesController@index');
Route::get('articles/{article}', 'ArticlesController@show');
Route::post('articles', 'ArticlesController@store');
Route::put('articles/{article}', 'ArticlesController@update');
Route::delete('articles/{article}', 'ArticlesController@destroy');
// Route::get('articles/paginate', 'ArticlesController@paginate');



