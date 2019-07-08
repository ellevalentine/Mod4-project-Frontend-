import React from "react";
import RightArrow from "./RightArrow";
import LeftArrow from "./LeftArrow";
import Slide from "./Slide";

class Carousel extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [
        require("./are-you-ready-1.png"),
        require("./are-you-ready-2.png")
      ],
      index: 0,
      translateValue: 0
    };
  }

  nextSlide = () => {
    //if we are at the end of the array we want the index to reset
    if (this.state.index === this.state.images.length - 1) {
      return this.setState({
        index: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      index: prevState.index + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  previousSlide = () => {
    this.setState(currentState => ({
      index: currentState.index - 1,
      translateValue: currentState.translateValue + this.slideWidth()
    }));
  };

  render() {
    return (
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.state.images.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </div>
        <LeftArrow previousSlide={this.previousSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}
export default Carousel;
