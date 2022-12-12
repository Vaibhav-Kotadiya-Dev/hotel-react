import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  const { date, setDate } = props;
  return (
    <div className="datepicker">
      <DatePicker
        dateFormat="dd MMMM,yyyy"
        selected={date}
        onChange={(date) => setDate(date)}
      />
      <i
        id="date_icon"
        className="fas fa-calendar-alt"
        style={{ color: "#dfa974" }}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default DateSelector;
