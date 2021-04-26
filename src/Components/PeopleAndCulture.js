import React from "react";
import "./PeopleAndCulture.css";
import Info from "../images/Info.svg";

function PeopleAndCulture() {
  return (
    <div className="pc-container">
      <h1> People & Culture </h1>
      <div className="callout callout-default">
        <div className="grid-callout">
          <p>
            Here you'll find the important information related to our internal
            culture. You can read about our story, learn about values, and get
            the full overview of the tools we use.
          </p>
        </div>
      </div>
      <div className="link-list">
        <ul>
          <li>
            <a className="our-culture" href="#Our culture">
              Our culture
            </a>
          </li>
          <li>
            <a className="values" href="#values">
              Values
            </a>
          </li>
          <li>
            <a className="tips-n-tricks" href="#tips-n-tricks">
              Tips & tricks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PeopleAndCulture;
