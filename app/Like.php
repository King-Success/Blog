<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    protected $fillable = ['article_id', 'count'];
    
    public function Article() {
        return $this->belongsTo('App\Article');
    }
}
