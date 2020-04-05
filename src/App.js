import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Footer from "./components/Footer"
import Main from "./components/Main"
import Cart from "./components/Cart"
import Login from "./components/Login"
import Register from "./components/Register"

class App extends Component {
 

  render() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
   
   <Route exact path="/" component={Main}/>
   <Route path="/cart" component={Cart}/>
   <Route path="/sign in" component={Login}/>
   <Route path="/sign up" component={Register}/>
   
 </BrowserRouter>
    </div>
  )
  }
}

export default App;
