import React from "react";

const Slide = props => {
  return (
    <div className="slide">
      <img className="image-slider" src={props.image} alt="marketing" />
    </div>
  );
};

export default Slide;
