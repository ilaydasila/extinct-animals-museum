import React, { useState } from "react";

import DetailBox from "./DetailBox";
import ReasonLogo from "./ReasonLogo";
import Button from "./Button";
import { randomColor } from "../utils/randomColorGenerator";

import "./guide.css";

const Guide = ({ className, children }) => {
  const [show, setShow] = useState(false);

  function handleOpeningClick() {
    setShow(!show);
  }

  function handleClosingClick() {
    setShow(!show);
  }
  const reasonLogoNames = [
    "climateChange",
    "pollution",
    "invasiveSpecies",
    "habitatDestruction",
    "huntingPoaching",
  ];

  let detailBox;
  switch (className) {
    case "ruleBook hvr-wobble-bottom":
      detailBox = (
        <DetailBox show={show} title='Rule Book'>
          <div className='part'>
            <p>
              For having more quality time during the visit, there is some rules
              that you have to follow.
            </p>
            <p>Please carefullt read the rules before visiting the museum.</p>
          </div>
          <div className='rules'>
            <p>No Crossing the Red Line</p>
            <p>No Running</p>
            <p>No Flash Photography</p>
            <p>No Loud Talking</p>
            <p>No Food or Drink</p>
          </div>
          <Button onClick={() => handleClosingClick()}>CLOSE</Button>
        </DetailBox>
      );
      break;
    case "guideBook hvr-wobble-bottom":
      detailBox = (
        <DetailBox show={show} title='Guide Book'>
          <div className='part'>
            <p>
              Welcome to the very basic{" "}
              <span style={{ color: randomColor() }}>
                Extinct Animals Museum
              </span>
              .This website focuses on extincted animals due to humans and
              mainly designed for kids but also for anyone to show them how
              humanity can have bad unforgivable effects on life of animals.
            </p>
            <p>
              You can visit the museum with your{" "}
              <span style={{ color: randomColor() }}>mouse</span>, that easy.
              Clicking any animal in cage will open a tab with informations or
              clicking the door image will carry you to the other room with more
              animals. Here you can learn more about the museum and symbols
              more.
            </p>
            <p>
              Also I courage you to check rules book as well if you haven't
              check yet.
            </p>
          </div>
          <div className='part'>
            <p>
              When you click to any animal it will pop-up a tab with some pieces
              of information.
            </p>
            <p>
              <span style={{ color: randomColor(), fontSize: "35px" }}>1</span>{" "}
              The name of animal,
            </p>
            <p>
              <span style={{ color: randomColor(), fontSize: "35px" }}>2</span>{" "}
              A map with red zones to show was the posibble to find the animal,
            </p>
            <p>
              <span style={{ color: randomColor(), fontSize: "35px" }}>3</span>{" "}
              Information text about the animal,
            </p>
            <p>
              <span style={{ color: randomColor(), fontSize: "35px" }}>4</span>{" "}
              The reasons symbols which in
            </p>
          </div>
          <ReasonLogo
            showName='true'
            reasonLogoNames={reasonLogoNames}
          ></ReasonLogo>
          <Button onClick={() => handleClosingClick()}>CLOSE</Button>
        </DetailBox>
      );
      break;
    default:
      detailBox = null;
  }

  return (
    <>
      {detailBox}
      <li className={className} onClick={() => handleOpeningClick()}>
        {children}
      </li>
    </>
  );
};

export default Guide;
