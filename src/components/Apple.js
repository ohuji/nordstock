import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Footer from "./Footer";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import "./../App.css";
import PercentageList from "./PercentageList";

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
         <div className="background">     
          <Navbartwo />
          <Categories/>
          <PercentageList />
         <div className="container-fluid">
           <h1 className="mt-5 mb-4">Apple osake (NASDAQ: AAPL)</h1>
            <div className="row">       

             <Plot
             className="mb-4 offset-md-1"
             data={[{
             x: Xaxis,
             y: Yaxis,
             type: 'scatter',
             mode: 'lines+markers',
             marker: {color: 'black'},
           },
         ]}
          layout={{width: 1050, height: 706}}/>    

         <div className="offset-md-1">  
          <h4>Tämän hetkinen hinta:</h4>
          <h2 className="text-success">${Yaxis[0]}</h2>
           
          <button className="btn btn-lg btn-success BuySellButtons">
            Osta Osake
          </button>

          <button className="btn btn-lg btn-danger BuySellButtons">
            Myy Osake
          </button>
          
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item">
              <h5>Informaatiota Osakkeesta</h5>
            </li>
            <li className="list-group-item">
              <h6>Nimi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Apple</h6>
            </li>
            <li className="list-group-item">
              <h6>Lyhenne:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AAPL</h6>
            </li>
            <li className="list-group-item">
              <h6>Pörssi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nasdaq</h6>
            </li>
            <li className="list-group-item">
              <h6>Markkina arvo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.224 miljardia (USD)</h6>
            </li>
          </ul>
         </div>
        </div>  
       </div>
      <Footer />            
     </div>
        )
    }
}

export default Apple;