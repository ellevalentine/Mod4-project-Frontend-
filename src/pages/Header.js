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
          <div className="navbar-brand">
            <h1>Hog Bank</h1>
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
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/61QQXwsBWmL._SX466_.jpg"
        className="App-logo"
        alt="logo"
      />
    </Link>
    <h1 className="App-title">
      {props.username ? `Welcome back, ${props.username}!` : "Welcome!"}
      <br />
      {props.username && (
        <Button onClick={props.signout} variant="contained" color="secondary">
          SIGN OUT
        </Button>
      )}
    </h1>
  </header>
);

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default Header;

// if user name is not false then reuturn welcome back ..... => if it is falsey then return welcome to react.
