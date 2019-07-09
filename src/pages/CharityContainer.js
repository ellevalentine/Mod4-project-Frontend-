import React from "react";
import Charity from "./Charity";

class CharityContainer extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui three colum grid">
        <h2 className="charities-title">Charities</h2>
        <div className="all-charities">
          {this.props.charities.map(charity => (
            <Charity
              key={`charity-${charity.id}`}
              charity={charity}
              user={this.props.user}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CharityContainer;
