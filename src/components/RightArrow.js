import React from "react";

class RightArrow extends React.Component {
  render() {
    return (
      <div className="nextArrow" onClick={this.props.nextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
      </div>
    );
  }
}

export default RightArrow;
