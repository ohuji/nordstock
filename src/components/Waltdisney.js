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

class Waltdisney extends Component {

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

       fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=DIS&apikey=WF9H64N6MXWBW9AJ")
       .then(response => {
           return response.json();
       })

       .then(data => {

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
        return(
         <div className="background">     
          <Navbartwo />
          <Categories/>
          <PercentageList />
         <div className="container-fluid leftAnimation">
           <h1 className="mt-5 mb-4">The Walt Disney Company osake (NYSE: DIS)</h1>
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
          
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item">
              <h5>Informaatiota Osakkeesta</h5>
            </li>
            <li className="list-group-item">
              <h6>Nimi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The Walt Disney Company</h6>
            </li>
            <li className="list-group-item">
              <h6>Lyhenne:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DIS</h6>
            </li>
            <li className="list-group-item">
              <h6>Pörssi:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; New York Stock Exhange</h6>
            </li>
            <li className="list-group-item">
              <h6>Markkina arvo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 248 miljardia (USD)</h6>
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

export default Waltdisney;