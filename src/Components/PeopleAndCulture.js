import React from "react";
import { Link } from "react-router-dom";
import "./PeopleAndCulture.css";

function PeopleAndCulture() {
  return (
    <div className="pc-container">
      <h1> People & culture </h1>
      <div className="callout callout-default">
        <div className="grid-callout">
          <p className="p-text">
            Here you'll find the important information related to our internal
            culture. You can read about our story, learn about values, and get
            the full overview of the tools we use.
          </p>
        </div>
      </div>
      <div className="link-options">
        <ul>
          <li>
            <a href="http://example.com/" className="people-culture">
              Our culture
            </a>
          </li>
          <li>
            <a href="http://example.com/" className="people-culture">
              Values
            </a>
          </li>
          <li>
            <a href="http://example.com/" className="people-culture">
              Tips & tricks
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PeopleAndCulture;
