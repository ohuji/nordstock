import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";
import Navbartwo from "./Navbartwo";
import Footer from "./Footer";

const Home = () => {
    return(
        <div>
         <Navbartwo/>
         <div className="container-fluid">

             <ul className="list-group list-group-flush col-md-3">

               <li className="list-group-item ">
                   <Link to="/NYSE">
                       New York Stock Exhange (NYSE)
                   </Link>   
                  <span className="badge badge-primary badge-pill">10</span>
               </li>

               <li className="list-group-item">
                   <Link to="/Nasdaq">
                       Nasdaq
                   </Link>   
                  <span className="badge badge-primary badge-pill">12</span>
               </li>

               <li className="list-group-item">
                   <Link to="/LSE">
                       London Stock Exhange (LSE)
                   </Link>   
                  <span className="badge badge-primary badge-pill">8</span>
               </li>

               <li className="list-group-item">
                   <Link to="/OMXHEL">
                       OMX: Helsinki (HEL)
                   </Link>   
                  <span className="badge badge-primary badge-pill">5</span>
               </li>

               <li className="list-group-item">
                   <Link to="/ETF">
                       ETF:ät
                   </Link>   
                  <span className="badge badge-primary badge-pill">7</span>
               </li>

               <li className="list-group-item">
                   <Link to="/Crypto">
                       Cryptovaluutat
                   </Link>   
                  <span className="badge badge-primary badge-pill">5</span>
               </li>

             </ul>
         </div>
        <Footer />
        </div>
    )
}
export default Home;