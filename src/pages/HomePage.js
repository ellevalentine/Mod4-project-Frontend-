//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React from "react";
// import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import TwitterFeed from "../components/TwitterFeed.js";
import Carousel from "../components/Carousel";



//------------------------------------------------------------------------------------------------------------------
// HOMEPAGE FUNCTION
//-----------------------------------------------------------------------------------------------
const HomePage = props => (
  <div>
    <div className="welcome">
      <h1 className="welcome-text">
        {props.username ? `Welcome back, ${props.username}!` : "Welcome!"}
        <br />
        <br />
      </h1>
    </div>
    <Carousel />
    <TwitterFeed />
  </div>
);

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//
export default HomePage;
