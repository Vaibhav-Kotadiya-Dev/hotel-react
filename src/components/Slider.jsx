import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { img3, img4, img5 } from "../Utils/Utils";

const Slider = () => {
  return (
    <>
      <Carousel fade={true} interval={2000} pause={false}>
        <Carousel.Item>
          <img className="d-block sliderImg" src={img5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block sliderImg" src={img3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block sliderImg" src={img4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
