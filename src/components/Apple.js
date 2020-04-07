import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Footer from "./Footer";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import { Link } from "react-router-dom";
const Plot = createPlotlyComponent(Plotly);

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
       .then(response => {
           return response.json();
       })
       .then(data => {
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
       .catch(error => {
               console.log(error)
           }
       )
    }  

    render(){
      const { Xaxis, Yaxis } = this.state
      console.log(this.state)
        return(

         <div>     
           <Navbartwo />
         <div className="container-fluid">

           <h1 className="mt-4">Apple osake (AAPL)</h1>
            <div className="row">

            <Categories/>

             <Plot
             className="mb-4"
             data={[{
             x: Xaxis,
             y: Yaxis,
             type: 'scatter',
             mode: 'lines+markers',
             marker: {color: 'blue'},
           },
         ]}
          layout={ {width: 950, height: 706} }/>    
          </div>
         </div>
          <Footer />            
        </div>
        )
    }
}

export default Apple;