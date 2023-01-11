import React from "react";

function Button(props) {
  // This function checks if the value of the button is an operator
  const isOperator = (val) => {
    return isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? "operator" : null
      }`}
    >
      {props.children}
    </div>
  );
}

export default Button;
