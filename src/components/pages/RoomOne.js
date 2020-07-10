import React from "react";
import { useState } from "react";
import Animal from "../Animal";

import ScrollContainer from "react-indiana-drag-scroll";

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
        "The passenger pigeon or wild pigeon, that was once common in North America. Some believe that there were three billion to five billion passenger pigeons in the United States when Europeans arrived in North America. The extinction of the Passenger Pigeon has two major causes. The primary cause is hunting them for their meat. Prior to colonization, Aboriginal Americans occasionally used pigeons for meat. In the early 19th century, commercial hunters began hunting and selling them in the city markets. Another significant reason for its extinction was deforestation. The birds traveled and reproduced in prodigious numbers, satiating predators before any substantial negative impact was made in the bird's population. As their numbers decreased along with their habitat, the birds could no longer rely on high population density for protection.",
      map: "/assets/passengerPigeonMap.png",
      reasons: ["huntingPoaching", "habitatDestruction"],
    },
    {
      id: 2,
      className: "seaMink",
      name: "Sea Mink",
      img: "/assets/seaMink.png",
      details:
        " The Mink is a soft creature that related to ermines, ferrets and weasels and look much like their relatives. Many members of the weasel family, minks included, have been hunted for their fur. It tends to be very soft and warm, especially in the winter when they grow thicker coats. The sea mink was no exception, and this is the main reason they went extinct. Until very recently, there were no laws that regulated trapping or hunting in order to protect endangered or potentially endangered species. That meant hunters and trappers could take as many mink as they wanted. There was a huge demand for fur like this in Europe, and so the sea mink were hunted to extinction.",
      map: "/assets/seaMinkMap.png",
      reasons: ["huntingPoaching"],
    },
    {
      id: 3,
      className: "tecopaPupfish",
      name: "Tecopa Pupfish",
      img: "/assets/tecopaPupfish.png",
      details:
        "The Tecopa pupfish was a species of fish that lived in hot springs in the Mojave Desert, USA and was only discovered in the 19th century.  The Tecopa Pupfish became extinct by cause of the drying out of waters, climate change and the introduction of other invasive species of fish to its natural habitat. In 1965, the springs where they lived were merged together to build a bathhouse, and the water became too hot and salty for the fish to survive. As a result, in 1970, the poor pupfish was added to the Endangered Species List – unfortunately, it was too late. By 1981, it was declared Extinct – another awful outcome of human development. The last sighting of a Tecopa pupfish was seen in 1970.",
      map: "/assets/tecopaPupfishMap.png",
      reasons: ["pollution", "invasiveSpecies", "habitatDestruction"],
    },
    {
      id: 4,
      className: "tasmanianTiger",
      name: "Tasmanian Tiger",
      img: "/assets/tasmanianTiger.png",
      details:
        "The Tasmanian tiger was once the world’s largest meat-eating marsupial and they were common across Australia. It looked a bit like a wolf, but had yellow-brown fur, stripes on its back and a thick, long tail. Although populations suffered disease and habitat loss, it’s believed humans were to blame for it's ultimate extinction. Since the fierce predators liked to feast on sheep and other livestock, European settlers were quick to kill them.",
      map: "/assets/tasmanianTigerMap.png",
      reasons: ["huntingPoaching", "habitatDestruction"],
    },
    {
      id: 5,
      className: "dodo",
      name: "Dodo",
      img: "/assets/dodo.png",
      details:
        "The dodo is a flightless bird, lived on only one island, Mauritius(they were endemic animals). Dodos were in the same family as the pigeon. Since they evolved in isolation from many predators, the dodo lost the power of flight because it was no advantage to them. Also they were not aware of humans and they were fearless of them. Because of these the dodo became easy pray for sailors. They got hunted but their main extinction reason was not this. While human population was rising on the island, they introduced other animals, including dogs, pigs, cats, rats, and crab-eating macaques, which plundered dodo nests and competed for the limited food resources. At the same time, humans destroyed the forest habitat of the dodos. The impact of the introduced animals on the dodo population, especially the pigs and macaques, is today considered more severe than that of hunting.",
      map: "/assets/dodoMap.png",
      reasons: ["huntingPoaching", "invasiveSpecies", "habitatDestruction"],
    },
  ]);
  return (
    <ScrollContainer className='scroll-container'>
      <div className={siblingFade ? "sibling-fade" : "animalList"}>
        {animalList.map((animal) => {
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
              reasons={animal.reasons}
            />
          );
        })}
      </div>
    </ScrollContainer>
  );
};

export default RoomOne;
