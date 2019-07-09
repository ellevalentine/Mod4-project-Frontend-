import React, { Component } from "react";
import ReactDOM from "react-dom";


import Dialog from '@material-ui/core/Dialog';
import CharityModal from "../components/charityDonateModal"



class CharityDash extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    return (
        <main>
          <br/>
          
          <Dialog open={this.state.show} onClose={ () => {this.setState({show: false})}}>
            <CharityModal user={this.props.user} charity={this.props.charity}  />
          </Dialog>
          <button type="button" className="donate-button" onClick={this.handleClick}>
            Donate
          </button>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);


export default CharityDash



