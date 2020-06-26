import React, { useState } from "react";

import DetailBox from "./DetailBox";
import ReasonLogo from "./ReasonLogo";
import Button from "./Button";

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
    case "ruleBook":
      detailBox = (
        <DetailBox show={show} details="don't use flash">
          <Button onClick={() => handleClosingClick()}>CLOSE</Button>
        </DetailBox>
      );
      break;
    case "guideBook":
      detailBox = (
        <DetailBox show={show} details='red dot on map'>
          <ReasonLogo reasonLogoNames={reasonLogoNames}></ReasonLogo>
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
