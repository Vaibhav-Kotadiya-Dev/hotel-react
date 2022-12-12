import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import { Tab } from "@mui/material";
import { Link } from "react-router-dom";
// import PagesList from "./PagesList";
import OffCanvas from "./OffCanvas";

const NavigationBar = (props) => {
  const { value, setValue, isDesktop } = props;
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [showCanvas, setShowCanvas] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const handlePopupOpen = () => {
  //   setIsPopupOpen(true);
  // };
  // const handlePopupClose = () => {
  //   setIsPopupOpen(false);
  // };
  return (
    <div className="navigation_bar">
      <div className="navigation_bar_title_container">
        <Link className="link" to="/">
          <h1>Sona.</h1>
        </Link>
        {!isDesktop && (
          <i className="fas fa-bars" onClick={() => setShowCanvas(true)}></i>
        )}
        <OffCanvas showCanvas={showCanvas} setShowCanvas={setShowCanvas} />
      </div>
      {isDesktop && (
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="dark"
          TabIndicatorProps={{ style: { background: "#DEB887" } }}
          sx={{ "& .MuiTabs-flexContainer": { display: "block" } }}
        >
          <Tab
            className="link tab"
            to="/"
            component={Link}
            value="one"
            label="Home"
          />
          <Tab
            className="link tab"
            to="/rooms"
            component={Link}
            value="two"
            label="Rooms"
          />
          <Tab
            className="link tab"
            to="/voucher"
            component={Link}
            value="three"
            label="Voucher"
          />
          <Tab
            className="link tab"
            to="/about"
            component={Link}
            value="four"
            label="About Us"
          />
          {/* <Tab
            className="link tab"
            onMouseEnter={handlePopupOpen}
            onMouseLeave={handlePopupClose}
            value="five"
            label="Pages"
          /> */}
          {/* <Tab
           className="link"
           to="/news"
           component={Link}
           value="six"
           label="News"
         /> */}
          <Tab
            className="link tab"
            to="/contact"
            component={Link}
            value="seven"
            label="Contact"
          />
        </Tabs>
      )}
      {/* {isPopupOpen && (
        <PagesList
          handlePopupOpen={handlePopupOpen}
          handlePopupClose={handlePopupClose}
        />
      )} */}
    </div>
  );
};

export default NavigationBar;
