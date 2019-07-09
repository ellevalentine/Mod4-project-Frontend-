import React from "react";
import Charity from "./Charity";
import CharityDetails from "./CharityDetails";

class CharityContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      showPage: false,
      charity: null
    };
  }

  updateShowPage = (event, charity) => {
    event.preventDefault();
    this.setState({
      showPage: true,
      charity: charity
    });
  };

  showAllCharities = event => {
    event.preventDefault();
    this.setState({
      showPage: false
    });
  };

  render() {
    if (this.state.showPage) {
      return (
        <div>
          <CharityDetails
            charity={this.state.charity}
            showAllCharities={this.showAllCharities}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="charities-title">Charities</h2>
          <div>
            {this.props.charities.map(charity => (
              <Charity
                key={`charity-${charity.id}`}
                charity={charity}
                updateShowPage={this.updateShowPage}
              />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default CharityContainer;
