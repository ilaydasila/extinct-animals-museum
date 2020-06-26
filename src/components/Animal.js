import React, { useState } from "react";

import DetailBox from "./DetailBox";
import Image from "./Image";
import Button from "./Button";

import ReasonLogo from "./ReasonLogo";

const Animal = ({
  id,
  className,
  alt,
  name,
  img,
  details,
  map,
  siblingFadeHandler,
  reasons,
}) => {
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
      <DetailBox
        show={show}
        animalName={name}
        details={details}
        mapImg={map}
        alt={alt}
      >
        <ReasonLogo reasonLogoNames={reasons}></ReasonLogo>
        <Button onClick={() => handleClosingClick()}>CLOSE</Button>
      </DetailBox>
      <Image
        className={className}
        name={name}
        img={img}
        alt={alt}
        onClick={() => handleOpeningClick()}
      ></Image>
    </div>
  );
};

export default Animal;
