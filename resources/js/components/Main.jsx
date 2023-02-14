import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Result from './Result';
import Search from './Search';
import Product from './Product';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
//import React, { useState, useEffect } from 'react';
//import React from 'react'


class Main extends Component {
	//const [list, setList] = useState([]);  
	//const [view, setView] = useState([]);
		state = {
			list: [],
			category: '' ,
			products: [],
			currentProduct: null
		}	
		//}
		
		view =(item)=>{
		this.setState({category: item});
		this.getProducts(item);
		}
    // Call this function to get products data 
	componentDidMount()
    {
        /* fetch API in action */
        fetch('/api/categories/')
        .then(response => {
            return response.json();
        })
        .then(list => {
            //Fetched product is stored in the state 
            this.setState({list}, ()=>{
			this.setState({category: list[3]})})
			
        });
    }
	
	    renderList = () => {
        return this.state.list.map(item => {
            return (
                /* When using list you need to specify a key 
* attribute that is unique for each list item 
*/
		<li key={item.categories1} onClick={()=>this.view(item)}>
                    { item.categories1 } 
					
                </li> 
            );
        })
    }

	getProducts = (item) =>{
    
        /* fetch API in action */
		let adres
		adres = '/api/category/' + item.categories1
        fetch(adres)
        .then(response => {
			console.log(adres);
            return response.json();
			
        })
        .then(products => {
            //Fetched product is stored in the state 
           this.setState({products})
        });
    };
	
	  handleClick=(product)=> {

      //handleClick is used to set the state
      this.setState({currentProduct:product}); 
  }
 handleDelete=()=> {
    const delProduct = this.state.currentProduct
    fetch( 'api/products/' + delProduct.id, 
        { method: 'delete',
		headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(response => {
        return response.json();
    })		
        .then(data => {
          /* Duplicate the array and filter out the item to be deleted */
		  
          var newItems = this.state.products.filter(function(item) {
          return item !== delProduct
        });             
        
        //setProducts(newItems)
        //setCurrentProduct(null)
		this.setState(()=> ({
            products: newItems,
            currentProduct : null
        }))
    });
  }
     handleAddProduct=(product)=> {
     
    product.price = Number(product.price);
    /*Fetch API for post request */
    fetch( 'api/products/', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(product)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
       
        this.setState((prevState)=> ({
            products: prevState.products.concat(data),
            currentProduct : data
        }))
    })
 //update the state of products and currentProduct
  }
	handleUpdate=(product)=> {
    const updProduct = this.state.currentProduct;
    fetch( 'api/products/' + updProduct.id, {
        method:'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
        /* Updating the state */
        var updItems = this.state.products.filter(function(item) {
			console.log(updItems);
          return item !== updProduct
        })               
        this.setState(()=> ({
            products: updItems.concat(data),
            currentProduct : data
        }))
        
    }) 
  }
	render (){
		
		return(
		<div>
		<div><h2>Wybierz kategorię:</h2></div>
			<div>
				<ul>
					{this.renderList()}
				</ul>
				{this.state.category ? <Result products={this.state.products}
				handleClick = {this.handleClick}/>:null}
				<Search handleClick = {this.handleClick}
						product={this.state.currentProduct}/>
				{this.state.currentProduct ?<Product product={this.state.currentProduct} 
				handleDelete={this.handleDelete}/>:null}
				<AddProduct onAdd={this.handleAddProduct} />
				{this.state.currentProduct?<UpdateProduct onAdd={this.handleUpdate} />:null}
			</div>
		</div>	
		);
	}

    
}



export default Main