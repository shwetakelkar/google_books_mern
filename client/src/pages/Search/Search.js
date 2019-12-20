import React, { Component } from "react";
import API from "../../utils/API";
import {SearchForm, FormBtn} from "../../components/SearchForm"
import SearchResults from "../../components/SearchResults/SearchResults";
import Jumbotron from "../../components/Jumbotron";


class Search extends Component {
  state = {
    search: "",
    results: [],
    
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    API.getBooks(this.state.search)
      .then(res => {
       console.log(res)

        this.setState({ results: res.data.items});
      })
      .catch(err => console.log(err) );
  };
  handleBookSave = (data)=>
  {
    console.log(data)
    //event.preventDefault();
    API.saveBook(data).then(res=>console.log("success")).catch(err=>console.log(err))

  }
  render() {
    return (
      <div>
        <Jumbotron>
          <div className="text-center search-title">
            <h1>Google Books React Search!</h1>
            <h4>Search book title and save it for future!</h4></div></Jumbotron>
        <div className="container">
          
          <SearchForm 
          value={this.state.search}
          onChange={this.handleInputChange}
          name="title"
          placeholder ="Title Search"/>
          
          <FormBtn
            disabled={!(this.state.search)}
            onClick={this.handleFormSubmit}> 
            Search Book
          </FormBtn>
          {this.state.results.length ? <SearchResults results = {this.state.results} handleBookSave={this.handleBookSave} />:(<div/>)}
          
          
        </div>
      </div>
    );
  }
}

export default Search;
