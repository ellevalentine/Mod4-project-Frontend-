import React from "react";

class Charity extends React.Component {
  state = {
    showPage: false
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

  render() {
    const { charity } = this.props;
    console.log(this.props.charity.logo);

    return (
      <div className="charity-box">
        <h2 className="charity-name">{charity.name}</h2>
        <img
          className="charity-image"
          src={require(`${charity.logo}`)}
          alt={charity.name}
        />
        <br />
        <br />
        {this.state.showPage ? (
          <div className="charity-details">
            <h3>
              Description:{" "}
              <span className="details">{charity.description}</span>
            </h3>
            <h3>
              Address: <span className="details">{charity.address}</span>
            </h3>
            <h3>
              Webstie: <span className="details">{charity.website}</span>
            </h3>
            <button
              className="donate"
              onClick={console.log("donate button clicked")}
            >
              Donate
            </button>
            <button className="charity-button" onClick={this.hideDetails}>
              ▲
            </button>
          </div>
        ) : (
          <>
            <div>
              <button
                color="secondary"
                className="donate"
                onClick={console.log("donate button clicked")}
              >
                Donate
              </button>
            </div>
            <div>
              <button
                color="secondary"
                className="charity-button"
                onClick={this.showDetails}
              >
                ▼ info
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Charity;
