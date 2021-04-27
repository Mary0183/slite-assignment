import React, { useState } from "react";
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
              <li>
                <a href="/people-and-culture">
                  {props.favoritesCollection[0].text}
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Favorites;
