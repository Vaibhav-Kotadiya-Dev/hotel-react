import React from "react";
import "../Pages/Home/Home.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropdownMenu = (props) => {
  const defaultOption = props.options[0];
  return (
    <div>
      <label className="mb-2" htmlFor="dropdown">
        {props.label}
      </label>
      <Dropdown
      className="dropdown"
        options={props.options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
        arrowClassName='myArrowClassName'
      />
    </div>
  );
};

export default DropdownMenu;
