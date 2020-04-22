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
import StockMarket from "./../stock-marke.png";

const Home = () => {
    return(
        <div className="background">
         <Navbartwo/>
         <Categories />
         <PercentageList />      

          <div className="container-fluid">

          <div className="row mt-5">
           <div id="carouselIndicators" className="carousel slide offset-md-1" data-ride="carousel">
            <ol className="carousel-indicators">
             <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
             <li data-target="#carouselIndicators" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">
             <div className="carousel-item active">

             <Link to="/ArticleOne">
              <img src={StockMarket} className="d-block w-100 h-50"></img>
               <div className="carousel-caption d-none d-md-block">
                <h3>Parhaita Sijoituksia Korona-aikoina</h3>
                <p>Klikkaa Lukeaksesi Lisää</p>
               </div>
             </Link>
             </div>

             <div className="carousel-item ">
             <img  className="d-block w-100"></img>
             </div>

          </div>
           <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="sr-only">Edellinen</span>
           </a>

          <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Seuraava</span>
          </a>       
          </div>

          <div className="card InfoCard offset-1"> 

                <div className="card-body">
                 <h1 className="card-text">
                     Mikä on .... ?
                 </h1> 
                 <h4>
                    .. On luotu auttamaan ihmisiä sijoituksissaan.
                    Täältä löytää reaaliaikaista dataa, sekä artikkelejä
                    Liittyen finanssi maailmaan. 
                 </h4>          
                </div>
                
                </div>
           </div>  

           <h3 className="mt-5 mb-3">Suositut kohteessa: Osakkeet</h3>

           <div className="row offset-md-1"> 
               <div className="card HomeCard">
                <Link to="/AAPL">

                <img className="card-img-top image-fluid" src={AppleLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     Apple (AAPL)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/AMZN">

                <img className="card-img-top image-fluid" src={AmazonLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     Amazon (AMZN)
                 </h5>           
                </div>

                 </Link>
                </div>
                
                <div className="card HomeCard">
                <Link to="/SHA:601111">

                <img className="card-img-top image-fluid" src={AirChinaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     Air China (601111)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/JPM">

                <img className="card-img-top image-fluid" src={JPMorganLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     JP Morgan Chase (JPM)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/TSLA">

                <img className="card-img-top image-fluid" src={TeslaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-2 PercentageNavText">
                     Tesla (TSLA)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/GOOGL">

                <img className="card-img-top image-fluid" src={AlphabetLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     Alphabet Inc (GOOGL)
                 </h5>           
                </div>

                 </Link>
                </div>

                <div className="card HomeCard">
                <Link to="/NVDA">

                <img className="card-img-top image-fluid" src={NvidiaLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
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
                 <h5 className="card-text mt-4 PercentageNavText">
                     SPDR S&P 500 ETF Trust (SPY)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/DiaEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     SPDR Dow Jones Industrial Average ETF Trust (DIA)
                 </h5>           
                </div>

                </Link>
               </div>

               
               <div className="card HomeCard">
                <Link to="/VooEtf">

                <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4 PercentageNavText">
                     Vanguard S&P 500 ETF (VOO)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/SchdEtf">

                <img className="card-img-top image-fluid" src={CharlesSchwabLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-2 PercentageNavText">
                     Schwab U.S Dividend Equity ETF (SCHD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/QQQEtf">

                <img className="card-img-top image-fluid" src={InvescoLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4 PercentageNavText">
                     Invesco QQQ ETF (QQQ)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/GldEtf">

                <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-4 PercentageNavText">
                     SPDR Gold ETF Trust (GLD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/VtiEtf">

                <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-2 PercentageNavText">
                     Vanguard Total Stock Market ETF (VTI)
                 </h5>           
                </div>

                </Link>
               </div>

             </div>

              <h3 className="mt-5 mb-3">Suositut kohteessa: Cryptot ja valuutat</h3>
               <div className="row offset-md-1 mb-5">
                 
               <div className="card HomeCard">
                <Link to="/EUR">

                <img className="card-img-top image-fluid" src={EuroLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text PercentageNavText">
                     Euro (EUR)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/BTC">

                <img className="card-img-top image-fluid" src={BitcoinLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
                     Bitcoin (BTC)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/USD">

                <img className="card-img-top image-fluid" src={UsdLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
                     United States Dollar (USD)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/JPY">

                <img className="card-img-top image-fluid" src={JpyLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
                     Japanese Yen (JPY)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/ETH">

                <img className="card-img-top image-fluid" src={EthereumLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
                     Ethereum (ETH)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/XRP">

                <img className="card-img-top image-fluid" src={RippleLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
                     Ripple (XRP)
                 </h5>           
                </div>

                </Link>
               </div>
               
               <div className="card HomeCard">
                <Link to="/GBP">

                <img className="card-img-top image-fluid" src={GbpLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text mt-5 PercentageNavText">
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