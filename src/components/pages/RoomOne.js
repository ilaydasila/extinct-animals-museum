import React from "react";
import { useState } from "react";
import Animal from "../Animal";

import "./roomOne.css";

const RoomOne = (props) => {
  const [siblingFade, setSiblingFade] = useState(true);

  const [animalList] = useState([
    {
      id: 1,
      className: "passengerPigeon",
      name: "Passenger Pigeon",
      img: "/assets/passengerPigeon.png",
      details: "Dead",
      map: "",
    },
    {
      id: 2,
      className: "seaMink",
      name: "Sea Mink",
      img: "/assets/seaMink.png",
      details: "Dead",
      map: "",
    },
    {
      id: 3,
      className: "tecopaPupfish",
      name: "Tecopa Pupfish",
      img: "/assets/tecopaPupfish.png",
      details: "Dead",
      map: "",
    },
    {
      id: 4,
      className: "dodo",
      name: "Dodo",
      img: "/assets/dodo.png",
      details: "Dead",
      map: "/assets/dodoMap.png",
    },
  ]);

  return (
    <div className={siblingFade ? "sibling-fade" : "animalList"}>
      {animalList.map((animal, i) => {
        return (
          <Animal
            className={animal.className}
            key={animal.id}
            id={animal.id}
            name={animal.name}
            title={animal.title}
            img={animal.img}
            details={animal.details}
            map={animal.map}
            siblingFadeHandler={() => setSiblingFade(!siblingFade)}
          />
        );
      })}
    </div>
  );
};

export default RoomOne;
