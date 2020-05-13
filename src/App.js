import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home";
import Apple from "./components/Apple";
import Nyse from './components/Nyse';
import Nasdaq from "./components/Nasdaq";
import Currencies from "./components/Currencies";
import Sse from "./components/Sse";
import Lse from "./components/Lse";
import Etf from "./components/Etf";
import Crypto from "./components/Crypto";
import Asx from "./components/Asx";
import BerkshireHathaway from './components/BerkshireHathaway';
import Alibaba from './components/Alibaba';
import Jpmorganchase from './components/Jpmorganchase';
import Visa from './components/Visa';
import Exxonmobil from './components/Exxonmobil';
import CocaCola from './components/CocaCola';
import Walmart from './components/Walmart';
import Waltdisney from './components/Waltdisney';
import Oracle from './components/Oracle';
import Mcdonalds from './components/Mcdonalds';
import Bankofamerica from './components/Bankofamerica';
import Amazon from './components/Amazon';
import Tesla from './components/Tesla';
import Alphabet from './components/Alphabet';
import Nvidia from './components/Nvidia';
import Blizzard from './components/Blizzard';
import Facebook from './components/Facebook';
import Intel from './components/Intel';
import Microsoft from './components/Microsoft';
import Amd from './components/Amd';
import Ebay from './components/Ebay';
import Netflix from './components/Netflix';
import Euro from './components/Euro';
import Usd from './components/Usd';
import Yen from './components/Yen';
import Gbp from './components/Gbp';
import Franc from './components/Franc';
import Cad from './components/Cad';
import Zar from './components/Zar';
import Sek from './components/Sek';
import Nzd from './components/Nzd';
import Aud from './components/Aud';
import Hkd from './components/Hkd';
import Airchina from './components/Airchina';
import Bankofbeijing from './components/Bankofbeijing';
import Zijing from './components/Zijing';
import Wanhua from './components/Wanhua';
import Bankofsanghai from './components/Bankofsanghai';
import Petrochina from './components/Petrochina';
import Spy from './components/Spy';
import Dia from './components/Dia';
import Voo from './components/Voo';
import Schd from './components/Schd';
import Qqq from './components/Qqq';
import Gld from './components/Gld';
import Vti from './components/Vti';
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import Ripple from './components/Ripple';
import Litecoin from './components/Litecoin';
import Bitcoincash from './components/Bitcoincash';

class App extends Component {
  render() {
   return (
    <div className="App">  
     <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/AAPL" component={Apple}/>
      <Route path="/NYSE" component={Nyse}/>
      <Route path="/Nasdaq" component={Nasdaq}/>
      <Route path="/Currencies" component={Currencies}/>
      <Route path="/Sse" component={Sse}/>
      <Route path="/LSE" component={Lse}/>
      <Route path="/ETF" component={Etf}/>
      <Route path="/Crypto" component={Crypto}/>
      <Route path="/ASX" component={Asx}/>
      <Route path="/BRK.A" component={BerkshireHathaway}/>
      <Route path="/BABA" component={Alibaba}/>
      <Route path="/JPM" component={Jpmorganchase}/>
      <Route path="/V" component={Visa}/>
      <Route path="/XOM" component={Exxonmobil}/>
      <Route path="/KO" component={CocaCola}/>
      <Route path="/WMT" component={Walmart}/>
      <Route path="/DIS" component={Waltdisney}/>
      <Route path="/ORCL" component={Oracle}/>
      <Route path="/MCD" component={Mcdonalds}/>
      <Route path="/BAC" component={Bankofamerica}/>
      <Route path="/AMZN" component={Amazon}/>
      <Route path="/TSLA" component={Tesla}/>
      <Route path="/GOOGL" component={Alphabet}/>
      <Route path="/NVDA" component={Nvidia}/>
      <Route path="/ATVI" component={Blizzard}/>
      <Route path="/FB" component={Facebook}/>
      <Route path="/INTC" component={Intel}/>
      <Route path="/MSFT" component={Microsoft}/>
      <Route path="/AMD" component={Amd}/>
      <Route path="/EBAY" component={Ebay}/>
      <Route path="/NFLX" component={Netflix}/>
      <Route path="/EUR" component={Euro}/>
      <Route path="/USD" component={Usd}/>
      <Route path="/JPY" component={Yen}/>
      <Route path="/GBP" component={Gbp}/>
      <Route path="/CHF" component={Franc}/>
      <Route path="/CAD" component={Cad}/>
      <Route path="/ZAR" component={Zar}/>
      <Route path="/SEK" component={Sek}/>
      <Route path="/NZD" component={Nzd}/>
      <Route path="/AUD" component={Aud}/>
      <Route path="/HKD" component={Hkd}/>
      <Route path="/SHA601111" component={Airchina}/>
      <Route path="/SHA601169" component={Bankofbeijing}/>
      <Route path="/SHA601899" component={Zijing}/>
      <Route path="/SHA600309" component={Wanhua}/>
      <Route path="/SHA601229" component={Bankofsanghai}/>
      <Route path="/SHA601857" component={Petrochina}/>
      <Route path="/SPY" component={Spy}/>
      <Route path="/DIA" component={Dia}/>
      <Route path="/VOO" component={Voo}/>
      <Route path="/SCHD" component={Schd}/>
      <Route path="/QQQ" component={Qqq}/>
      <Route path="/GLD" component={Gld}/>
      <Route path="/VTI" component={Vti}/>
      <Route path="/BTC" component={Bitcoin}/>
      <Route path="/ETH" component={Ethereum}/>
      <Route path="/XRP" component={Ripple}/>
      <Route path="/LTC" component={Litecoin}/>
      <Route path="/BCH" component={Bitcoincash}/>
     </BrowserRouter>
   </div>
  )
  }
}

export default App;
