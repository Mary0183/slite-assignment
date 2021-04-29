import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import Star from "../images/plain.svg";
import useBreadcrumbs from "use-react-router-breadcrumbs";

import PlainStar from "../images/stroke.svg";

import Right from "../images/right.svg";

function Breadcrumbs(props) {
  const breadcrumbs = useBreadcrumbs(props.routes);
  const filteredBreadcrumbs = breadcrumbs.filter((home) => home.key !== "/");

  return (
    <div>
      <div className="topbar">
        <div className="breadcrumbs-container">
          <ul className="breadcrumb">
            {filteredBreadcrumbs.map(({ match, breadcrumb }) => (
              <span key={match.path}>
                <Link to={match.path}>{breadcrumb} </Link>
              </span>
            ))}
          </ul>
        </div>
        <div className="add-favorite">
          <img className="bookmark-star" src={Star} alt="yellow star" />
        </div>
        {/* <div className="remove-favorite">
          <img className="bookmark-star" src={PlainStar} alt="plain star" />
        </div> */}
      </div>
    </div>
  );
}
export default Breadcrumbs;
