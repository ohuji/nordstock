import React from "react";
import { Link } from "react-router-dom";
import './footerstyle.css';
import GithubLogo from "./../GitHub-Mark-Light-64px.png"

const Footer = () => {
    return(
       <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6">
            <p>Copyright © 2020, J.Salomäki, All Rights Reserved</p>
          </div>
          <a href="https://github.com/ohuji">
           <img src={GithubLogo} className="image-fluid"></img>
           </a>
          </div>
         </div>
      </footer>

        
    )
}

export default Footer;
