import React from "react";
// import Moment from "react-moment";
// import 'moment-timezone';

// import ChartsPage from './PieChart'

const CharityModal = props => {

    // confirmDonate = () => {
    //     console.log("hello")
    //     // alert("Thanks for Donating")
    // }

//----------------------------------------------------------------------------------------------------------
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column"></div>


          <h1>{props.charity.name}</h1>
          <br/>
          <br/>
          

          <p>Hi, {props.user.username} thanks for donating to: {props.charity.name}!</p>

          {/* <p>{props.charity.description}</p> */}

        How much do you want to donate?

                    <select id="myDonate">
                    <option value="5"> £5.00 </option>
                    <option value="10" >£10.00</option>
                    <option value="15" >£15.00</option>
                    <option value="15" >£20.00</option>
                    <option value="15" >£25.00</option>
                    <option value="15" >£35.00</option>
                    <option value="15" >£45.00</option>
                    <option value="15" >£50.00</option>
                    </select>

                    <br/>
                    <br/>

            <button className="donate-button" onClick={ () => {alert("Thanks for Donating")}}>
                Confirm Donation
            </button>



        </div>
      </div>
    </div>
  );

};

export default CharityModal;
