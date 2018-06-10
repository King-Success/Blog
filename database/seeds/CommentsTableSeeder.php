<?php

use Illuminate\Database\Seeder;
use App\Comment;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Comment::truncate();
        $faker = \Faker\Factory::create();

        for($i = 0; $i < 50; $i++) {
            Comment::create([
                'body' => $faker->sentence,
                'user_id' => $faker->numberBetween($min = 1, $max = 50),
                'article_id' => $faker->numberBetween($min = 1, $max = 50),
            ]);
        }
    }
}
