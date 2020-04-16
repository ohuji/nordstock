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
import NvidiaLogo from "./../nvidiaLogo.png";
import EuroLogo from "./../euro.png";
import BitcoinLogo from "./../bitcoin_PNG.png";
import UsdLogo from "./../usd.png";
import JpyLogo from "./../jpy.png";
import EthereumLogo from "./../ETH.png";
import RippleLogo from "./../Ripple.png";
import GbpLogo from "./../gbp.png";

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
                 <h5 className="card-text mt-2">
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

                <div className="card HomeCard">
                <Link to="/Nvidia">

                <img className="card-img-top image-fluid" src={NvidiaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Nvidia (NVDA)
                 </h5>           
                </div>

                 </Link>
                </div>
           </div>
             <h3 className="mt-5 mb-3">Suositut kohteessa: Exhange-Traded Funds (ETF)</h3>

             <div className="row offset-md-1 mb-5">
             <div className="card HomeCard">
                <Link to="/SpyEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4">
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
                 <h5 className="card-text mt-4">
                     Vanguard S&P 500 ETF (VOO)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/SchdEtf">

                <img className="card-img-top image-fluid" src={CharlesSchwabLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-2">
                     Schwab U.S Dividend Equity ETF (SCHD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/QQQEtf">

                <img className="card-img-top image-fluid" src={InvescoLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4">
                     Invesco QQQ ETF (QQQ)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/GldEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4">
                     SPDR Gold ETF Trust (GLD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/VtiEtf">

                <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-2">
                     Vanguard Total Stock Market ETF (VTI)
                 </h5>           
                </div>

                </Link>
               </div>

             </div>

              <h3 className="mt-5 mb-3">Suositut kohteessa: Cryptot ja valuutat</h3>
               <div className="row offset-md-1 mb-5">
                 
               <div className="card HomeCard">
                <Link to="/Euro">

                <img className="card-img-top image-fluid" src={EuroLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Euro (EUR)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Btc">

                <img className="card-img-top image-fluid" src={BitcoinLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Bitcoin (BTC)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Usd">

                <img className="card-img-top image-fluid" src={UsdLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     United States Dollar (USD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Jpy">

                <img className="card-img-top image-fluid" src={JpyLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Japanese Yen (JPY)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Eth">

                <img className="card-img-top image-fluid" src={EthereumLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Ethereum (ETH)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Xrp">

                <img className="card-img-top image-fluid" src={RippleLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Ripple (XRP)
                 </h5>           
                </div>

                </Link>
               </div>
               
               <div className="card HomeCard">
                <Link to="/Gbp">

                <img className="card-img-top image-fluid" src={GbpLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5">
                     Great British Pound (GBP)
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