import React from "react";

import "./detailBox.css";

import { randomColor } from "../utils/randomColorGenerator";

const DetailBox = ({ show, animalName, children }) => {
  const detailBoxClassName = show
    ? "detailBox display-block"
    : "detailBox display-none";
  const animalNameStyle = {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "24px",
    paddingTop: "10px",
    color: randomColor(),
  };
  return (
    <div className={detailBoxClassName}>
      <section className='detailBox-main'>
        <div className='AnimalName' style={animalNameStyle}>
          {animalName}
        </div>
        {children}
      </section>
    </div>
  );
};

export default DetailBox;
