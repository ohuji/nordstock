import React, { Component } from "react";
import "./../App.css";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import PercentageList from "./PercentageList";
import Footer from "./Footer";
import etfLogo from "./../etf.png";
import { Link } from "react-router-dom";

class Etf extends Component {
  state = {
    etfs: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch("/etf/") 
    .then(response => {
      return response.json()
    })

    .then(response => {
      this.setState({ etfs: response.data })
    })

    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { etfs } = this.state;

    const etfList = etfs.length ? (
      etfs.map((etf) => {
        return(   
              <li key={etf.id} className="list-group-item list-group-item-action">
                <Link to={"/"+etf.short} className="linkSize Link">
                 {etf.name+" ("+etf.short+")"}
                </Link>
              </li>
        )
      }) 
    ) : (
      <div>
         <h5>404: Ei löytynyt</h5>
      </div>
    )
    return(
        <div className="background">
          <Navbartwo />
          <Categories />
          <PercentageList />
         <div className="container-fluid">    
         <h1 className="offset-md-0 mt-5 mb-5">Exchange-Traded funds (ETF)</h1>  

          <div className="row mt-5">
            <img src={etfLogo} className="image-fluid offset-md-1"></img>

            <ul className="list-group col-md-4 offset-md-2 mb-5">
            
            <h3 className="mb-3">ETF:ät</h3>
             {etfList}
           </ul>
          </div>
        </div>
        <Footer />
       </div>
    )
  }
}

export default Etf;