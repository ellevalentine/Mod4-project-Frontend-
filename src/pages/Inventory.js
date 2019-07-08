//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------

import React from "react";

import Item from "../components/Item";

import { getInventory } from "../services/api";
import Button from "@material-ui/core/Button";
import { createPots } from "../services/api";

import NewPotForm from "../components/NewPot";




//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------

class Inventory extends React.Component {
  // inital state
  //------------------------------------------------------------------------------------------------------------------
  state = {
    inventory: []
  };
  //------------------------------------------------------------------------------------------------------------------

  // adding style
  //------------------------------------------------------------------------------------------------------------------
  style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap"
  };

  stylePots = {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  };

  // set the state for the inventory
  //------------------------------------------------------------------------------------------------------------------

  setInventory = () => {
    getInventory().then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.setState({ inventory: data });
      }
    });
  };

  // component did mount - no user => to signin page
  //------------------------------------------------------------------------------------------------------------------

  //empty string are fasley - so if there is no user name the "this.props.username" will show up as falsey and we want it to push to the signin page
  // this will now when the page is refeshed since there is no username found it will push back to signin page
  // componentDidMount will run after the render
  componentDidMount() {
    if (!this.props.username) {
      this.props.history.push("/signin");
    } else {
      this.setInventory();
    }
  }

  addPot = () => {
    console.log(this.props.user.id);
    // Modal()
    // createPots()
  };

  // render component
  //------------------------------------------------------------------------------------------------------------------
  render() {
    const { inventory } = this.state;
    const { addPot } = this;

    return (
      <div>
        <h1 className="welcome-text">
          {this.props.username
            ? `Welcome back, ${this.props.username}!`
            : "Welcome!"}
          <br />
          {/* {this.props.username && (
        <Button onClick={this.props.signout} variant="contained" color="secondary">
          SIGN OUT
        </Button>
      )} */}
        </h1>
        <div style={this.style} className="user-list">
          <h3>Here's your inventory:</h3>
          <Button color="primary" variant="contained" onClick={addPot}>
            Add Savings Pot
          </Button>

          {inventory.length === 0 && <p>Sorry, you don't have any items.</p>}
          <div style={this.stylePots}>
          {inventory.map(item => (
            <Item key={item.id} item={item} />
          ))}
          </div>
          
        </div>
        <div style={this.style}>
            < NewPotForm userID={this.props.user.id} />
            </div>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default Inventory;
