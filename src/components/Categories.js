import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Categories = () => {
    return(

      <ul className="list-group HomeList list-group-horizontal Categories">

      <li className="list-group-item rounded-0">
        <Link to="/NYSE">
            <h5 className="PercentageNavText">
              &nbsp;New York Stock Exhange (NYSE)&nbsp;
            </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/Nasdaq">
        <h5 className="PercentageNavText">
          &nbsp;Nasdaq Stock Exhange (Nasdaq)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/Currencies">
        <h5 className="PercentageNavText">
          &nbsp;Valuutat&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/SSE">
        <h5 className="PercentageNavText">
          &nbsp;Sanghai Stock Exhange (SSE)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/ETF">
        <h5 className="PercentageNavText">
          &nbsp;Exhange-Traded Funds (ETF)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/Crypto">
        <h5 className="PercentageNavText">
          &nbsp;Cryptovaluutat&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/LSE">
        <h5 className="PercentageNavText">
          &nbsp;London Stock Exchange (LSE)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item rounded-0">
        <Link to="/ASX">
        <h5 className="PercentageNavText">
          &nbsp; Australian Stock Exhange (AUX) &nbsp;
        </h5>
        </Link>   
      </li>

    </ul>

   )
}

export default Categories;