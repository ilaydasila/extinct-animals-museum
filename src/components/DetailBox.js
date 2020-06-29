import React from "react";

import "./detailBox.css";

import { randomColor } from "../utils/randomColorGenerator";
import Image from "./Image";

const DetailBox = ({ show, title, mapImg, alt, details, children }) => {
  const detailBoxClassName = show
    ? "detailBox display-block"
    : "detailBox display-none";
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: "30px",
    paddingTop: "30px",
    color: randomColor(),
    fontFamily: "Ribeye Marrow",
  };

  const showMap = mapImg ? (
    <div>
      <Image id='map' alt={alt} img={mapImg}></Image>
    </div>
  ) : null;

  return (
    <div className={detailBoxClassName}>
      <section className='detailBox-main'>
        <div style={titleStyle}>{title}</div>
        {showMap}
        <div className='details'>{details}</div>
        {children}
      </section>
    </div>
  );
};

export default DetailBox;
