import React, { Component } from "react";
import "./../App.css";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import PercentageList from "./PercentageList";
import Footer from "./Footer";
import sseLogo from "./../sseLogo.png";
import { Link } from "react-router-dom";

class Sse extends Component {
  state = {
    companies: []
  }

  componentDidMount() {
    this.getCompanies();
  }

  getCompanies = () => {
    fetch("/Sse/") 
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

    const companyList = companies.length ? (
      companies.map((company) => {
        return(   
              <li key={company.id} className="list-group-item list-group-item-action">
                <Link to={"/"+company.short} className="PercentageNavText">
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
         <h1 className="offset-md-0 mt-5 mb-5">Sanghai Stock Exhange (SSE)</h1>  

          <div className="row mt-5">
            <img src={sseLogo} className="image-fluid offset-md-1"></img>

            <ul className="list-group col-md-4 offset-md-2 mb-5">
             {companyList}
           </ul>
          </div>
        </div>
        <Footer />
       </div>
    )
  }
}

export default Sse;