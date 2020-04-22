import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home";
import Apple from "./components/Apple";
import Nyse from './components/Nyse';
import Nasdaq from "./components/Nasdaq";
import Currencies from "./components/Currencies";
import Sse from "./components/Sse";
import Lse from "./components/Lse";

class App extends Component {
 

  render() {
  return (
    <div className="App">
      
      
   <BrowserRouter>
   
   <Route exact path="/" component={Main}/>
   <Route path="/login" component={Login}/>
   <Route path="/register" component={Register}/>
   <Route path="/Home" component={Home}/>
   <Route path="/AAPL" component={Apple}/>
   <Route path="/NYSE" component={Nyse}/>
   <Route path="/Nasdaq" component={Nasdaq}/>
   <Route path="/Currencies" component={Currencies}/>
   <Route path="/Sse" component={Sse}/>
   <Route path="/LSE" component={Lse}/>
   
   </BrowserRouter>
    </div>
  )
  }
}

export default App;
