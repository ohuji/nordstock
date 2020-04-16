import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

class Register extends Component {
    state = {
      users: []
    }
   
    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
      e.prevent.default()

      fetch("/register", {
        method: "POST",  
        header: {
         "Content-Type" : "application/json"            
        },
        body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email   
      })
    })
      .then(response => {
        return response.json();
      }) 
      .then(data =>{
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
     return(
       <div className="background">
         <Navbar/>
          <div className="container mt-5 mb-5">
           <div className="card LoginCard offset-md-3">
            <div className="card-body LoginCard">
            <h2 className="card-title font font-weight-bold mb-4">
               Rekisteröidy
            </h2>

          <form onSubmit={this.handleSubmit}>
           <div className="form-group">
             <label className="font font-weight-bolder">
                Käyttäjätunnus
             </label>
             <input 
             onChange={this.handleChange}
             className="form-control mb-3" 
             placeholder="Käyttäjätunnus"
             id="username"></input>
           </div>
           
           <div className="form-group">
             <label className="font font-weight-bolder">
                Sähköposti
             </label>
             <input 
             onChange={this.handleChange}
             className="form-control" 
             placeholder="Sähköposti"
             id="email"></input>
           </div>

           <div className="form-group">
             <label className="font font-weight-bolder">
                Salasana
             </label>
             <input 
             onChange={this.handleChange}
             className="form-control" 
             placeholder="Salasana"
             id="password"></input>
           </div>

           <button className="btn btn-primary btn-lg mt-3 mb-3">
              Luo ilmainen tili
           </button>

         </form>
        </div>
       </div>
     </div>
      <Footer/>
     </div>
     )
    }
}

export default Register;