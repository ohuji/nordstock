import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import Footer from "./Footer";
import Navbartwo from "./Navbartwo";
import Categories from "./Categories";
import "./../App.css";
import PercentageList from "./PercentageList";
import { useParams } from "react-router-dom";

const Plot = createPlotlyComponent(Plotly);

const Currency = () => {

    const [axis, setAxis] = useState({
        Xaxis: [],
        Yaxis: [],
    });

    const [state, setState] = useState({
        currencies: []
    });

    const id = useParams().id;

    //Get all currencies for filtering

    useEffect(() => {
        fetch("/currencies/") 
        .then(response => {
          return response.json()
        })
    
        .then(response => {
          setState({ currencies: response.data })
        })
    
        .catch(error => {
          console.log(error)
        })

    }, []);

    /*Get currency information from api, based on param id and then
    set that data into y and x axis (Daily opening share data in Y and
    dates in X)
    */
    useEffect(() => {
        let Yvalue = [];
        let Xvalue = [];

       fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${id}&to_symbol=EUR&apikey=WF9H64N6MXWBW9AJ`)
       .then(response => {
           return response.json();
       })

       .then(data => {
            for (let key in data["Time Series FX (Daily)"]) {
                Yvalue.push(data["Time Series FX (Daily)"][key]["1. open"]);
                Xvalue.push(key);
            }
       
            setAxis({
                Yaxis : Yvalue,
                Xaxis : Xvalue
            })

        })

       .catch(error => {
            console.log(error)
        })

    }, []); 
    
    /*Couple of filters (header and sideinfo seperatly)
    for filtering fetched currencies of the one of which 
    currency code (called short in db) matches the url id/code and
    then mapping that filtered currency.
    */

    const headerInfo = state.currencies.filter(currency => currency.short === id).map(filteredCurrency => (
        <h1 key={filteredCurrency.short} className="mt-5 mb-4">
            {filteredCurrency.name} ({filteredCurrency.short})
        </h1>
    ));   


    const info = state.currencies.filter(currency => currency.short === id).map(filteredCurrency => (
        <ul key={filteredCurrency.short} className="list-group list-group-flush mt-5">
            <li className="list-group-item">
                <h5>Informaatiota Valuutasta</h5>
            </li>

            <li className="list-group-item">
                <h6>Nimi: {filteredCurrency.name}</h6>
            </li>

            <li className="list-group-item">
                <h6>Lyhenne: {filteredCurrency.short}</h6>
            </li>

            <li className="list-group-item">
                <h6>Symboli: {filteredCurrency.symbol}</h6>
            </li>
        </ul>
    ));

    return(
        <div className="background">     
            <Navbartwo/>
            <Categories/>
            <PercentageList/>

            <div className="container-fluid leftAnimation">
                {headerInfo}

                <div className="row">       
                    <Plot
                        className="mb-4 offset-md-1"
                        data={[{
                            x: axis.Xaxis,
                            y: axis.Yaxis,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'black'},
                        },
                        ]}
                    layout={{width: 1050, height: 706}}/>    

                    <div className="offset-md-1">  
                        <h4>Tämän Hetkinen Hinta:</h4>

                        <h2 className="text-success">
                            €{axis.Yaxis[0]}
                        </h2>
                            {info} 

                    </div>
                </div>  
            </div>
            <Footer/>            
        </div>
    )
    
}

export default Currency;