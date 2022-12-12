import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import "../Pages/Home/Home.css";
import DateSelector from "./DateSelector";
import "../Pages/Home/Home.css";
import { dateFormat } from "../Utils/Utils";
const Modal = (props) => {
  const options1 = ["2 Adults", "3 Adluts"];
  const options2 = ["1 Room", "2 Room"];
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const checkIn = dateFormat(checkInDate, "yyyy-MM-dd");
  const checkOut = dateFormat(checkOutDate, "yyyy-MM-dd");

  return (
    <>
      <div className="form">
        <h2 className="mt-3">{props.title}</h2>
        <form
          className="form"
          method="post"
          action={`https://hotels.cloudbeds.com/reservation/gO07wc#checkin=${checkIn}&checkout=${checkOut}`}
        >
          <div>
            <label className="mb-2 checkin" htmlFor="checkIn">
              Check In
            </label>
            <DateSelector date={checkInDate} setDate={setCheckInDate} />
          </div>
          <div>
            <label className="mb-2 checkout" htmlFor="checkOut">
              Check Out
            </label>
            <DateSelector date={checkOutDate} setDate={setCheckOutDate} />
          </div>
          <DropdownMenu label={"Guests :"} options={options1} />
          <DropdownMenu label={"Room"} options={options2} />
          <button type="submit" className="form_button">
            Check Availability
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
