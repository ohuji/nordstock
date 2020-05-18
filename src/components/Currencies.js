import React, { Component } from "react";
import "./../App.css";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import PercentageList from "./PercentageList";
import Footer from "./Footer";
import currencyLogo from "./../currenciesPic.png";
import { Link } from "react-router-dom";

class Currencies extends Component {
  state = {
    currencies: []
  }

  componentDidMount() {
    this.getCurrencies();
  }

  getCurrencies = () => {
    fetch("/currencies/") 
    .then(response => {
      return response.json()
    })

    .then(response => {
      this.setState({ currencies: response.data })
    })

    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { currencies } = this.state;

    const currencyList = currencies.length ? (
      currencies.map((currency) => {
        return(   
              <li key={currency.id} className="list-group-item list-group-item-action">
                <Link to={"/"+currency.short} className="linkSize Link">
                 {currency.name+" ("+currency.short+")"}
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
         <div className="container-fluid leftAnimation">    
         <h1 className="offset-md-0 mt-5 mb-5">Valuutat</h1>  

          <div className="row">
            <img src={currencyLogo} className="image-fluid offset-md-1"></img>

            <ul className="list-group col-md-4 offset-md-2 mb-5">
            
            <h3 className="mb-3">Valuutat:</h3>
             {currencyList}
           </ul>
          </div>
        </div>
        <Footer />
       </div>
    )
  }
}

export default Currencies;