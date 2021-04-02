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

const Lsefirm = () => {

    const [axis, setAxis] = useState({
        Xaxis: [],
        Yaxis: [],
    });

    const [state, setState] = useState({
        companies: []
    });

    const id = useParams().id;

    //Get all London Stock Enxhange companies for filtering

    useEffect(() => {
        fetch("/lse/") 
        .then(response => {
          return response.json()
        })
    
        .then(response => {
          setState({ companies: response.data })
        })
    
        .catch(error => {
          console.log(error)
        })

    }, []);

    /*Get stock information from api, based on param id and then
    set that data into y and x axis (Daily opening share data in Y and
    dates in X)
    */
    useEffect(() => {
        let Yvalue = [];
        let Xvalue = [];

       fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=LON:${id}&apikey=WF9H64N6MXWBW9AJ`)
       .then(response => {
           return response.json();
       })

       .then(data => {
            for (let key in data["Time Series (Daily)"]) {
                Yvalue.push(data["Time Series (Daily)"][key]["1. open"]);
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
    for filtering fetched companies of the one of which 
    stock code (called short in db) matches the url id/code and
    then mapping that filtered firm.
    */

    const headerInfo = state.companies.filter(company => company.short === id).map(filteredCompany => (
        <h1 key={filteredCompany.short} className="mt-5 mb-4">
            {filteredCompany.name} Osake (LON: {filteredCompany.short})
        </h1>
    ));   


    const info = state.companies.filter(company => company.short === id).map(filteredCompany => (
        <ul key={filteredCompany.short} className="list-group list-group-flush mt-5">
            <li className="list-group-item">
                <h5>Informaatiota Osakkeesta</h5>
            </li>

            <li className="list-group-item">
                <h6>Nimi: {filteredCompany.name}</h6>
            </li>

            <li className="list-group-item">
                <h6>Lyhenne: {filteredCompany.short}</h6>
            </li>

            <li className="list-group-item">
                <h6>Pörssi: London Stock Exhange</h6>
            </li>

            <li className="list-group-item">
                <h6>Markkina arvo: {filteredCompany.marketcap}</h6>
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

export default Lsefirm;