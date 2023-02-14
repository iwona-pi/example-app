<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use App\Models\Product;
use Illuminate\Support\Str;

class UpdateCategories extends Seeder
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
        $faker = \Faker\Factory::create();
		
		
		
		DB::table('products')->update([
            'categories1' =>Str::random(10),
			        ]);
		}
}
