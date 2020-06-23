import React, { useState } from "react";

import "./animal.css";

import DetailBox from "./DetailBox";
import Button from "./Button";

const Animal = ({ id, className, alt, name, img, siblingFadeHandler }) => {
  const [show, setShow] = useState(false);

  function handleOpeningClick() {
    setShow(!show);
    siblingFadeHandler();
  }

  function handleClosingClick() {
    setShow(!show);
    siblingFadeHandler();
  }

  return (
    <div className={className}>
      <DetailBox show={show}>
        <span>{name}</span>
        <Button onClick={() => handleClosingClick()}>close</Button>
      </DetailBox>
      <img
        id={id}
        name={name}
        src={img}
        alt={alt}
        onClick={() => handleOpeningClick()}
      ></img>
    </div>
  );
};

export default Animal;
