import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const dropdownRef = useRef(null);
  const [favActive, setFavActive] = useState(false);

  const onClick = () => setFavActive(!favActive);

  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <div className="menu-container favorites-container">
            <button onClick={onClick} className="favorites">
              <span>Favorites</span>
            </button>
            <nav
              ref={dropdownRef}
              className={`menu ${favActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <Link className="people" to="/people-and-culture">
                    People and culture
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="sidebar-nav">
            {/* <li className="favorites-container"> */}
            {/* <a className="favorites" href="#Favorites">
                Favorites
              </a> */}
            {/* </li> */}

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
