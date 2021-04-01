import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home";
import Nyse from './components/Nyse';
import Nasdaq from "./components/Nasdaq";
import Currencies from "./components/Currencies";
import Sse from "./components/Sse";
import Lse from "./components/Lse";
import Etf from "./components/Etf";
import Crypto from "./components/Crypto";
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import Ripple from './components/Ripple';
import Litecoin from './components/Litecoin';
import Bitcoincash from './components/Bitcoincash';
import Vodafone from './components/Vodafone';
import Britishamericantobacco from './components/Britishamericantobacco';
import Hsbc from './components/Hsbc';
import Royaldutchshell from './components/Royaldutchshell';
import Tesco from './components/Tesco';
import Unilever from './components/Unilever';
import Fra from './components/Fra';
import Sap from './components/Sap';
import Volkswagen from './components/Volkswagen';
import Siemens from './components/Siemens';
import Linde from './components/Linde';
import Allianz from './components/Allianz';
import Nysefirm from './components/Nysefirm';
import Nasdaqfirm from './components/Nasdaqfirm';
import Currency from './components/Currency';
import Ssefirm from './components/Ssefirm';
import Etffund from './components/Etffund';

const App = () => {
   return (
    <div className="App">  
     <BrowserRouter>
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/NYSE/:id" component={Nysefirm}/>
      <Route path="/Nasdaq/:id" component={Nasdaqfirm}/>
      <Route path="/Sse/:id" component={Ssefirm}/>
      <Route path="/Currencies/:id" component={Currency}/>
      <Route path="/ETF/:id" component={Etffund}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/NYSE" component={Nyse}/>
      <Route path="/Nasdaq" component={Nasdaq}/>
      <Route path="/Currencies" component={Currencies}/>
      <Route path="/Sse" component={Sse}/>
      <Route path="/LSE" component={Lse}/>
      <Route path="/ETF" component={Etf}/>
      <Route path="/Crypto" component={Crypto}/>
      <Route path="/FRA" component={Fra}/>
      <Route path="/BTC" component={Bitcoin}/>
      <Route path="/ETH" component={Ethereum}/>
      <Route path="/XRP" component={Ripple}/>
      <Route path="/LTC" component={Litecoin}/>
      <Route path="/BCH" component={Bitcoincash}/>
      <Route path="/LONVOD" component={Vodafone}/>
      <Route path="/LONBATS" component={Britishamericantobacco}/>
      <Route path="/LONHSBA" component={Hsbc}/>
      <Route path="/LONRDSB" component={Royaldutchshell}/>
      <Route path="/LONTSCO" component={Tesco}/>
      <Route path="/LONULVR" component={Unilever}/>
      <Route path="/FRASAP" component={Sap}/>
      <Route path="/FRAVOW3" component={Volkswagen}/>
      <Route path="/FRASIE" component={Siemens}/>
      <Route path="/FRALIN" component={Linde}/>
      <Route path="/FRAALV" component={Allianz}/>
      </Switch>
     </BrowserRouter>
   </div>
  )
}

export default App;
