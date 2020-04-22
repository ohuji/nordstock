import React from "react";
import { Link } from "react-router-dom";
import './../App.css';
import GithubLogo from "./../GitHub-Mark-Light-64px.png"

const Footer = () => {
    return(
       <footer className="site-footer">
        <div className="container-fluid">
          <div className="row">

          <div className="col-md-6">
            <p className="FooterParagraph">
              Copyright © 2020, Juho Salomäki, All Rights Reserved
            </p>
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
