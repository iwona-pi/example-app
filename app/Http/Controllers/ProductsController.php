<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
//use App\Product;

class ProductsController extends Controller
{
   public function index()
	{
	    return Product::all();
	}
	public function show(Product $product)
	{
	    return $product;
	}
	public function store(Request $request)
	{
	    $product = Product::create($request->all());
	    return response()->json($product, 201);
	}
	public function update(Request $request, Product $product)
	{
	    $product->update($request->all());
	    return response()->json($product, 200);
	}
	public function delete(Product $product)
	{
	    $product->delete();
	    return response()->json(null, 204);
	}
	
	public function a()
	{
		$users = DB::table('products')
                ->where('availability', '=', 0)
                
                ->get();
				
				//return view( 'welcome', ['products' => $users]);
				return $users;
	}
	public function cat() {
		$categories = DB::table('products')
				->selectRaw('categories1')
				->groupBy('categories1')
				->get();
				
				return $categories;			
	}
	public function result($category) {
		$result = DB::table('products')
				->where('categories1', '=', "$category")
				->get();
				
				return $result;
	}
	
	public function search($key){
		$results = DB::table('products')
				//->where('categories1', '=', 'komputery')
                ->where('description', 'like', "%$key%")
                ->get();
		
		return $results;
	}

}
