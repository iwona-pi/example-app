import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Search from './Search';

class Result extends Component {
    // Sets initial state for products to empty array 
      
			
    // Call this function to get products data 
	
    /*useEffect is a lifecycle hook 
* that gets called after the component is rendered 
*/
  
	
	render () {
		
		const {products, handleClick} = this.props
    return(
        <div>
              <ul>
               
					{products.map(product=>(
					<li key={product.id} onClick={() =>handleClick(product)} >
                    
					{ product.description }
                </li> ))}
              </ul> 
			 
        </div> 
    )
}}
export default Result