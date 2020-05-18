import React, { Component } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Footer from "./Footer";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import "./../App.css";
import PercentageList from "./PercentageList";

const Plot = createPlotlyComponent(Plotly);

class Gbp extends Component {

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

       fetch("https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=GBP&to_symbol=EUR&apikey=WF9H64N6MXWBW9AJ")
       .then(response => {
           return response.json();
       })

       .then(data => {

               for (let key in data["Time Series FX (Daily)"]) {
                Yvalue.push(data["Time Series FX (Daily)"][key]["1. open"]);
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
           <h1 className="mt-5 mb-4">Great British Pound (GBP)</h1>
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
          <h4 className="mb-4">Tämän Hetkinen arvo Euroina:</h4>
          <h2 className="text-success">€{Yaxis[0]}</h2>
          
          <ul className="list-group list-group-flush mt-5">
            <li className="list-group-item">
              <h5>Informaatiota Valuutasta</h5>
            </li>

            <li className="list-group-item">
              <h6>Nimi:&nbsp;&nbsp; Great British Pound</h6>
            </li>

            <li className="list-group-item">
              <h6>Lyhenne:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GBP</h6>
            </li>

            <li className="list-group-item">
              <h6>Symboli:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; £</h6>
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

export default Gbp;