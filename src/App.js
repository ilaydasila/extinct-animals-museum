import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import RoomOne from "./components/pages/RoomOne";
import Image from "./components/Image";

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <RoomOne></RoomOne>
    </div>
  );
}

export default App;
