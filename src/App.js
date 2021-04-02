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
import Cryptocurrencies from "./components/Cryptocurrencies";
import Fra from './components/Fra';
import Nysefirm from './components/Nysefirm';
import Nasdaqfirm from './components/Nasdaqfirm';
import Currency from './components/Currency';
import Ssefirm from './components/Ssefirm';
import Etffund from './components/Etffund';
import Crypto from './components/Crypto';
import Lsefirm from './components/Lsefirm';
import Frafirm from './components/Frafirm';

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
      <Route path="/Cryptocurrencies/:id" component={Crypto}/>
      <Route path="/ETF/:id" component={Etffund}/>
      <Route path="/LSE/:id" component={Lsefirm}/>
      <Route path="/FRA/:id" component={Frafirm}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/NYSE" component={Nyse}/>
      <Route path="/Nasdaq" component={Nasdaq}/>
      <Route path="/Currencies" component={Currencies}/>
      <Route path="/Sse" component={Sse}/>
      <Route path="/LSE" component={Lse}/>
      <Route path="/ETF" component={Etf}/>
      <Route path="/Cryptocurrencies" component={Cryptocurrencies}/>
      <Route path="/FRA" component={Fra}/>
      </Switch>
     </BrowserRouter>
   </div>
  )
}

export default App;
