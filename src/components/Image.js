import React from "react";

import "./image.css";

const Image = ({
  className,
  name,
  img,
  src,
  alt,
  onClick = function () {},
  children,
}) => {
  console.log(src);
  return (
    <img
      className={className}
      name={name}
      src={img}
      alt={alt}
      onClick={onClick}
    >
      {children}
    </img>
  );
};

export default Image;
