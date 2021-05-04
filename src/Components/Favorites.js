import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Favorites.css";

function Favorites(props) {
  const [active, setActive] = useState(true);

  return (
    <div>
      <ul>
        <li className="favorites">
          <Link onClick={() => setActive(!active)}>
            <p className="p-favorites">Favorites</p>
          </Link>
          {active && (
            <ul>
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

export default Favorites;
