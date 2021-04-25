import "./App.css";
import React from "react";
import Logo1 from "./images/Slite.svg";
import Logo2 from "./images/logo--color.svg";
import Sidebar from "./Components/Sidebar.js";
import Breadcrumbs from "./Components/Breadcrumbs";

import PeopleAndCulture from "./Components/PeopleAndCulture";

// import wave from "./images/wave.svg";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img className="logo-1" src={Logo1} />
        <img className="logo-2" src={Logo2} />
      </div>
      <Breadcrumbs />

      <div className="app-container">
        <div className="grid-sidebar">
          <Sidebar />
        </div>
        <div className="grid-pc">
          <PeopleAndCulture />
        </div>
      </div>
    </div>
  );
}

export default App;
