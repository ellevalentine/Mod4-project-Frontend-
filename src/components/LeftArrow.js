import React from "react";

class LeftArrow extends React.Component {
  render() {
    return (
      <div className="backArrow" onClick={this.props.previousSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
      </div>
    );
  }
}

export default LeftArrow;
