import React, { useState } from "react";
import { Link } from "react-router-dom";
import DownChevron from "../images/down.svg";

import "./FavExtendCollapse.css";

function FavExtendCollapse(props) {
  const [active, setActive] = useState(true);

  return (
    <div>
      <ul>
        <li className="favorites">
          <Link onClick={() => setActive(!active)}>
            <div className="dropdown-favorites">
              <div className="fav-text">
                <p className="p-favorites">Favorites</p>
              </div>
              <div className="fav-chev">
                <img
                  className="down-chevron"
                  src={DownChevron}
                  alt="down chevron"
                ></img>
              </div>
            </div>
          </Link>
          {active && (
            <ul className="ul-favorites">
              {props.favorites.map((t) => (
                <li key={t.title}>
                  <Link className="link-title" to={t.path}>
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default FavExtendCollapse;
