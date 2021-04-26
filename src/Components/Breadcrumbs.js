import React from "react";
import "./Breadcrumbs.css";
import Star from "../images/stroke.svg";
import Right from "../images/right.svg";

function Breadcrumbs() {
  return (
    <div>
      <div className="topbar">
        {/* <img src={YellowStar} />
        <a href="#Favorites">Favorites</a>

        <img src={Right} />
        <a href="#People and culture">People and culture</a> */}
        <div className="add-favorite">
          <img className="bookmark-star" src={Star} />
        </div>
      </div>
    </div>
  );
}
export default Breadcrumbs;
