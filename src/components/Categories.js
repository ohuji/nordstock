import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Categories = () => {
    return(

      <ul className="list-group HomeList list-group-horizontal">

      <li className="list-group-item">
        <Link to="/NYSE">
            <h5 className="PercentageNavText">
              New York Stock Exhange (NYSE)
            </h5>
        </Link>   
      </li>

      <li className="list-group-item">
        <Link to="/Nasdaq">
        <h5 className="PercentageNavText">
            Nasdaq
        </h5>
        </Link>   
      </li>

      <li className="list-group-item">
        <Link to="/Currencies">
        <h5 className="PercentageNavText">
            Valuutat
        </h5>
        </Link>   
      </li>

      <li className="list-group-item">
        <Link to="/SSE">
        <h5 className="PercentageNavText">
            Sanghai Stock Exhange (SSE)
        </h5>
        </Link>   
      </li>

      <li className="list-group-item">
        <Link to="/ETF">
        <h5 className="PercentageNavText">
            Exhange-Traded Funds (ETF)
        </h5>
        </Link>   
      </li>

      <li className="list-group-item">
        <Link to="/Crypto">
        <h5 className="PercentageNavText">
            Cryptovaluutat
        </h5>
        </Link>   
      </li>

    </ul>

   )
}

export default Categories;