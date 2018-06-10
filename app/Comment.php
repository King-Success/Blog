<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['user_id', 'article_id', 'body'];
    
    public function Article() {
        return $this->belongsTo('App\Article');
    }
}
