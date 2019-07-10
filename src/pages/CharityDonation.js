import React from "react";

import CharityDash from "../components/charityDashBoard";

class CharityDonation extends React.Component {
  state = {
    charity: this.props.charities.find(
      charity => charity.id === parseInt(this.props.match.params.id)
    ),
    showDonateOption: false
  };

  updateDonateOption = () => {
    this.setState({
      showDonateOption: true
    });
  };

  showDescription = () => {
    return (
      <div className="ui two column grid">
        <div className="column">
          <h2 className="ui segment charity-donation-name">
            Charity: {this.state.charity.name}
          </h2>
          <img
            className="ui segment charity-donation-image"
            src={require(`${this.state.charity.logo}`)}
            alt={this.state.charity.name}
          />
        </div>
        <div className="middle aligned column">
          <div className="ui segment">
            <h4 className="donation-details">
              Description:{" "}
              <span className="details-body">
                {this.state.charity.description}
              </span>
            </h4>
            <h4 className="donation-details">
              Location:{" "}
              <span className="details-body">{this.state.charity.address}</span>
            </h4>
            <h4 className="donation-details">
              Website:{" "}
              <span className="details-body">{this.state.charity.website}</span>
            </h4>
          </div>
          <div className="ui segment">
            <CharityDash
              user={this.props.user}
              charity={this.state.charity}
              donate={this.props.donateAndUpdateState}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>{this.state.charity ? this.showDescription() : <h1>404</h1>}</div>
    );
  }
}

export default CharityDonation;
