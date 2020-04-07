import React, { Component } from "react";
import Plot from "react-plotly.js";

class Apple extends Component {
    state = {
        Xaxis: [],
        Yaxis: []
    }

    componentDidMount(){
        this.getChartData();
    }

    getChartData = () => {

        const pointer = this;

        let Yvalue = [];
        let Xvalue = [];

       fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&interval=1min&apikey=WF9H64N6MXWBW9AJ")
       .then(function(response) {
           return response.json();
       })
       .then(
           function(data) {
               console.log(data)

               for (let key in data["Time Series (Daily)"]) {
                Yvalue.push(data["Time Series (Daily)"][key]["1. open"]);
                Xvalue.push(key);
              }
       
               pointer.setState({
                   Yaxis : Yvalue,
                   Xaxis : Xvalue
               })

           }
       )
       .catch(
           function(error){
               console.log(error)
           }
       )
    }  

    render(){
      const { Xaxis, Yaxis } = this.state
      console.log(this.state)
        return(
         <div>
            <Plot data={[ {
                x: Xaxis,
                y: Yaxis,
                type: "scatter",
                mode: "lines+markers",
                marker: {color: "red"},
            }
            ]}
            layout={{width: 720, height: 440, title: "Apple osake"}}/>

             
         </div>
        )
    }

}

export default Apple;