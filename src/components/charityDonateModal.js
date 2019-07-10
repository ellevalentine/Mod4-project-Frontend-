import React from "react";
// import Moment from "react-moment";
// import 'moment-timezone';

// import ChartsPage from './PieChart'

const CharityModal = props => {
  // confirmDonate = () => {
  //     console.log("hello")
  //     // alert("Thanks for Donating")
  // }

  let userId = props.user.id;
  let charityId = props.charity.id;
  let userBalance = props.user.balance;
  let charityBalance = props.charity.balance;
  //----------------------------------------------------------------------------------------------------------
  return (
    <div className="ui segment">
      <div className="ui two column left aligned grid">
        <div className="row">
          <div />
          <h1>{props.charity.name}</h1>
          <br />
          <br />
          <p>
            Hi, {props.user.username} thanks for donating to:{" "}
            {props.charity.name}!
          </p>
          {/* <p>{props.charity.description}</p> */}
          How much do you want to donate?
          <form
            onSubmit={event =>
              props.donate(
                event,
                userId,
                charityId,
                userBalance,
                charityBalance
              )
            }
          >
            <select id="myDonate" className="confirm-donation">
              <option value="5"> £5.00 </option>
              <option value="10">£10.00</option>
              <option value="15">£15.00</option>
              <option value="20">£20.00</option>
              <option value="25">£25.00</option>
              <option value="35">£35.00</option>
              <option value="45">£45.00</option>
              <option value="50">£50.00</option>
            </select>
            <br />
            <br />
            <button
              className="donate-button"
              onClick={() => {
                alert("Thanks for Donating");
              }}
            >
              Confirm Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CharityModal;
