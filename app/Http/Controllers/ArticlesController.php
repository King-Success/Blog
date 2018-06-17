<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticlesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Article::select('id', 'title', 'created_at', 'category_id')->with('category')->get()->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $article = new Article;
        $article->category_id = $request['category_id'];
        $article->title = $request['title'];
        $article->body = $request['body'];
        
        $article->save();
        return response()->json($article, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        // return $article->load('category');
        // This blunder is simply because react refuses to access property of object in object contained inside this.props
        $category = $article->category()->get();
        $category[0]->name;
        $article = [
             "id" => $article->id,
            "title" => $article->title, 
            "body" => $article->body, 
            "category" => $category[0]->name,
            // "created_at" => $article->created_at->format('M d, Y'), 
            // "updated_at" => $article->updated_at
        ];
        

        // $article = response()->json($article, 200);
           return $article;
        
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $article->update($request->all());
        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article->delete();
        return response()->json(null, 204);
    }

    /**
     * Returns chunks of articles from storage.
     *
     * @param  int  $articlesCount
     * @return \Illuminate\Http\Response
     */
    public function paginate($articlesCount = 6) {
        return Article::with('category')->paginate($articlesCount);

    }
}
