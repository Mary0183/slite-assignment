import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

            {/* <li>
              <a href="#Management resources">Management resources</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
