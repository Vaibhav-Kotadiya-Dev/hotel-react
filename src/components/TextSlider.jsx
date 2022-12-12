import React from "react";
import Carousel from "react-bootstrap/Carousel";

const TextSlider = () => {
  return (
    <>
      <Carousel
        slide={true}
        interval={5000}
        pause={false}
        wrap={true}
        variant={"light"}
      >
        <Carousel.Item>
          <div className="textSlider_content">
            <p className="text-justify">
              After a construction project took longer than expected, my
              husband, my daughter and I needed a place to stay for a few
              nights. As a Chicago resident, we know a lot about our city,
              neighborhood and the types of housing options available and
              absolutely love our vacation at Sona Hotel.
            </p>
            <div>
              <div className="d-inline">
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
              </div>
              <h3 className="d-inline"> - Alexander Vasquez</h3>
            </div>
            <img src="https://technext.github.io/sona/img/testimonial-logo.png" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="textSlider_content">
            <p className="text-justify">
              After a construction project took longer than expected, my
              husband, my daughter and I needed a place to stay for a few
              nights. As a Chicago resident, we know a lot about our city,
              neighborhood and the types of housing options available and
              absolutely love our vacation at Sona Hotel.
            </p>
            <div>
              <div className="d-inline">
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
              </div>
              <h3 className="d-inline"> - Alexander Vasquez</h3>
            </div>
            <img src="https://technext.github.io/sona/img/testimonial-logo.png" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="textSlider_content">
            <p className="text-justify">
              After a construction project took longer than expected, my
              husband, my daughter and I needed a place to stay for a few
              nights. As a Chicago resident, we know a lot about our city,
              neighborhood and the types of housing options available and
              absolutely love our vacation at Sona Hotel.
            </p>
            <div>
              <div className="d-inline">
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
                <i className="fas fa-star" style={{ color: "orange" }}></i>
              </div>
              <h3 className="d-inline"> - Alexander Vasquez</h3>
            </div>

            <img src="https://technext.github.io/sona/img/testimonial-logo.png" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default TextSlider;
