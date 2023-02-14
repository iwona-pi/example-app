import React, { Component } from 'react'
import Result from './Result'


class Search extends Component {
  state = {
    results: [],
    query: '',
    books: []
  }

  handleSearch = (a) => {
      this.setState(
        {query: a},
        () => {
          if (this.state.query && this.state.query.length > 0) {
              this.searchProduct(a);
             
          } else {
            this.setState({results: []})
          }
        })
      
  }
 searchProduct = (query) => {
	let adres
	adres = '/api/search/' + query
	fetch(adres)
        .then(response => {
			console.log(adres);
            return response.json();
        })
        .then(list => {
            //Fetched product is stored in the state 
            this.setState({results: list})
			//, 
			//()=>{
			//this.setState({category: list[3]})})
			
        });
    }


  
    
    render () {
        const { handleClick } = this.props
        
         return (
          <div className="search-books">
            <div className="search-books-bar">
              
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search"
                onChange={(event) => {this.handleSearch(event.target.value)}}
                />

              </div>
            </div>
              <div>
              <ul>
               
					{this.state.results.map(product=>(
					<li key={product.id} onClick={() =>handleClick(product)} >
                    
					{ product.description }
                </li> ))}
              </ul> 
			 
        </div>        
           
    
          </div>
    )
}}

export default Search;