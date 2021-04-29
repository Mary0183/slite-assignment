import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Favorites.css";

function Favorites(props) {
  const [active, setActive] = useState(true);

  return (
    <div>
      <ul>
        <li className="favorites">
          <a onClick={() => setActive(!active)}>Favorites</a>
          {active && (
            <ul>
              {props.routes.map((r) => (
                <li key={r.title}>
                  <Link className="people" to={r.path}>
                    {r.title}
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
