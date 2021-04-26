import React from "react";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <ul className="sidebar-nav">
            <li>
              <a className="favorites" href="#Favorites">
                Favorites
              </a>
            </li>
            <li>
              <a className="people" href="#People and culture">
                People and culture
              </a>
            </li>
            <li>
              <a className="policies" href="#Policies">
                Policies
              </a>
            </li>
            <li>
              <a href="#Management resources">Management resources</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
