import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { imgSrc, category, capacity, price } = props;
  const imgLoaded = () => {
    setIsLoading(false);
  };
  const imgError = () => {
    setIsLoading(false);
    setError(true);
  };
  return (
    <div className="mb-3">
      <div className="card">
        <div
          className="loader_container"
          style={{ height: "270px", width: "320px" }}
        >
          {isLoading && (
            <div className="loader">
              <CircularProgress color="secondary" />
            </div>
          )}
          {error && <p>something went wrong</p>}
          <img
            src={imgSrc}
            height="270px"
            onLoad={imgLoaded}
            onError={imgError}
          />
        </div>
        <div className="card_details">
          <h1 style={{ color: "black" }}>{category}</h1>
          <div>
            <h1 style={{ color: "#dfa974", display: "inline" }}>{price}$</h1>
            <span style={{ color: "black" }}>/Pernight</span>
          </div>
          <table style={{ color: "black", width: "max-content" }}>
            <tbody>
              <tr>
                <td>Size:</td>
                <td>30 ft</td>
              </tr>
              <tr>
                <td>Capacity:</td>
                <td>Max persion {capacity}</td>
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
          <button
            style={{ color: "black", width: "150px" }}
            className="btn_discover mb-3 mt-3"
          >
            <Link state={props.data} className="link" to="/pages/room-details">
              MORE DETAILS
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
