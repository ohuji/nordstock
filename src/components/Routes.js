import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

import Register from "./Register";

const Routes = () => {
    return(
        <BrowserRouter>
          <div>
          <Route exact path="/" component={Main}/>
          
          <Route path="/sign in" component={Login}/>
          <Route path="/sign up" component={Register}/>
          </div>
        </BrowserRouter>
    )
}

export default Routes;