import React, { Component } from "react";
import ReactDOM from "react-dom";


import Dialog from '@material-ui/core/Dialog';
import PotDetails from "../components/PotDetails"



class Dashboard extends Component {

  state = { show: false };

  handleClick = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    return (
        <main>
          <br/>
          
          <Dialog open={this.state.show} onClose={ () => {this.setState({show: false})}}>
            <PotDetails item={this.props.item} setPaymentstate={this.props.setPaymentstate} />
          </Dialog>
          <button type="button" onClick={this.handleClick}>
            More Details
          </button>
        </main>
    );
  }
}

const container = document.createElement("div");
document.body.appendChild(container);
// ReactDOM.render(<Dashboard />, container);


export default Dashboard



