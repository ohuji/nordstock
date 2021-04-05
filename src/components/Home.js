import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Navbartwo from "./Navbartwo";
import Footer from "./Footer";
import Categories from "./Categories";
import AppleLogo from "./../images/Apple_logo.png";
import AmazonLogo from "./../images/Amazon.png";
import AirChinaLogo from "./../images/air-china-logo-vector.png";
import JPMorganLogo from "./../images/jpmorganchase.png";
import TeslaLogo from "./../images/teslalogoo.png";
import AlphabetLogo from "./../images/alphabet.png";
import SpdrLogo from "./../images/SPDRr.png";
import VanguardLogo from "./../images/vanguard.png";
import CharlesSchwabLogo from "./../images/schd.png";
import InvescoLogo from "./../images/invescoo.png";
import PercentageList from "./PercentageList";
import NvidiaLogo from "./../images/nvidiaLogo.png";
import EuroLogo from "./../images/euro.png";
import BitcoinLogo from "./../images/bitcoin_PNG.png";
import UsdLogo from "./../images/usd.png";
import JpyLogo from "./../images/jpy.png";
import EthereumLogo from "./../images/ETH.png";
import RippleLogo from "./../images/Ripple.png";
import GbpLogo from "./../images/gbp.png";
import porssiFakta from "./../images/porssiFakta.png";
import indeksiMuutos from "./../images/indeksiMuutos.png";
import HomeCard from "./HomeCard";

const Home = () => {
    return(
        <div className="background">
         <Navbartwo/>
         <Categories />
         <PercentageList />      

            <div className="container-fluid leftAnimation">

                <div className="row mt-5">
                    <div id="carouselIndicators" className="carousel slide offset-md-1" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        </ul>

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img src={indeksiMuutos} className="d-block w-100"></img>
                            </div>

                            <div className="carousel-item">
                                <img src={porssiFakta} className="d-block w-100"></img>
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>

                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>       
                    </div>

                    <div className="card InfoCard offset-2"> 
                        <div className="card-body">
                            <h1 className="card-text">
                                Mikä on .... ?
                            </h1> 

                            <h4>
                                .. On luotu auttamaan ihmisiä sijoituksissaan.
                                Täältä löytää reaaliaikaista dataa osakkeista 
                            </h4>          
                        </div>
                    </div>
                </div>  

            <h3 className="mt-5 mb-4">Suositut kohteessa: Osakkeet</h3>

           <div className="row offset-md-1"> 
                <HomeCard name="Apple (AAPL)" img={AppleLogo} link="/Nasdaq/AAPL"/>
                <HomeCard name="Amazon (AMZN)" img={AmazonLogo} link="/Nasdaq/AMZN"/>
                <HomeCard name="Air China (601111)" img={AirChinaLogo} link="/Sse/601111"/>
                <HomeCard name="JP Morgan Chase (JPM)" img={JPMorganLogo} link="/NYSE/JPM"/>
                <HomeCard name="Tesla (TSLA)" img={TeslaLogo} link="/Nasdaq/TSLA"/>
                <HomeCard name="Alphabet Inc (GOOG)" img={AlphabetLogo} link="/Nasdaq/GOOG"/>
                <HomeCard name="Nvidia (NVDA)" img={NvidiaLogo} link="/Nasdaq/NVDA"/>
           </div>

             <h3 className="mt-5 mb-4">Suositut kohteessa: Exhange-Traded Funds (ETF)</h3>

             <div className="row offset-md-1 mb-5">
                <HomeCard name="SPDR S&P 500 ETF Trust (SPY)" img={SpdrLogo} link="/ETF/SPY"/>
                <HomeCard name="SPDR Dow Jones Industrial Average ETF Trust (DIA)" img={SpdrLogo} link="/ETF/DIA"/>
                <HomeCard name="Vanguard S&P 500 ETF (VOO)" img={VanguardLogo} link="/ETF/VOO"/>
                <HomeCard name="Schwab U.S Dividend Equity ETF (SCHD)" img={CharlesSchwabLogo} link="/ETF/SCHD"/>
                <HomeCard name="Invesco QQQ ETF (QQQ)" img={InvescoLogo} link="/ETF/QQQ"/>
                <HomeCard name="SPDR Gold ETF Trust (GLD)" img={SpdrLogo} link="/ETF/GLD"/>
                <HomeCard name="Vanguard Total Stock Market ETF (VTI)" img={VanguardLogo} link="/ETF/VTI"/>
             </div>

             <h3 className="mt-5 mb-4">Suositut kohteessa: Cryptot ja valuutat</h3>

             <div className="row offset-md-1 mb-5">                
                <HomeCard name="Euro (EUR)" img={EuroLogo} link="/Currencies/EUR"/>
                <HomeCard name="Bitcoin (BTC)" img={BitcoinLogo} link="/Cryptocurrencies/BTC"/>
                <HomeCard name="United States Dollar (USD)" img={UsdLogo} link="/Currencies/USD"/>
                <HomeCard name="Japanese Yen (JPY)" img={JpyLogo} link="/Currencies/JPY"/>
                <HomeCard name="Ethereum (ETH)" img={EthereumLogo} link="/Cryptocurrencies/ETH"/>
                <HomeCard name="Ripple (XRP)" img={RippleLogo} link="/Cryptocurrencies/XRP"/>
                <HomeCard name="Great British Pound (GBP)" img={GbpLogo} link="/Currencies/GBP"/>
             </div>
               
        </div> 
        <Footer/>
      </div>
    )
}
export default Home;