import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

class SpyNav extends Component {
    state = {
        stockData: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {   
        const pointer = this;

        let stockValue = [];

        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=Z6HATD4T6MQOJOPS")
        .then(response => {
            return response.json();
        })

        .then(data => {
            for(let key in data["Time Series (Daily)"]) {
                stockValue.push(data["Time Series (Daily)"][key]["1. open"]);
            }

            pointer.setState ({
                stockData: stockValue
            })
        })

        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const { stockData } = this.state;

        if (stockData[0] > stockData[1]) {

            let increase = stockData[0] - stockData[1];

            let increasedPercentage = increase / stockData[1] * 100;

            return(
                <div className="list-group-item rounded-0">
                 <Link to="/SpyEtf">
                  <h5 className="PercentageNavText">SPY S&P 500</h5>
                  </Link>
                  <h5 className="text-success">+{increasedPercentage}%</h5>
                </div>
            )
        } else if (stockData[0] === stockData[1]) {        
            return(
                <div className="list-group-item rounded-0">
                 <Link to="SpyEtf"> 
                  <h5 className="PercentageNavText">SPY S&P 500</h5>
                  </Link>  
                  <h5 className="text-warning">0.00%</h5>
                </div>
            )
        } else {

            let decrease = stockData[1] - stockData[0]

            let decreasedPercentage = decrease / stockData[0] * 100;

            return(
                <div className="list-group-item rounded-0">
                 <Link to="SpyEtf"> 
                  <h5 className="PercentageNavText">SPY S&P 500</h5>
                  </Link>  
                  <h5 className="text-danger">-{decreasedPercentage}%</h5>
                </div>
            )
        }
      
    }
}

export default SpyNav;