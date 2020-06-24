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
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis suscipit est, nec fermentum justo. Sed malesuada neque at nulla tempus, condimentum porta risus rutrum. Cras risus sapien, posuere ac tincidunt tincidunt, euismod nec eros. Integer id ipsum a justo ornare tristique sed ut lectus. Nulla suscipit purus in turpis maximus, vitae posuere odio consectetur. Quisque interdum vel erat ut vulputate. Aenean arcu elit, ultrices nec mattis non, aliquet id felis. Ut vestibulum, urna eget finibus ornare, dui arcu hendrerit urna, sed molestie lorem purus in tortor. Aliquam quis hendrerit lacus. Sed libero odio, elementum a nisi nec, commodo tempor ipsum. Aenean non mauris auctor, volutpat nibh vitae, gravida augue. Etiam mollis malesuada quam vel lacinia. Suspendisse tempus enim a libero tempus, quis fringilla enim fringilla. Suspendisse ex dolor, tempor sit amet enim in, congue gravida orci. Fusce tempor elit in dui consectetur, et volutpat ex ullamcorper.",
      map: "/assets/passengerPigeonMap.png",
    },
    {
      id: 2,
      className: "seaMink",
      name: "Sea Mink",
      img: "/assets/seaMink.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis suscipit est, nec fermentum justo. Sed malesuada neque at nulla tempus, condimentum porta risus rutrum. Cras risus sapien, posuere ac tincidunt tincidunt, euismod nec eros. Integer id ipsum a justo ornare tristique sed ut lectus. Nulla suscipit purus in turpis maximus, vitae posuere odio consectetur. Quisque interdum vel erat ut vulputate. Aenean arcu elit, ultrices nec mattis non, aliquet id felis. Ut vestibulum, urna eget finibus ornare, dui arcu hendrerit urna, sed molestie lorem purus in tortor. Aliquam quis hendrerit lacus. Sed libero odio, elementum a nisi nec, commodo tempor ipsum. Aenean non mauris auctor, volutpat nibh vitae, gravida augue. Etiam mollis malesuada quam vel lacinia. Suspendisse tempus enim a libero tempus, quis fringilla enim fringilla. Suspendisse ex dolor, tempor sit amet enim in, congue gravida orci. Fusce tempor elit in dui consectetur, et volutpat ex ullamcorper.",
      map: "/assets/seaMinkMap.png",
    },
    {
      id: 3,
      className: "tecopaPupfish",
      name: "Tecopa Pupfish",
      img: "/assets/tecopaPupfish.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis suscipit est, nec fermentum justo. Sed malesuada neque at nulla tempus, condimentum porta risus rutrum. Cras risus sapien, posuere ac tincidunt tincidunt, euismod nec eros. Integer id ipsum a justo ornare tristique sed ut lectus. Nulla suscipit purus in turpis maximus, vitae posuere odio consectetur. Quisque interdum vel erat ut vulputate. Aenean arcu elit, ultrices nec mattis non, aliquet id felis. Ut vestibulum, urna eget finibus ornare, dui arcu hendrerit urna, sed molestie lorem purus in tortor. Aliquam quis hendrerit lacus. Sed libero odio, elementum a nisi nec, commodo tempor ipsum. Aenean non mauris auctor, volutpat nibh vitae, gravida augue. Etiam mollis malesuada quam vel lacinia. Suspendisse tempus enim a libero tempus, quis fringilla enim fringilla. Suspendisse ex dolor, tempor sit amet enim in, congue gravida orci. Fusce tempor elit in dui consectetur, et volutpat ex ullamcorper.",
      map: "/assets/tecopaPupfishMap.png",
    },
    {
      id: 4,
      className: "dodo",
      name: "Dodo",
      img: "/assets/dodo.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis suscipit est, nec fermentum justo. Sed malesuada neque at nulla tempus, condimentum porta risus rutrum. Cras risus sapien, posuere ac tincidunt tincidunt, euismod nec eros. Integer id ipsum a justo ornare tristique sed ut lectus. Nulla suscipit purus in turpis maximus, vitae posuere odio consectetur. Quisque interdum vel erat ut vulputate. Aenean arcu elit, ultrices nec mattis non, aliquet id felis. Ut vestibulum, urna eget finibus ornare, dui arcu hendrerit urna, sed molestie lorem purus in tortor. Aliquam quis hendrerit lacus. Sed libero odio, elementum a nisi nec, commodo tempor ipsum. Aenean non mauris auctor, volutpat nibh vitae, gravida augue. Etiam mollis malesuada quam vel lacinia. Suspendisse tempus enim a libero tempus, quis fringilla enim fringilla. Suspendisse ex dolor, tempor sit amet enim in, congue gravida orci. Fusce tempor elit in dui consectetur, et volutpat ex ullamcorper.",
      map: "/assets/dodoMap.png",
    },
  ]);

  return (
    <>
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
    </>
  );
};

export default RoomOne;
