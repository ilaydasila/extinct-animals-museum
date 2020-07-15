import React from "react";

import "./navbar.css";

import Guide from "./Guide";
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <div className='brand-name'>
            <li>Extinct Animals Museum</li>
          </div>
          <div className='nav-guide-container'>
            <Guide className='guideBook hvr-wobble-bottom'>MUSEUM GUIDE</Guide>
            <Guide className='ruleBook hvr-wobble-bottom'>RULES</Guide>
            <Guide className='about hvr-wobble-bottom'>ABOUT</Guide>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
