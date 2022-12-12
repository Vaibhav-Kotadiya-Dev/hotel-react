import React, { useState } from "react";
import ImgWithLoader from "../../components/ImgWithLoader";
import PageTitle from "../../components/PageTitle";
import { img10, img3, img5, img7, img9 } from "../../Utils/Utils";
import "./About.css";
import AboutUsVideo from "./AboutUsVideo";
import ImageWithText from "./ImageWithText";

const About = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <PageTitle title={"About Us"} page={"About Us"} />
      <div className="about_s1">
        <div className="about_s1_p1">
          <h1>Welcome To Sona.</h1>
          <p className="text-justify mt-4">
            Built in 1910 during the Belle Epoque period, this hotel is located
            in the center of Paris, with easy access to the city’s tourist
            attractions. It offers tastefully decorated rooms.
          </p>
        </div>
        <div>
          <ul>
            <li>20% Off On Accommodation.</li>
            <li>Complimentary Daily Breakfast</li>
            <li>3 Pcs Laundry Per Day</li>
            <li> Free Wifi.</li>
            <li> Discount 20% On F&B</li>
          </ul>
        </div>
      </div>
      <div className="about_s2">
        <ImageWithText
          text={"Restaurants Services"}
          no={1}
          width="360"
          height="520"
        />
        <ImageWithText
          text={"Travel & Camping"}
          no={2}
          width="360"
          height="520"
        />
        <ImageWithText text={"Event & Party"} no={3} width="360" height="520" />
      </div>
      <div className="about_s3">
        <div className="video_img_container">
          <ImgWithLoader src={img3} />
        </div>
        <div className="video_text">
          <h1>Discover Our Hotel & Services.</h1>
          <p style={{ fontSize: "large" }}>
            It S Hurricane Season But We Are Visiting Hilton Head Island
          </p>
          <button
            style={{ backgroundColor: "transparent", border: "none" }}
            onClick={() => setModalShow(true)}
          >
            <i id="play_btn" className="fa fa-play mt-3"></i>
          </button>
        </div>
      </div>
      <AboutUsVideo modalShow={modalShow} setModalShow={setModalShow} />
      <div className="section3-title">
        <span>Our Gallery</span>
        <h1>Discover Our Work</h1>
      </div>
      <div className="about_s4 mb-5">
        <div className="about_s4_i123">
          <div className="img1_container">
            <div className="img1">Room Luxury</div>
            <ImgWithLoader src={img10} />
          </div>
          <div className="about_s4_i23">
            <div className="img2_container">
              <div className="img2">Room Luxury</div>
              <ImgWithLoader src={img9} />
            </div>
            <div className="img3_container">
              <div className="img3">Room Luxury</div>
              <ImgWithLoader src={img7} />
            </div>
          </div>
        </div>
        <div className="img4_container">
          <div className="img4">Room Luxury</div>
          <ImgWithLoader src={img5} />
        </div>
      </div>
    </>
  );
};

export default About;
