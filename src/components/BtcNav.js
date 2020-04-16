import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

class BtcNav extends Component {
    state = {
        currencyData: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {   
        const pointer = this;

        let currencyValue = [];

        fetch("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=EUR&apikey=WF9H64N6MXWBW9AJ")
        .then(response => {
            return response.json();
        })

        .then(data => {
            for(let key in data["Time Series (Digital Currency Daily)"]) {
                currencyValue.push(data["Time Series (Digital Currency Daily)"][key]["1a. open (EUR)"]);
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
                <div className="list-group-item">
                 <Link to="/Btc">
                  <h5 className="PercentageNavText">Bitcoin</h5>
                  </Link>
                  <h5 className="text-success">+{increasedPercentage}%</h5>
                </div>
            )
        } else if (currencyData[0] === currencyData[1]) {        
            return(
                <div className="list-group-item">
                 <Link to="Btc"> 
                  <h5 className="PercentageNavText">Bitcoin</h5>
                  </Link>  
                  <h5 className="text-warning">0.00%</h5>
                </div>
            )
        } else {

            let decrease = currencyData[1] - currencyData[0]

            let decreasedPercentage = decrease / currencyData[0] * 100;

            return(
                <div className="list-group-item">
                 <Link to="Btc"> 
                  <h5 className="PercentageNavText">Bitcoin</h5>
                  </Link>  
                  <h5 className="text-danger">-{decreasedPercentage}%</h5>
                </div>
            )
        }
      
    }
}

export default BtcNav;