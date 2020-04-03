import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Routes from "./Routes";
import App from "../App";

class Navbar extends Component {       
  state = {
    searchResults: []
}

componentDidMount(){
   this.getSearchResults();
}

getSearchResults = () => {
   fetch("/search/")
   .then(response => response.json())
   .then(response => this.setState({ searchResults: response.data }))
   .catch(error => console.log(error))
}

handleChange = (e) => {
 // const change = event.target.value;
  //this.setState({name: change});
}
      render(){
        return(
            <nav className="navbar">
    
                <a className="navbar-brand"><Link to="/">Logo</Link></a>  
                <form className="form-inline mx-auto ">
                    <div className="input-field col-md-12">
                       <input
                        className="form-control mr-sm-1 " 
                        type="search" placeholder="search" 
                        value={this.state.name}/>
                      <button className="btn my-sm my-sm-0" 
                      type="submit">Search</button>
                    </div>
                </form>   
               
            </nav>
        )
        }
}

export default Navbar;
