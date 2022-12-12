import { Avatar, Rating } from "@mui/material";
import React from "react";

const Review = () => {
  return (
    <div className="review">
      <Avatar
        className="avatar"
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <div className="verticle_line mx-3"></div>
      <div className="review__rating">
        <p style={{ color: "#dfa974", display: "inline" }}>27 Aug 2019</p>
        <Rating name="read-only" value={2.5} readOnly sx={{ float: "right" }} />
        <h2 className="mb-2">Brandon Kelley</h2>
        <p className="mb-2">
          Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora.
          incidunt ut labore et dolore magnam.
        </p>
      </div>
    </div>
  );
};

export default Review;
