import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
        username: "",
        password: "",
        email: ""
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   
    handleChange = (e) => {
      this.setState({ [e.target.id]: e.target.value })
      console.log(this.state)
    }

    handleSubmit = (e) => {
      const {
        email,
        password,
        username
      } = this.state;

      fetch("/register", {
        method: 'POST',  
        header: {
         'Accept': 'application/json',
         'Content-Type' : 'application/json'            
        },
        body: JSON.stringify({
        username: username,
        password: password,
        email: email,   
        insert: true
      })
    })
      .then(response => {
        return response.json();
      }) 
      .catch(error => {
        console.log(error);
      })
      console.log(this.state)
      e.prevent.default()
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
             value={this.state.username}
             id="username"></input>
           </div>
           
           <div className="form-group">
             <label className="font font-weight-bolder">
                Sähköposti
             </label>
             <input 
             onChange={this.handleChange}
             value={this.state.email}
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
             value={this.state.password}
             className="form-control" 
             placeholder="Salasana"
             id="password"></input>
           </div>

           <button type="submit" className="btn btn-primary btn-lg mt-3 mb-3">
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