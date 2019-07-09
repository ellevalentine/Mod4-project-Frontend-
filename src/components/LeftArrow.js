import React from "react";

class LeftArrow extends React.Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.previousSlide}>
        <i className="angle double left icon" aria-hidden="true" />
      </div>
    );
  }
}

export default LeftArrow;
