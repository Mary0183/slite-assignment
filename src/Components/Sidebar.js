import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Favorites from "./Favorites";

function Sidebar({ routes, handleChangeStar, favorites }) {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <Favorites
            handleChangeStar={handleChangeStar}
            favorites={favorites}
          />
          <ul className="sidebar">
            {routes
              .filter((r) => !favorites.map((f) => f.path).includes(r.path)) //create a new array with all elements in routes array that are not included in favorites array
              .map((f) => (
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
