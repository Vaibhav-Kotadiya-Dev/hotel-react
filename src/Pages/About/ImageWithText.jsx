import React from "react";
import ImgWithLoader from "../../components/ImgWithLoader";
import "./About.css";

const ImageWithText = (props) => {
  return (
    <div className="img_container">
      <ImgWithLoader width={props.width} height={props.height} />
      <div className="text" style={{ color: "white", width: "100%" }}>
        <h2 style={{ textAlign: "center" }}>{props.text}</h2>
      </div>
    </div>
  );
};

export default ImageWithText;
