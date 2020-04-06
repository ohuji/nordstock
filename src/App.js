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

class App extends Component {
 

  render() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
   
   <Route exact path="/" component={Main}/>
   <Route path="/login" component={Login}/>
   <Route path="/register" component={Register}/>
   <Route path="/Home" component={Home}/>
   
 </BrowserRouter>
    </div>
  )
  }
}

export default App;
