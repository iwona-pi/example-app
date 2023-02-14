import React, { useState } from 'react'

const UpdateProduct = (props) => {
    const [newProduct, setNewProduct] = 
        useState(
            {
                categories1:"", 
                description: "", 
                price: 0, 
                availability: 0
            }
        );
    
    const handleInput = (key, e) => {
        /*Duplicating and updating the state */
        var newState = Object.assign({}, newProduct); 
        newState[key] = e.target.value;
        setNewProduct(newState);
    };
    const handleSubmit = (e) => {
        //preventDefault prevents page reload 
        e.preventDefault();
        /*A call back to the onAdd props. The current 
*state is passed as a param 
*/
        props.onAdd(newProduct);
    };
            
    return(
        <div> 
            <h2> Edytuj produkt </h2> 
         
			<div>
                <form onSubmit={handleSubmit}>
                    <label> Kategoria: 
                    { /*On every keystroke, the handeInput method is invoked */ }
                        <input type="text" onChange={(e)=>handleInput('categories1',e)} /> 
                    </label> 
                    
                    <label> Opis: 
                        <input type="text" onChange={(e)=>handleInput('description',e)} /> 
                    </label> 
                    <label> Cena: 
                        <input type="text" onChange={(e)=>handleInput('price',e)} /> 
                    </label>
					<label> Dostępność: 
                        <input type="text" onChange={(e)=>handleInput('availability',e)} /> 
                    </label>
                    { /* Input fields for Price and availability omitted for brevity */}
                    <input type="submit" value="Wyślij" />
                </form> 
            </div> 
        </div> 
    )
}
export default UpdateProduct