import React from "react";

import "./button.css";

const Button = ({
  type,
  className = "btn",
  disabled,
  onClick = function () {},
  children,
}) => {
  return (
    <button className='btn' type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
