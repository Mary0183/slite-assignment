import { Link } from "react-router-dom";
import "./Sidebar.css";
import FavExtendCollapse from "./FavExtendCollapse";

function Sidebar({ routes, handleChangeStar, favorites, currentLocation }) {
  return (
    <div>
      <div className="grid-container-col">
        <div className="sidenav-grid">
          <div className="fav.containter">
            <FavExtendCollapse
              favorites={favorites}
              currentLocation={currentLocation}
            />
          </div>
          <div className="sidebar">
            <ul>
              {routes
                .filter((r) => !favorites.map((f) => f.path).includes(r.path)) //create a new array with all elements in routes array that are not included in favorites array
                .map((f) => (
                  <li key={f.title}>
                    <Link className="links-style links-extend" to={f.path}>
                      {f.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
