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
      <Image className='fence' alt='fence' img='./assets/fence.png'></Image>
    </div>
  );
}

export default App;
