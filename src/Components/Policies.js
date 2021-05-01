import React from "react";
import "./Policies.css";

function Policies() {
  return (
    <div className="pc-container">
      <h1>Our Policies </h1>
      <div className="callout callout-default">
        <div className="grid-callout">
          <p>
            Here you can read about our work remote working agreement,
            guidelines for protecting sensitive information , and when remote
            employees should be available and working.
          </p>
        </div>
      </div>
      <div className="link-list">
        <ul>
          <li className="remote">
            <a className="remote-working" href="#remote working">
              💻Remote Work set up
            </a>
          </li>
          <li>
            <a className="cybersecurity" href="#cybersecurity">
              🛸Cybersecurity
            </a>
          </li>
          <li>
            <a className="work-schedule" href="#work schedule">
              ✔️Work schedule and availability
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Policies;
