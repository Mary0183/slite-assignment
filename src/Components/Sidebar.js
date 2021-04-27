import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Favorites from "./Favorites";

function Sidebar() {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <Favorites />
          <ul className="sidebar-nav">
            <li>
              <Link className="people" to="/people-and-culture">
                People and culture
              </Link>
            </li>
            <li>
              <Link className="policies" to="/policies">
                Policies
              </Link>
            </li>
            <li>
              <Link className="management-resources" to="/management-resources">
                Management resources
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
