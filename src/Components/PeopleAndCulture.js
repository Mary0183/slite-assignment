import React from "react";
import "./PeopleAndCulture.css";
import Info from "../images/Info.svg";

function PeopleAndCulture() {
  return (
    <div className="pc-container">
      <h1> People & Culture </h1>
      <div className="callout callout-default">
        <img className="info-icon" src={Info} alt="info icon" />
        <p>
          Here you'll find the important information related to our internal
          culture. You can read about our story, learn about values, and get the
          full overview of the tools we use.
        </p>
      </div>
    </div>
  );
}

export default PeopleAndCulture;
