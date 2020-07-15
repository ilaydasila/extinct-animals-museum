import React, { useState } from "react";

import DetailBox from "./DetailBox";
import ReasonLogo from "./ReasonLogo";
import Button from "./Button";
import { randomColor } from "../utils/randomColorGenerator";

import "./guide.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faTumblrSquare,
} from "@fortawesome/free-brands-svg-icons";

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
            <p className='rule-info'>
              To have a better time during the visit, here are some rules you
              need to follow
            </p>
            <p className='rule-info-last'>
              Please carefully read the rules before entering the museum
            </p>
          </div>
          <div className='rules'>
            <p>No Crossing the Red Line</p>
            <p>No Running</p>
            <p>No Flash Photography</p>
            <p>No Loud Talking</p>
            <p>No Food or Drink</p>
          </div>
          <div className='part'>
            <p>Thank you for the visit and enjoy your stay</p>
          </div>
          <Button onClick={() => handleClosingClick()}>CLOSE</Button>
        </DetailBox>
      );
      break;
    case "guideBook hvr-wobble-bottom":
      detailBox = (
        <DetailBox show={show} title='Guide Book'>
          <div className='part intro'>
            <p className='info'>
              Welcome to the one and only{" "}
              <span style={{ color: randomColor() }}>
                Extinct Animals Museum
              </span>
              . This website focuses on animals extinct due to human
              involvement. It is mainly designed for children but can also work
              for anyone interested in how humanity can have negative influence
              on the life of animals.
            </p>
            <p className='info'>
              You can visit the museum with your{" "}
              <span style={{ color: randomColor() }}>mouse</span>, it's that
              easy. Clicking any animal in the exhibition will open a tab with
              information and clicking the door will bring you to the other room
              with more animals.
            </p>
          </div>
          <div className='part'>
            <p>Here you can learn more about the museum.</p>
            <p className='info'>
              When you click on an animal you will find out these important
              information:
            </p>
            <p className='info'>
              <span style={{ color: randomColor(), fontSize: "35px" }}>1</span>{" "}
              The name of animal
            </p>
            <p className='info'>
              <span style={{ color: randomColor(), fontSize: "35px" }}>2</span>{" "}
              A map with red zones showing where was it posibble to find the
              animal
            </p>
            <p className='info'>
              <span style={{ color: randomColor(), fontSize: "35px" }}>3</span>{" "}
              Informational text about the animal
            </p>
            <p className='info'>
              <span style={{ color: randomColor(), fontSize: "35px" }}>4</span>{" "}
              Symbol explaning how it was brought to extinction
            </p>
          </div>
          <ReasonLogo
            showName='true'
            reasonLogoNames={reasonLogoNames}
          ></ReasonLogo>
          <div className='part end'>
            <p>
              I also encourage you to check the museum rules if you haven't
              checked it yet
            </p>
          </div>
          <Button onClick={() => handleClosingClick()}>CLOSE</Button>
        </DetailBox>
      );
      break;
    case "about hvr-wobble-bottom":
      detailBox = (
        <DetailBox show={show} title='About'>
          <p className='about'>
            Code and Drawings by <span>IlaydaSila</span>
          </p>
          <p className='links'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/ilaydasila'
            >
              <FontAwesomeIcon className='github' icon={faGithubSquare} />
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://ilaydasilart.tumblr.com'
            >
              <FontAwesomeIcon className='tumblr' icon={faTumblrSquare} />
            </a>
          </p>
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
