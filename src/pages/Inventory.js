//------------------------------------------------------------------------------------------------------------------
// INVENTORY
//------------------------------------------------------------------------------------------------------------------

import React from "react";

import Item from "../components/Item";

import { getInventory } from "../services/api";
import Button from "@material-ui/core/Button";
import { createPots } from "../services/api";
import { updateSpending } from "../services/api";

import OverAllChartsPage from "../components/overAllPieChart";

import NewPotForm from "../components/NewPot";

//------------------------------------------------------------------------------------------------------------------
// INVENTORY CLASS
//------------------------------------------------------------------------------------------------------------------

class Inventory extends React.Component {
  // inital state
  //------------------------------------------------------------------------------------------------------------------
  state = {
    inventory: [],
    daily: 1,
    weekly: 1,
    monthly: 1
  };

  //------------------------------------------------------------------------------------------------------------------

  setPaymentstate = event => {
    event.preventDefault();

    const choice = event.target.potSchedule.value.split("-")[0];

    const amount = event.target.potSchedule.value.split("-")[1];

    const dailyTotal = parseFloat(this.state.daily) + parseFloat(amount);
    const weeklyTotal = parseFloat(this.state.weekly) + parseFloat(amount);
    const monthlyTotal = parseFloat(this.state.monthly) + parseFloat(amount);

    // debugger

    if (choice === "daily") {
      this.setState({ daily: dailyTotal });
    } else if (choice === "weekly") {
      this.setState({ weekly: weeklyTotal });
    } else if (choice === "monthly") {
      this.setState({ monthly: monthlyTotal });
    }

    this.updatedState();
  };

  updatedState = () => {
    updateSpending(
      this.state.daily,
      this.state.weekly,
      this.state.monthly,
      this.props.user.id
    );
  };

  //------------------------------------------------------------------------------------------------------------------

  // adding style
  //------------------------------------------------------------------------------------------------------------------

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
    if (this.state.newpot) {
      this.setState({ newpot: undefined });
      this.value = "Add Savings Pot";
    } else {
      this.setState({ newpot: this.props.user.id });
      this.value = "All Pots";
    }
  };

  //  change = () =>
  // {
  //     if (this.value=="Add Savings Pot") this.value = "All Pots";
  //     else this.value = "Add Savings Pot";
  // }

  // render component
  //------------------------------------------------------------------------------------------------------------------
  render() {
    const { inventory, newpot } = this.state;
    const { addPot } = this;

    return (
      <div>
        <h1 className="welcome-text">
          {this.props.username
            ? `Welcome back, ${this.props.username}!`
            : "Welcome!"}
          <br />
          <br />
          <hr />
          <h3> Account Balance: £{this.props.user.balance}. </h3>
          {/* {this.props.username && (
        <Button onClick={this.props.signout} variant="contained" color="secondary">
          SIGN OUT
        </Button>
      )} */}
        </h1>
        <div className="user-list">
          <h3>Here's your inventory:</h3>

          <Button color="primary" variant="contained" onClick={addPot}>
            Add Savings Pot
          </Button>

          <br />

          {inventory.length === 0 && <p>Sorry, you don't have any items.</p>}
        </div>

        <div className="user-list">
          {newpot ? (
            <NewPotForm
              userID={this.props.user.id}
              setInventory={this.setInventory}
            />
          ) : (
            <div className="pots-style">
              {inventory.map(item => (
                <Item
                  key={item.id}
                  item={item}
                  setPaymentstate={this.setPaymentstate}
                />
              ))}
            </div>
          )}

          <OverAllChartsPage
            daily={parseFloat(this.state.daily)}
            weekly={parseFloat(this.state.weekly)}
            monthly={parseFloat(this.state.monthly)}
          />
        </div>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------

export default Inventory;
