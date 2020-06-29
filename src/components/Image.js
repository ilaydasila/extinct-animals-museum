import React from "react";

import "./image.css";

const Image = ({ className, id, name, img, alt, onClick = function () {} }) => {
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
