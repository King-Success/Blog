<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = ['category_Id', 'title', 'body'];


    public function category() {
        return $this->belongsTo('App\Category');
    }

    public function comments() {
        return $this->hasMany('App\Comment');
    }

    public function likes() {
        return $this->hasOne('App\Like');
    }

}
