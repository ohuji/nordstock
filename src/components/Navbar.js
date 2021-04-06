import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Navbar = () => {
  return(
    <nav className="navbar">

        <div className="navbar-brand offset-2">
         <Link to="/" className="NavLink">
               Logo
         </Link>
       </div>
    </nav>
   )
}
export default Navbar;