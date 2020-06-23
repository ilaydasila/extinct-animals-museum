import React, { useState } from "react";

import "./animal.css";

import DetailBox from "./DetailBox";
import Button from "./Button";

const Animal = ({ id, className, alt, name, img }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={className}>
      <DetailBox show={show}>
        <span>{name}</span>
        <Button onClick={() => setShow(!show)}>close</Button>
      </DetailBox>
      <img
        id={id}
        name={name}
        src={img}
        alt={alt}
        onClick={() => setShow(!show)}
      ></img>
    </div>
  );
};

export default Animal;
