import React, { Component } from "react";
import "./../App.css";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import PercentageList from "./PercentageList";
import Footer from "./Footer";
import fraLogo from "./../Frankfurtexhange.png";
import { Link } from "react-router-dom";

class Fra extends Component {
  state = {
    companies: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch("/fra/") 
    .then(response => {
      return response.json()
    })

    .then(response => {
      this.setState({ companies: response.data })
    })

    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { companies } = this.state;

    let time = new Date().toLocaleString();

    const companyList = companies.length ? (
      companies.map((company) => {
        return(   
              <li key={company.id} className="list-group-item list-group-item-action">
                <Link to={"/"+company.short} className="linkSize Link">
                 {company.name+" ("+company.short+")"}
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
         <h1 className="offset-md-0 mt-5 mb-5">Frankfurt Stock exhange (FRA)</h1>  

          <div className="row mt-5">
            <img src={fraLogo} className="image-fluid offset-md-1"></img>

            <ul className="list-group col-md-4 offset-md-2 mb-5">

            <div className="DateBackground mb-5 rounded-pill">  
            <h6 className="mt-3">Franfurtin pörssi on auki 10:00 - 18:30 (UTC +3) välisenä aikana</h6>
            <h6>Tämän hetkinen päivänmäärä ja kellon aikasi on:</h6>
            <h5 className="mb-3">{time}</h5>
            </div>

            <h3 className="mb-3">Osakkeet:</h3>
             {companyList}
           </ul>
          </div>
        </div>
        <Footer />
       </div>
    )
  }
}

export default Fra;