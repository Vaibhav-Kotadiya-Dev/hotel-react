import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const { isDesktop } = props;
  return (
    <>
      {isDesktop && (
        <header className="header">
          <div className="header_content">
            <div>
              <i
                className="fa fa-phone mx-2"
                style={{ color: "#DEB887", textAlign: "center" }}
                aria-hidden="true"
              ></i>
              <span>(12) 345 67890</span>
              <span className="vertical_line mx-2"></span>
              <i
                className="fa fa-envelope"
                style={{
                  color: "#DEB887",
                  marginLeft: "18px",
                  marginRight: "10px",
                }}
                aria-hidden="true"
              ></i>
              <span>info.colorlib@gmail.com</span>
            </div>
            <div style={{ height: "100%" }}>
              <Link to="/facebook">
                <i className="fa-brands fa-facebook-f mx-2 link"></i>
              </Link>
              <Link to="/twitter">
                <i
                  className="fa-brands fa-twitter mx-2 link"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="/tripadvisor">
                <i
                  className="fa-brands fa-tripadvisor mx-2 link"
                  aria-hidden="true"
                ></i>
              </Link>
              <Link to="/instagram">
                <i
                  className="fa-brands fa-instagram mx-2 link"
                  aria-hidden="true"
                ></i>
              </Link>
              <button className="header_btn mx-3">Booking Now</button>
            </div>
          </div>
          <hr style={{ height: "3px", margin: 0 }} />
        </header>
      )}
    </>
  );
};

export default Header;
