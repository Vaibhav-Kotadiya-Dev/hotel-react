import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact_s1">
          <h1 className="mb-3">Contact Info</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br /> elit, sed do eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
          <table>
            <tr>
              <td>Address:</td>
              <td>856 Cordia Extension Apt. 356, Lake, US</td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>(12) 345 67890</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>info.colorlib@gmail.com</td>
            </tr>
            <tr>
              <td>Fax:</td>
              <td>+(12) 345 67890</td>
            </tr>
          </table>
        </div>
        <div className="add_review_form">
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
            style={{ border: "solid gray 0.5px", float: "right" }}
          ></input>
          <textarea
            className="d-block mt-4 mb-4 p-2"
            rows="6"
            type="textarea"
            placeholder="Your Message"
            style={{ border: "solid gray 0.5px", width: "100%" }}
          />
          <button className="_btn p-2 mb-5">SUBMIT NOW</button>
        </div>
      </div>
      <div className="map_container">
        <iframe
          className="map"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117496.28120639907!2d72.5352448!3d23.0326272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1660718933062!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
