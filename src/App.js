import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Footer from "./components/Footer"

class App extends Component {
 

  render() {
  return (
    
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
   
      
    
  );
  }
}

export default App;
