import React from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const OffCanvas = (props) => {
  const canvasContentStyle = {
    height: "8vh",
    width: "50%",
    fontSize: "large",
  };
  const { showCanvas, setShowCanvas } = props;
  const handleClose = () => setShowCanvas(false);
  // const handleShow = () => setShowCanvas(true);

  return (
    <>
      <Offcanvas
        style={{ width: "75%", height: "100vh" }}
        show={showCanvas}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="canvasContainer">
            <button style={canvasContentStyle} className="header_btn mb-5">
              Booking Now
            </button>
            <div className="canvas_link mb-5">
              <ul>
                <li>
                  <Link
                    className="link"
                    to="/"
                    onClick={() => setShowCanvas(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="link"
                    to="/rooms"
                    onClick={() => setShowCanvas(false)}
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    className="link"
                    to="/voucher"
                    onClick={() => setShowCanvas(false)}
                  >
                    Voucher
                  </Link>
                </li>
                <li>
                  <Link
                    className="link"
                    to="/about"
                    onClick={() => setShowCanvas(false)}
                  >
                    About Us
                  </Link>
                </li>
                {/* <li>
                  <Link
                    className="link"
                    to="/pages/room-details"
                    onClick={() => setShowCanvas(false)}
                  >
                    Pages
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="link"
                    to="/contact"
                    onClick={() => setShowCanvas(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3" style={{ height: "100%" }}>
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
            </div>
            <div className="mb-3">
              <i
                className="fa fa-phone mx-2"
                style={{ color: "#DEB887", textAlign: "center" }}
                aria-hidden="true"
              ></i>
              <span>(12) 345 67890</span>
            </div>
            <div className="mb-3">
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
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
