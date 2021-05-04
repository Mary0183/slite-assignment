import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumbs(props) {
  const breadcrumbs = useBreadcrumbs(props.routes);
  const filteredBreadcrumbs = breadcrumbs.filter((home) => home.key !== "/");

  return (
    <div>
      <div>
        <div className="breadcrumbs-container">
          <ul className="breadcrumb">
            {props.favorites
              .map((f) => f.path)
              .includes(props.location.pathname) && <span>Favorites</span>}
            {filteredBreadcrumbs.map(({ match, breadcrumb }) => (
              <span key={match.path}>
                <Link to={match.path}>{breadcrumb} </Link>
              </span>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Breadcrumbs;
