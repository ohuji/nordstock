import React, { Component } from "react";

class IBM extends Component {
    state = {
        chartData: []
    }

    getChartData = () => {
        fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=1min&apikey=WF9H64N6MXWBW9AJ")
        .then(response => this.setState({ chartData: response.data }))
        .catch(error => console.log(error))
    }
   
    

    render(){
        return(
         <div>

         </div>
        )
    }

}