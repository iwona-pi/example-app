<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		
		$categories = [
			'gry planszowe',
			'samochody elektryczne',
			'komputery',
			'zabawki',
			'telewizory'
];

//[
    //'product_name' => $products[rand(0, count($products) - 1)]
//]
      $faker = \Faker\Factory::create();
        // Create 50 product records 
        for ($i = 0; $i < 50; $i++) {
            Product::create([
                'title' => $faker->title,
				'categories' => $categories[rand(0, count($products) - 1)],
                'description' => $faker->paragraph,
                'price' => $faker->randomNumber(2),
                'availability' => $faker->boolean(50)
            ]);
        }
    }
}
