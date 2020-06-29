import React from "react";

import Image from "./Image";

import "./reasonLogo.css";

const ReasonLogo = ({ reasonLogoNames, showName = false }) => {
  return (
    <div className='logoContainer'>
      {reasonLogoNames.map((reasonLogo, i) => {
        const imgSource = `/assets/${reasonLogo}.png`;
        let name;
        switch (reasonLogo) {
          case "climateChange":
            name = "Climate Change";
            break;
          case "pollution":
            name = "Pollution";
            break;
          case "invasiveSpecies":
            name = "Invasive Species";
            break;
          case "habitatDestruction":
            name = "Habitat Destruction";
            break;
          case "huntingPoaching":
            name = "Hunting Poaching";
            break;
          default:
            break;
        }
        return (
          <div className='logoDiv' key={i}>
            <Image id='reasonLogo' img={imgSource} alt={reasonLogo}></Image>
            <p>{showName ? name : null}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReasonLogo;
