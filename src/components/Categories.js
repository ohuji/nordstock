import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Categories = () => {
    return(

      <ul className="list-group list-group-flush HomeList list-group-horizontal Categories">

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/NYSE">
            <h5 className="linkSize">
              &nbsp;New York Stock Exhange (NYSE)&nbsp;
            </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/NASDAQ">
        <h5 className="linkSize">
          &nbsp;Nasdaq Stock Exhange (Nasdaq)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/CURRENCY">
        <h5 className="linkSize">
          &nbsp;Valuutat&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/SSE">
        <h5 className="linkSize">
          &nbsp;Sanghai Stock Exhange (SSE)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/ETF">
        <h5 className="linkSize">
          &nbsp;Exhange-Traded Funds (ETF)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/CRYPTO">
        <h5 className="linkSize">
          &nbsp;Cryptovaluutat&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/LSE">
        <h5 className="linkSize">
          &nbsp;London Stock Exchange (LSE)&nbsp;
        </h5>
        </Link>   
      </li>

      <li className="list-group-item NavList rounded-0">
        <Link className="NavLink" to="/FRA">
        <h5 className="linkSize">
          &nbsp; Frankfurt Stock Exhange (FRA) &nbsp;
        </h5>
        </Link>   
      </li>

    </ul>

   )
}

export default Categories;