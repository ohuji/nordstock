import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Footer from "./Footer";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import "./../App.css";

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

       fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=WF9H64N6MXWBW9AJ")
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
           <h1 className="mt-4 offset-md-1">Apple osake (NASDAQ: AAPL)</h1>
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
          layout={{width: 1050, height: 706}}/>    

         <div>  
          <h4>Tämän hetkinen hinta:</h4>
          <h2 className="text-success">{Yaxis[0]}</h2>
           
          <button className="btn btn-lg btn-success BuySellButtons">
            Osta Osake
          </button>

          <button className="btn btn-lg btn-danger BuySellButtons">
            Myy Osake
          </button>
         </div>
        </div>  
       </div>
      <Footer />            
     </div>
        )
    }
}

export default Apple;