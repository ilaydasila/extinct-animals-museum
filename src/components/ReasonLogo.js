import React from "react";

import Image from "./Image";

const ReasonLogo = ({ reasonLogoNames }) => {
  return (
    <div>
      {reasonLogoNames.map((reasonLogo, i) => {
        const imgSource = `/assets/${reasonLogo}.png`;
        return (
          <Image
            key={i}
            id='reasonLogo'
            img={imgSource}
            alt={reasonLogo}
          ></Image>
        );
      })}
    </div>
  );
};

export default ReasonLogo;
