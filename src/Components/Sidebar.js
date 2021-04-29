import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Favorites from "./Favorites";

function Sidebar({ routes }) {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <Favorites routes={routes} />
          <ul className="sidebar">
            {routes.map((f) => (
              <li key={f.title}>
                <Link className="links-style" to={f.path}>
                  {f.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
