import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImgWithLoader from "../../components/ImgWithLoader";
import Modal from "../../components/Modal";
import PageTitle from "../../components/PageTitle";
import Review from "../../components/Review";
import { img1, img4 } from "../../Utils/Utils";
import "./RoomDetails.css";

const RoomDetails = () => {
  const [roomData, setRoomData] = useState({
    imgSrc: img4,
    category: "Premium Room",
    price: 199,
    capacity: 3,
  });
  const getData = useLocation();
  useEffect(() => {
    if (getData.state !== null) {
      setRoomData(getData.state);
      console.log(getData.state);
    }
  }, [getData.state]);
  return (
    <>
      <PageTitle title={"Our Rooms"} page={"Rooms"} />
      <div className="rooms_s2 px-5">
        <div className="room_s2_div1">
          <div className="room_s2_div1_img">
            <ImgWithLoader src={roomData.imgSrc} />
          </div>
          <div className="rooms_txt_container mt-3">
            <div className="rd mb-2">
              <h1 style={{ color: "black" }}>{roomData.category}</h1>
              <div className="mb-2">
                <Rating name="read-only" value={2.5} readOnly />
                <button className="_btn p-2 mx-2">Booking Now</button>
              </div>
            </div>
            <div className="mb-2">
              <h1 style={{ color: "#dfa974", display: "inline" }}>
                {roomData.price}$
              </h1>
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
                  <td>Max persion {roomData.capacity}</td>
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
            <p className="text-justify pb-2">
              Motorhome or Trailer that is the question for you. Here are some
              of the advantages and disadvantages of both, so you will be
              confident when purchasing an RV. When comparing Rvs, a motorhome
              or a travel trailer, should you buy a motorhome or fifth wheeler?
              The advantages and disadvantages of both are studied so that you
              can make your choice wisely when purchasing an RV. Possessing a
              motorhome or fifth wheel is an achievement of a lifetime. It can
              be similar to sojourning with your residence as you search the
              various sites of our great land, America.
            </p>
            <p className="text-justify pb-2">
              The two commonly known recreational vehicle classes are the
              motorized and towable. Towable rvs are the travel trailers and the
              fifth wheel. The rv travel trailer or fifth wheel has the
              attraction of getting towed by a pickup or a car, thus giving the
              adaptability of possessing transportation for you when you are
              parked at your campsite.
            </p>
            <hr className="w-100" />
          </div>
          <div>
            <h2>REVIEWS</h2>
            <Review />
            <Review />
          </div>
          <div className="add_review_form">
            <h2>ADD REVIEW</h2>
            <input
              type="text"
              className="mt-4 mb-4 p-2"
              placeholder="Name*"
              style={{ border: "solid gray 0.5px" }}
            ></input>
            <input
              type="email"
              className="mt-4 mb-4 p-2"
              placeholder="Email*"
              style={{
                border: "solid gray 0.5px",
                float: "right",
              }}
            ></input>
            <div>
              Your Rating:
              <Rating
                name="simple-controlled"
                value={3}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </div>
            <textarea
              className="d-block mt-4 mb-4 p-2"
              rows="6"
              type="textarea"
              placeholder="Your Review"
              style={{ border: "solid gray 0.5px", width: "100%" }}
            />
            <button className="_btn p-2 mb-5">SUBMIT NOW</button>
          </div>
        </div>
        <div className="modal2">
          <Modal title={"Your Reservation"} />
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
