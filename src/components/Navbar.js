import React from "react";
import { Link, NavLink } from "react-router-dom";
import Routes from "./Routes";
import App from "../App";

 const Navbar = () => {        
        return(
            <nav className="navbar">

                <a className="navbar-brand offset-1">
                  <Link to="/" className="text-white">
                    Logo
                  </Link>
                </a>   

                <div className="row">
                  <button className="btn nav-item ">
                    <Link to="/login" >
                     Kirjaudu sisään
                     </Link>
                  </button>
                  
                  <button className="btn nav-item ">
                    <Link to="/register">
                     Avaa tili
                     </Link>
                  </button>
                  </div>
            </nav>
        )
      }

export default Navbar;
