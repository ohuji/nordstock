import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

class UsdNav extends Component {
    state = {
        currencyData: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {   
        const pointer = this;

        let currencyValue = [];

        fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=USD&to_symbol=EUR&apikey=WF9H64N6MXWBW9AJ")
        .then(response => {
            return response.json();
        })

        .then(data => {
            for(let key in data["Time Series FX (Daily)"]) {
                currencyValue.push(data["Time Series FX (Daily)"][key]["1. open"]);
            }

            pointer.setState ({
                currencyData: currencyValue
            })
        })

        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { currencyData } = this.state;

        if (currencyData[0] > currencyData[1]) {

            let increase = currencyData[0] - currencyData[1];

            let increasedPercentage = increase / currencyData[1] * 100;

            return(
                <div className="list-group-item NavList">
                 <Link className="NavLink" to="/Usd">
                  <h5 className="linkSize">United States Dollar</h5>
                  </Link>
                  <h5 className="text-success">+{increasedPercentage}%</h5>
                </div>
            )
        } else if (currencyData[0] === currencyData[1]) {        
            return(
                <div className="list-group-item NavList">
                 <Link className="NavLink" to="Usd"> 
                  <h5 className="linkSize">United States Dollar</h5>
                  </Link>  
                  <h5 className="text-warning">0.00%</h5>
                </div>
            )
        } else {

            let decrease = currencyData[1] - currencyData[0]

            let decreasedPercentage = decrease / currencyData[0] * 100;

            return(
                <div className="list-group-item NavList">
                 <Link className="NavLink" to="Usd"> 
                  <h5 className="linkSize">United States Dollar</h5>
                  </Link>  
                  <h5 className="text-danger">-{decreasedPercentage}%</h5>
                </div>
            )
        }
      
    }
}

export default UsdNav;