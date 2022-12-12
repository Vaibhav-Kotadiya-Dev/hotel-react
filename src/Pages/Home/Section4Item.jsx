import React from "react";
import ImgWithLoader from "../../components/ImgWithLoader";
import { img7 } from "../../Utils/Utils";
import "../Home/Home.css";

const Section4Item = (props) => {
  const { item } = props;
  return (
    <div className="s4_container">
      <div className="s4_img_container" id="a">
        <ImgWithLoader src={img7} />
      </div>
      <div className="s4_txt_container" id="b">
        <h1 style={{ color: "white" }}>Double Room</h1>
        <div>
          <h1 style={{ color: "#dfa974", display: "inline" }}>199$</h1>
          <span style={{ color: "white" }}>/Pernight</span>
        </div>
        <table style={{ color: "white", width: "max-content" }}>
          <tbody>
            <tr>
              <td>Size:</td>
              <td>30 ft</td>
            </tr>
            <tr>
              <td>Capacity:</td>
              <td>Max persion 5</td>
            </tr>
            <tr>
              <td>Bed:</td>
              <td>King Beds</td>
            </tr>
            <tr>
              <td>Services:</td>
              <td>Wifi, Television, Bathroom,...</td>
            </tr>
          </tbody>
        </table>
        <button className="btn_discover">MORE DETAILS</button>
      </div>
    </div>
  );
};

export default Section4Item;
