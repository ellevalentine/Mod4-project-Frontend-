import React from "react";

class RightArrow extends React.Component {
  render() {
    return (
      <div className="nextArrow" onClick={this.props.nextSlide}>
        <i className="angle double right icon" aria-hidden="true" />
      </div>
    );
  }
}

export default RightArrow;
