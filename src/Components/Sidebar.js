import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="container">
        <div className="grid-container-row">
          <h1>row </h1>
        </div>
        <div className="grid-container-col">
          <div className="sidenav-grid">
            <a href="#Favorites">Favorites</a>
            <a href="#Favorites">Favorites</a>
            <a href="#Favorites">Favorites</a>
            <a href="#Favorites">Favorites</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
