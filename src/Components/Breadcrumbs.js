import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import SideChevron from "../images/right.svg";

function Breadcrumbs(props) {
  const breadcrumbs = useBreadcrumbs(props.routes);
  const filteredBreadcrumbs = breadcrumbs.filter((home) => home.key !== "/");

  return (
    <div>
      <div>
        <div className="breadcrumbs-container">
          <div className="breadcrumb">
            {props.favorites
              .map((f) => f.path)
              .includes(props.location.pathname) && (
              <span className="span-favorites">
                Favorites
                <img
                  className="side-chevron"
                  src={SideChevron}
                  alt="side chevron"
                ></img>
              </span>
            )}

            {filteredBreadcrumbs.map(({ match, breadcrumb }) => (
              <span className="span-breadcrumb" key={match.path}>
                <Link to={match.path}>{breadcrumb} </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Breadcrumbs;
