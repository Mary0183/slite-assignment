import React from "react";
import "./Policies.css";

function Policies() {
  return (
    <div className="policies-container">
      <h1>Our Policies </h1>
      <div className="callout callout-default">
        <div className="grid-callout">
          <p className="callout-text">
            Here you can read about our work remote working agreement,
            guidelines for protecting sensitive information , and when remote
            employees should be available and working.
          </p>
        </div>
      </div>
      <div className="link-list">
        <ul>
          <li className="remote">
            <h2 className="remote-working"> 💻Remote Work set up</h2>
            <p className="policies-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur porta est, sed pellentesque felis tincidunt ac.
            </p>
            <a className="read-more" href="#remote working">
              read more...
            </a>
          </li>
          <li>
            <h2 className="remote-working">🛸Cybersecurity </h2>

            <p className="policies-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur porta est, sed pellentesque felis tincidunt ac.
            </p>
            <a className="read-more" href="#remote working">
              read more...
            </a>
          </li>
          <li>
            <h2 className="remote-working">✔️Work schedule and availability</h2>
            <p className="policies-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consectetur porta est, sed pellentesque felis tincidunt ac.
            </p>
            <a className="read-more" href="#remote working">
              read more...
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Policies;
