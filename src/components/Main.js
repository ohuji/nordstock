import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./../App.css";
import Image from "./../chris-li-6Y6OnwBKk-o-unsplash.png";
import Imagetwo from "./../2018f.png";
import Imagethree from "./../btcpic.png";
import Imagefour from "./../best_investment_broker.png";
import Imagefive from "./../Best-stock-broker-2018.png";
import { Link } from "react-router-dom";


class Main extends Component {
    render(){
     return(

      <div>
       <Navbar/>
              <div>
            <img src={Image} className="image-fluid img"></img>

              <h1 className="font font-weight-bold Header display-2">
                 Tienaa vitusti rahaa meillä
              </h1>

              <p className="Paragraph font font-weight-bold">
                Liittymällä meidän sivulle saat parhaan mahdollisen sijoitus kokemuksen,
                ilman turhaa paskan jauhantaa.
              </p>

              <button className="btn btn-lg btn-primary Button ">
                  <Link to="/register">
                      Avaa ilmainen tili
                  </Link>
              </button>
              </div>

            <div className="container">
              <h2 className="font font-weight-bold display-4 mt-5 mb-5">
                Meidän äärimmäisen reilut hinnat
              </h2>

              <h2 className="mt-5 mb-3">
                Osakkeet
              </h2>

              <ul className="list-group mb-5">
                <li className="list-group-item font font-weight-bold">
                     New York Stock Exhange: €0,45 + €0.005 per osake      
                </li>

                <li className="list-group-item font font-weight-bold">
                     Nasdaq: €0.45 + €0.005 per osake     
                </li>

                <li className="list-group-item font font-weight-bold">
                     London Stock Exhange: €0.7 + €0.005 per osake    
                </li>
                
                <li className="list-group-item font font-weight-bold">
                     Helsingin Pörssi: €2.00 + €0.007 per osake     
                </li>
              </ul>
               
              <h2 className="mb-3">
                ETF
              </h2>

              <ul className="list-group mb-5">

                <li className="list-group-item font font-weight-bold">
                    S&P 500 ETF: €0.20 + €0.003 per etf      
                </li>

                <li className="list-group-item font font-weight-bold">
                    Dow Jones Industrial ETF: €0.25 + €0.005€ per etf     
                </li>
       
              </ul>

              <h2 className="mb-3">
                Cryptovaluutat
              </h2>

              <ul className="list-group mb-5">

                <li className="list-group-item font font-weight-bold">
                  Bitcoin: €2.00 + €1.50 per valuutta    
                </li>

                <li className="list-group-item font font-weight-bold">
                   Etherium: €1.50 + €0.50 per valuutta     
                </li>

               </ul>
            </div>

           <div className="container-fluid">
              <div className="row">
                <div className="card offset-md-1">

               <img className="card-img-top image-fluid" src={Imagetwo}></img>

               <div className="card-body">
                  <p className="card-text TextOne">
                    Fxdailyinfo Award (Russia)
                  </p>
                  <p className="card-text TextTwo">
                      Best Forex Broker 2018
                  </p>
                </div>
              </div>

              <div className="card offset-md-1">

               <img className="card-img-top image-fluid" src={Imagethree}></img>

                <div className="card-body">
                  <p className="card-text TextOne">
                     Xtrade Award (Worldwide)
                  </p>
                    <p className="card-text TextTwo">
                       Best Cryptocurrency Trading Platform 2020
                    </p>
                  </div>
               </div>

               <div className="card offset-md-1">

                <img className="card-img-top image-fluid" src={Imagefour}></img>

                 <div className="card-body">
                  <p className="card-text TextOne">
                    Fxdailyinfo Award (Worldwide)
                  </p>
                  <p className="card-text TextTwo">
                    Best Investment Broker 2019
                  </p>
               </div>
              </div>

              <div className="card offset-md-1">

            <img className="card-img-top image-fluid" src={Imagefive}></img>

             <div className="card-body">
              <p className="card-text TextOne">
                Rankia Award (Portugal)
              </p>
               <p className="card-text TextTwo">
                 Best Affordable Broking Firm 2019
               </p>
             </div>
            </div>
           </div>
          </div>
          <Footer/>
        </div>

     )
}
}

export default Main;
