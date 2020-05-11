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
     </BrowserRouter>
   </div>
  )
  }
}

export default App;
