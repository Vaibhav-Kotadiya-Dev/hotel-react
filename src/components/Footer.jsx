import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-3">
      <div className="f_part1">
        <div className="f_section">
          <h1>Sona.</h1>
          <p>
            We inspire and reach millions of travelers across 90 local websites
          </p>
          <div className="d-flex">
            <i id="fb" className="fa-brands fa-facebook-f mx-2 "></i>
            <i
              id="tw"
              className="fa-brands fa-twitter mx-2 "
              aria-hidden="true"
            ></i>
            {/* <i id="ta" className="fa fa-tripadvisor mx-2"></i> */}
            <i
              id="insta"
              className="fa-brands fa-instagram mx-2"
              aria-hidden="true"
            ></i>
            <i
              id="yt"
              className="fa-brands fa-youtube mx-2"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="f_section">
          <h5>CONTACT US</h5>
          <p>(12) 345 67890</p>
          <p>info.colorlib@gmail.com</p>
          <p>856 Cordia Extension Apt. 356, Lake,</p>
          <p>United State</p>
        </div>
        <div className="f_section">
          <h5>NEW LATEST</h5>
          <p>Get the latest updates and offers.</p>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 d-inline-block"
              style={{ backgroundColor: "black", color: "white" }}
            />
            <button className="p-2 d-inline-block f_btn">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="f_part2">
        <div className="line1">
          <Link to="/contacts" className="f_link">
            Contact
          </Link>
          <Link to="/contacts" className="f_link">
            Privacy
          </Link>
          <Link to="/contacts" className="f_link">
            Environmental Policy
          </Link>
          <Link to="/contacts" className="f_link">
            Terns of use
          </Link>
        </div>
        <div className="line2">
          <div>Copyright ©2022 All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
