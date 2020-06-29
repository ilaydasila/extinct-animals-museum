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
            <Guide className='guideBook hvr-wobble-bottom'>GUIDE BOOK</Guide>
            <Guide className='ruleBook hvr-wobble-bottom'>RULE BOOK</Guide>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
