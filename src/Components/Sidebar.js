import React from "react";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <a href="#Favorites">Favorites</a>
          <a href="#People and culture">People and culture</a>
          <a href="#Policies">Policies</a>
          <a href="#Management resources">Management resources</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
