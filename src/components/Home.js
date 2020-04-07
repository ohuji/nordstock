import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Navbartwo from "./Navbartwo";
import Footer from "./Footer";
import Categories from "./Categories";

const Home = () => {
    return(
        <div>
         <Navbartwo/>
         <div className="container-fluid">
          <Categories />
         </div> 
        <Footer />
        </div>
    )
}
export default Home;