import React from "react";
import "./../styles/ClearButton.css";

const ClearButton = (props) => {
  return <div className="clear-btn">{props.children}</div>;
};

export default ClearButton;
