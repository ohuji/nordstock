import React from "react";
import { Link, NavLink } from "react-router-dom";
import Routes from "./Routes";
import App from "../App";
import "./../App.css"

 const Navbar = () => {        
        return(
           <nav className="navbar">

             <div className="navbar-brand offset-1">
                <Link to="/" className="text-white">
                   Logo
                 </Link>
              </div>   

              <div className="row">
                <button className="btn nav-item">
                  <Link 
                  to="/login"
                  className="PercentageNavText">
                     Kirjaudu sisään
                  </Link>
                 </button>
                  
                  <button className="btn nav-item ">
                    <Link 
                    to="/register"
                    className="PercentageNavText">
                      Avaa tili
                     </Link>
                  </button>
                </div>
              </nav>
        )
      }

export default Navbar;
