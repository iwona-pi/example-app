import React, { Component } from 'react';
/* Stateless component or pure component 
* { product } syntax is the object destructing 
*/
const Product = ({product, handleDelete}) => {
   
  const divStyle = {
      /*code omitted for brevity */
  }
  //if the props product is null, return Product doesn't exist 
  if(!product) {
    return(<div style={divStyle}>  Product Doesnt exist </div>); 
  }
    
  //Else, display the product data 
  return(  
    <div style={divStyle}> 
      <h2> {product.categories1} </h2> 
      <p> {product.description} </p> 
      <h3> Status: {product.availability ? 'Dostępny' : 'Niedostępny'} </h3> 
      <h3> Cena : {product.price} </h3> 
      <h2>Usuń produkt</h2><form onSubmit={handleDelete}>
                   
                    
                    <input type="submit" value="Usuń" />
                </form> 
    </div> 
  )
}
export default Product ;