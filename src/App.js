//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import SignInForm from "./pages/SignInForm";
import Inventory from "./pages/Inventory";
import SignUpForm from "./pages/SignUpForm";
import CharityContainer from "./pages/CharityContainer";
import CharityDonation from "./pages/CharityDonation";

//grab the validate function from the api.js to use
import { validate, createUserCharity } from "./services/api";

import PotDetails from "./components/PotDetails";

import "./App.css";

//------------------------------------------------------------------------------------------------------------------
// APP CLASS
//------------------------------------------------------------------------------------------------------------------

const charityUrl = "http://localhost:3000/charities";

class App extends Component {
  // initial state
  //------------------------------------------------------------------------------------------------------------------
  state = {
    // this is the initial state and when someone signsin this will be updated by the setState below
    username: "",
    user: [],
    charities: []
  };

  //find charity based on id and update that balance

  donateAndUpdateState = event => {
    event.preventDefault();
    console.log("Hello");
    let donation = parseInt(event.target[0].value);
    console.log(event.target[0].value);
    this.setState({
      userBalance: this.state.user.balance - donation,
      charityBalance: this.state.charityBalance + donation
    });

  };

  // sign in
  //------------------------------------------------------------------------------------------------------------------
  // only one user can be signed in at once so when they are the username will be replaced eachtime
  //update sign in since it was expecting a string now it will be getting a little object with username and id
  signin = user => {
    this.setState({
      username: user.username,
      user: user,
      userBalance: user.balance
    });
    localStorage.setItem("token", user.token); // add token
    this.props.history.push("/inventory");
  };
  //------------------------------------------------------------------------------------------------------------------

  // sign out
  //------------------------------------------------------------------------------------------------------------------
  // if we are signin we will also be want to be able to signout - here will again set the state of username back to nothing
  // now in signout it will also remove the token from local storage, we only need to give the key and dont require a value when we are using removeItem()
  // you could have also used  localStorage.clear('token') => but this would have removed everything and if we were also storing other stuff this would be a problem
  signout = () => {
    this.setState({ username: "" });
    this.props.history.push("/");
    localStorage.removeItem("token");
  };
  //------------------------------------------------------------------------------------------------------------------

  reloadTwitter = () => {
    const twitter = document.querySelector(".twitter-container");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://platform.twitter.com/widgets.js";
    twitter.appendChild(script);
  };

  // component did mount - validate user token
  //------------------------------------------------------------------------------------------------------------------
  //import validate function at top
  //check if we have a token - then -> if we dont show error - but if there is no error then we get our user - hench we can assume the id we had stored in local storage was valid
  componentDidMount() {
    if (localStorage.token) {
      validate().then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.signin(data);
        }
      });
    }
    this.getCharities(); //are we invalidating the if statement here?
    // this.reloadTwitter() // we need to mount something for the twitter feed and the welcome to reload when clicking the home page button
  }

  //------------------------------------------------------------------------------------------------------------------
  //getcharities

  getCharities = () => {
    fetch(charityUrl)
      .then(response => response.json())
      .then(charities => this.setState({ charities: charities }));
  };

  // render component
  //------------------------------------------------------------------------------------------------------------------
  render() {
    const { signin, signout, getCharities, donateAndUpdateState } = this;
    const { username, user, charities } = this.state; // so we can pass the username down to the header to welcome the user

    return (
      <div className="App">
        <Header username={username} signout={signout} signin={signin} />
        <Switch>
          <Route
            exact
            path="/"
            onChange={this.reloadTwitter}
            component={props => <HomePage {...props} />}
          />
          <Route
            path="/signin"
            component={props => <SignInForm signin={signin} {...props} />}
          />
          <Route
            path="/inventory"
            component={props => (
              <Inventory username={username} user={user} {...props} />
            )}
          />
          <Route
            exact
            path="/charities"
            component={props => (
              <CharityContainer
                user={user}
                charities={charities}
                getCharities={getCharities}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/charities/:id"
            component={props => (
              <CharityDonation
                user={user}
                charities={charities}
                user={user}
                getCharities={getCharities}
                donateAndUpdateState={donateAndUpdateState}
                {...props}
              />
            )}
          />
          <Route
            path="/signup"
            component={props => <SignUpForm signin={signin} {...props} />}
          />
          <Route
            path="/potdetails"
            component={props => <PotDetails user={user} {...props} />}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    );
  }
  //------------------------------------------------------------------------------------------------------------------
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default withRouter(App);

//  by adding withRouter in the import and at the export of App => we get match, location and history
