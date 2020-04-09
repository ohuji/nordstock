import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Navbartwo from "./Navbartwo";
import Footer from "./Footer";
import Categories from "./Categories";
import AppleLogo from "./../Apple_logo.png";
import Amazon from "./../Amazon.png";

const Home = () => {
    return(
        <div>
         <Navbartwo/>
          <div className="container-fluid">
           <h1 className="mt-4 display-4">Tervetuloa</h1>
           <h3 className="mt-4 ">Suositut kohteessa: Osakkeet</h3>

           <div className="row">
           <Categories />

               <div className="card HomeCard">
                <Link to="/Apple">

                <img className="card-img-top image-fluid" src={AppleLogo}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Apple (AAPL)
                 </h5>           
                </div>

                </Link>
               </div>

               <div className="card HomeCard">
                <Link to="/Amazon">

                <img className="card-img-top image-fluid" src={Amazon}></img>

                <div className="card-body HomeCard">
                 <h5 className="card-text">
                     Amazon (AMZN)
                 </h5>           
                </div>

                 </Link>
                </div>
                
           </div>
          
         </div> 
         <Footer />
        </div>
    )
}
export default Home;