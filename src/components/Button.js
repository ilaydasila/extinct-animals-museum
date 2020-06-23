import React from "react";

const Button = ({
  type,
  className = "btn",
  disabled,
  onClick = function () {},
  children,
}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
