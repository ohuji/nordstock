import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Navbartwo = () => {
  return(
    <nav className="navbar">

        <div className="navbar-brand offset-2">
         <Link to="/home" className="text-white">
               Logo
         </Link>
       </div>

         <div className="row">
            <button className="btn nav-item ">
               <Link
                to="/login"
                className="PercentageNavText" >
                  Profiili
               </Link>
            </button>
                  
            <button className="btn nav-item ">
               <Link
                to="/"
                className="PercentageNavText">
                  Kirjaudu ulos
               </Link>
            </button>

       </div>
    </nav>
   )
}
export default Navbartwo;