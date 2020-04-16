import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Navbartwo from "./Navbartwo";
import Footer from "./Footer";
import Categories from "./Categories";
import AppleLogo from "./../Apple_logo.png";
import AmazonLogo from "./../Amazon.png";
import AirChinaLogo from "./../air-china-logo-vector.png";
import JPMorganLogo from "./../jpmorganchase.png";
import TeslaLogo from "./../teslalogoo.png";
import AlphabetLogo from "./../alphabet.png";
import SpdrLogo from "./../SPDRr.png";
import VanguardLogo from "./../vanguard.png";
import CharlesSchwabLogo from "./../schd.png";
import InvescoLogo from "./../invescoo.png";
import PercentageList from "./PercentageList";

const Home = () => {
    return(
        <div className="background">
         <Navbartwo/>
         <Categories />
         <PercentageList />        
          <div className="container-fluid">
          
           <h3 className="mt-5 mb-3">Suositut kohteessa: Osakkeet</h3>

           <div className="row offset-md-1"> 
               <div className="card HomeCard">
                <Link to="/Apple">

                <img className="card-img-top image-fluid" src={AppleLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Apple (AAPL)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Amazon">

                <img className="card-img-top image-fluid" src={AmazonLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Amazon (AMZN)
                 </h5>           
                </div>

                 </Link>
                </div>
                
                <div className="card HomeCard">
                <Link to="/Airchina">

                <img className="card-img-top image-fluid" src={AirChinaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Air China (601111)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/JPMorganChase">

                <img className="card-img-top image-fluid" src={JPMorganLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     JP Morgan Chase (JPM)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/Tesla">

                <img className="card-img-top image-fluid" src={TeslaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Tesla (TSLA)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/Alphabet">

                <img className="card-img-top image-fluid" src={AlphabetLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Alphabet Inc (GOOG)
                 </h5>           
                </div>

                 </Link>
                </div>
           </div>
             <h3 className="mt-5 mb-3">Suositut kohteessa: Exhange-Traded Funds (ETF)</h3>

             <div className="row offset-md-1">
             <div className="card HomeCard">
                <Link to="/SpyEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     SPDR S&P 500 ETF Trust (SPY)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/DiaEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     SPDR Dow Jones Industrial Average ETF Trust (DIA)
                 </h5>           
                </div>

                </Link>
               </div>

               
               <div className="card HomeCard">
                <Link to="/VooEtf">

                <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Vanguard S&P 500 ETF (VOO)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/SchdEtf">

                <img className="card-img-top image-fluid" src={CharlesSchwabLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Schwab U.S Dividend Equity ETF (SCHD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/QQQEtf">

                <img className="card-img-top image-fluid" src={InvescoLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Invesco QQQ ETF (QQQ)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/GldEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     SPDR Gold ETF Trust (GLD)
                 </h5>           
                </div>

                </Link>
               </div>


             </div>
          
         </div> 
         <Footer />
        </div>
    )
}
export default Home;