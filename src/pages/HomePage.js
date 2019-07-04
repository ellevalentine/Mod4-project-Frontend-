//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import TwitterFeed from "../components/TwitterFeed.js"


//------------------------------------------------------------------------------------------------------------------
// HOMEPAGE FUNCTION
//-----------------------------------------------------------------------------------------------
const HomePage = props => (
    <div>
      {/* <h1>Home page!</h1> */}
      
      {/* <Link to="/signin">SignIn</Link> | <Link to="/signup">SignUp</Link> */}
      <h1 className="App-title">
      {props.username ? `Welcome back, ${props.username}!` : "Welcome!"}
      <br />
      {props.username && (
        <Button onClick={props.signout} variant="contained" color="secondary">
          SIGN OUT
        </Button>
      )}
    </h1>
      <TwitterFeed />
    </div>
)

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default HomePage