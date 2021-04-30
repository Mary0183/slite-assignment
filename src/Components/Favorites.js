import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Favorites.css";

function Favorites(props) {
  const [active, setActive] = useState(true);

  return (
    <div>
      <ul>
        <li className="favorites">
          <Link onClick={() => setActive(!active)}>Favorites </Link>
          {active && (
            <ul>
              <li>hello</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Favorites;
