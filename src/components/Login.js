import React, { Component } from "react";
import Footer from "./Footer";
import "./../App.css";
import { Link } from "react-router-dom";

class Login extends Component {
    render(){
    return(
    <div>
        <div className="container mt-5">
        <div className="card LoginCard offset-md-3">
          <div className="card-body LoginCard">
            <h2 className="card-title font font-weight-bold mb-4">
            Kirjaudu sisään
            </h2>
          <form>

           <div className="form-group">
             <label className="font font-weight-bolder">
                Käyttäjätunnus
             </label>
             <input 
             className="form-control mb-3" 
             placeholder="Käyttäjätunnus"
             id="käyttäjätunnus"></input>
           </div>

           <div className="form-group">
             <label className="font font-weight-bolder">
                Salasana
             </label>
             <input 
             className="form-control" 
             placeholder="Salasana"
             id="salasana"></input>
           </div>

           <button className="btn btn-primary btn-lg mt-3 mb-3">
            <Link to="" className="text-white">
              Kirjaudu sisään
            </Link>
           </button>

         </form>
         </div>
         </div>
       </div>

         <div className="container mt-5 mb-5">
          <div className="card LoginCard offset-md-3">

           <div className="card-body offset-2">

             <p className="card-text text-dark font font-weight-bolder">
                 Oletko uusi käyttäjä?  
                 <Link to="/register" className="ml-2">
                 Luo tili
                 </Link>
             </p>
           </div>
          </div>
         </div>
      <Footer/>
    </div>
    )
  }
}

export default Login;