import "./App.css";
import react from "react";
import Logo1 from "./images/Slite.svg";
import Logo2 from "./images/logo--color.svg";

// import wave from "./images/wave.svg";

function App() {
  return (
    <div className="App">
      <div className="logo-grid">
        <img className="logo-1" src={Logo1} />
        <img className="logo-2" src={Logo2} />
      </div>

      <div className="container">
        <div className="grid-container-colm">
          <h1>columns</h1>
        </div>
        <div className="grid-container-row">
          <h1>row</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
