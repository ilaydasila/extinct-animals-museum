import React from "react";
import { useState } from "react";
import Animal from "../Animal";

import "./roomOne.css";

const RoomOne = (props) => {
  const [animalList] = useState([
    {
      id: 1,
      className: "passengerPigeon",
      name: "Passenger Pigeon",
      img: "/assets/passengerPigeon.png",
      details: "Dead",
    },
    {
      id: 2,
      className: "seaMink",
      name: "Sea Mink",
      img: "/assets/seaMink.png",
      details: "Dead",
    },
    {
      id: 3,
      className: "tecopaPupfish",
      name: "Tecopa Pupfish",
      img: "/assets/tecopaPupfish.png",
      details: "Dead",
    },
  ]);

  return (
    <div className='animalList'>
      {animalList.map((animal, i) => {
        return (
          <Animal
            className={animal.className}
            key={animal.id}
            id={animal.id}
            name={animal.name}
            title={animal.title}
            img={animal.img}
          />
        );
      })}
    </div>
  );
};

export default RoomOne;
