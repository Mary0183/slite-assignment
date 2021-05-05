import React from "react";
import "./ManagementResources.css";
import Template from "../images/CaptureTemplate.JPG";

function ManagementResources() {
  return (
    <div className="management-container">
      <div>
        <h1> Management resources</h1>
      </div>

      <div className="callout-management callout-default-management">
        <div className="text-wrapper">
          <p className="management-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="template">
        <h2 className="template-ex">Template example:</h2>
        <img src={Template} alt="template"></img>
      </div>
    </div>
  );
}

export default ManagementResources;
