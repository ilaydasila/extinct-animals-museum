import React from "react";

import "./animal.css";

const Animal = ({
  id = null,
  className = "",
  alt = "",
  name = "",
  img = "",
  onClick = function () {},
}) => {
  const imageClick = () => {
    console.log("Click");
  };
  return (
    <div className={className}>
      <img
        id={id}
        name={name}
        src={img}
        alt={alt}
        onClick={() => imageClick()}
      ></img>
    </div>
  );
};

export default Animal;
