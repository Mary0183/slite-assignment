import React, { useState } from "react";
import "./Favorites.css";

function Favorites() {
  const [active, setActive] = useState(true);
  return (
    <div>
      <ul>
        <li className="favorites">
          <a onClick={() => setActive(!active)}>Favorites</a>
          {active && (
            <ul>
              <li>peeps</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Favorites;
