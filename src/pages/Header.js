//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React from "react";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// import logo from '../logo.svg'

//---------------------------------------------------------------------------------------------------------
// HEADER FUNCTION
//------------------------------------------------------------------------------------------------------------------

const Header = props => (
  <header className="App-header">
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
        <img
            src="https://images-na.ssl-images-amazon.com/images/I/61QQXwsBWmL._SX466_.jpg"
            className="App-logo"
            alt="logo"
          />
            <h1 className="Title">Hog Bank</h1>
            <br/>
          <div className="navbar-brand">
            <Link className="Homepage-link" to="/">
              Home Page
            </Link>
            <Link className="Homepage-link" to="/signin">
              SignIn
            </Link>
            <Link className="Homepage-link" to="/signup">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </nav>

    <Link to="/">
    </Link>
  </header>
);

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default Header;

// if user name is not false then reuturn welcome back ..... => if it is falsey then return welcome to react.
