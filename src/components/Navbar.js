import React from "react";

import "./navbar.css";

import Guide from "./Guide";
const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>Extinct Animals Museum</li>
          <div className='nav-guide-container'>
            <Guide className='guideBook hvr-wobble-bottom'>MUSEUM GUIDE</Guide>
            <Guide className='ruleBook hvr-wobble-bottom'>RULES</Guide>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
