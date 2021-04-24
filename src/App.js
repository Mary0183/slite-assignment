import "./App.css";
import React from "react";
import Logo1 from "./images/Slite.svg";
import Logo2 from "./images/logo--color.svg";
import Sidebar from "./Components/Sidebar.js";

// import wave from "./images/wave.svg";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img className="logo-1" src={Logo1} />
        <img className="logo-2" src={Logo2} />
      </div>

      <Sidebar />
    </div>
  );
}

export default App;
