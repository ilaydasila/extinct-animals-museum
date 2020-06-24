import React from "react";

import "./detailBox.css";

import { randomColor } from "../utils/randomColorGenerator";

const DetailBox = ({ show, animalName, mapImg, alt, details, children }) => {
  const detailBoxClassName = show
    ? "detailBox display-block"
    : "detailBox display-none";
  const animalNameStyle = {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "30px",
    paddingTop: "30px",
    color: randomColor(),
    fontFamily: "Ribeye Marrow",
  };
  return (
    <div className={detailBoxClassName}>
      <section className='detailBox-main'>
        <div style={animalNameStyle}>{animalName}</div>
        <div>
          <img id='map' alt={alt} src={mapImg}></img>
        </div>
        <div className='animalDetails'>{details}</div>
        {children}
      </section>
    </div>
  );
};

export default DetailBox;
