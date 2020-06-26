import React from "react";

import "./image.css";

const Image = ({
  className,
  id,
  name,
  img,
  src,
  alt,
  onClick = function () {},
  children,
}) => {
  return (
    <img
      className={className}
      id={id}
      name={name}
      src={img}
      alt={alt}
      onClick={onClick}
    ></img>
  );
};

export default Image;
