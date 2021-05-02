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
      <div className="link-list">
        <div className="hello">
          <Link to="http://example.com/" className="our-culture">
            Our culture
          </Link>
        </div>
        <div className="hello1">
          <Link to="http://example.com/" className="values">
            Values
          </Link>
        </div>
        <div className="hello2">
          <Link to="http://example.com/" className="tips-n-tricks">
            Tips & tricks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PeopleAndCulture;
