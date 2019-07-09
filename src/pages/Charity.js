import React from "react";
// import CharityDonation from "./CharityDonation";
import { Redirect } from "react-router-dom";

class Charity extends React.Component {
  state = {
    showPage: false,
    showDonatePage: false
  };

  showDetails = () => {
    this.setState({
      showPage: true
    });
  };

  hideDetails = () => {
    this.setState({
      showPage: false
    });
  };

  updateShowDonatePage = () => {
    this.setState({
      showDonatePage: true
    });
  };

  render() {
    const { charity } = this.props;
    console.log(this.props.charity.logo);

    return (
      <div>
        {this.state.showDonatePage ? (
          <Redirect to={`/charities/${charity.id}`} />
        ) : (
          <div className="charity-box">
            <h2 className="charity-name">{charity.name}</h2>
            <img
              className="charity-image"
              src={require(`${charity.logo}`)}
              alt={charity.name}
            />
            <button id="card-button" className="view-charity" onClick={this.updateShowDonatePage}>
              Go to Charity
            </button>
            <br />
            <br />
          </div>
        )}
      </div>
    );
  }
}

export default Charity;
