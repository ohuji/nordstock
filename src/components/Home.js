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
               <div className="card HomeCard">
                    <Link className="Link" to="/AAPL">
                        <img className="card-img-top image-fluid" src={AppleLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Apple (AAPL)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/AMZN">
                        <img className="card-img-top image-fluid" src={AmazonLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Amazon (AMZN)
                            </h5>           
                        </div>
                    </Link>
                </div>
                
                <div className="card HomeCard">
                    <Link className="Link" to="/SHA601111">
                        <img className="card-img-top image-fluid" src={AirChinaLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Air China (601111)
                            </h5>           
                        </div>
                    </Link>
                </div>

                <div className="card HomeCard">
                    <Link className="Link" to="/NYSE/JPM">
                        <img className="card-img-top image-fluid" src={JPMorganLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                JP Morgan Chase (JPM)
                            </h5>           
                        </div>
                    </Link>
                </div>

                <div className="card HomeCard">
                    <Link className="Link" to="/TSLA">
                        <img className="card-img-top image-fluid" src={TeslaLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Tesla (TSLA)
                            </h5>           
                        </div>

                    </Link>
                </div>

                <div className="card HomeCard">
                    <Link className="Link" to="/GOOGL">
                        <img className="card-img-top image-fluid" src={AlphabetLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Alphabet Inc (GOOGL)
                            </h5>           
                        </div>
                    </Link>
                </div>

                <div className="card HomeCard">
                    <Link className="Link" to="/NVDA">
                        <img className="card-img-top image-fluid" src={NvidiaLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Nvidia (NVDA)
                            </h5>           
                        </div>
                    </Link>
                </div>
           </div>

             <h3 className="mt-5 mb-4">Suositut kohteessa: Exhange-Traded Funds (ETF)</h3>

             <div className="row offset-md-1 mb-5">
                <div className="card HomeCard">
                    <Link className="Link" to="/SPY">
                        <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                SPDR S&P 500 ETF Trust (SPY)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/DIA">
                        <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                SPDR Dow Jones Industrial Average ETF Trust (DIA)
                            </h5>           
                        </div>
                    </Link>
               </div>

               
               <div className="card HomeCard">
                    <Link className="Link" to="/VOO">
                        <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Vanguard S&P 500 ETF (VOO)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/SCHD">
                        <img className="card-img-top image-fluid" src={CharlesSchwabLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Schwab U.S Dividend Equity ETF (SCHD)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/QQQ">
                        <img className="card-img-top image-fluid" src={InvescoLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Invesco QQQ ETF (QQQ)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/GLD">
                        <img className="card-img-top image-fluid" src={SpdrLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                SPDR Gold ETF Trust (GLD)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/VTI">
                        <img className="card-img-top image-fluid" src={VanguardLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-4 linkSize">
                                Vanguard Total Stock Market ETF (VTI)
                            </h5>           
                        </div>
                    </Link>
               </div>
             </div>

             <h3 className="mt-5 mb-4">Suositut kohteessa: Cryptot ja valuutat</h3>
                <div className="row offset-md-1 mb-5">
                 
               <div className="card HomeCard">
                    <Link className="Link" to="/EUR">
                        <img className="card-img-top image-fluid" src={EuroLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text linkSize">
                                Euro (EUR)
                             </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/BTC">
                        <img className="card-img-top image-fluid" src={BitcoinLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Bitcoin (BTC)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/USD">
                        <img className="card-img-top image-fluid" src={UsdLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                United States Dollar (USD)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/JPY">
                        <img className="card-img-top image-fluid" src={JpyLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Japanese Yen (JPY)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/ETH">
                        <img className="card-img-top image-fluid" src={EthereumLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Ethereum (ETH)
                            </h5>           
                        </div>
                    </Link>
               </div>

               <div className="card HomeCard">
                    <Link className="Link" to="/XRP">
                        <img className="card-img-top image-fluid" src={RippleLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Ripple (XRP)
                            </h5>           
                        </div>
                    </Link>
               </div>
               
               <div className="card HomeCard">
                    <Link className="Link" to="/GBP">
                        <img className="card-img-top image-fluid" src={GbpLogo}></img>

                        <div className="card-body">
                            <h5 className="card-text mt-5 linkSize">
                                Great British Pound (GBP)
                            </h5>           
                        </div>
                    </Link>
               </div>

            </div>
               
        </div> 
        <Footer/>
      </div>
    )
}
export default Home;