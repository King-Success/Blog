<?php

use Illuminate\Database\Seeder;
use App\Like;

class LikesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         Like::truncate();
        $faker = \Faker\Factory::create();

        for($i = 0; $i < 50; $i++) {
            Like::create([
                'count' => $faker->randomDigitNotNull,
                'article_id' => $faker->numberBetween($min=1, $max=50),
            ]);
        }
    }
}
