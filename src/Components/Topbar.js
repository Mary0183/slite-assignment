import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import AddRemoveFav from "./AddRemoveFav";
import "./Topbar.css";

function Topbar({ routes, handleChangeStar, star }) {
  return (
    <div className="Topbar">
      <Breadcrumbs routes={routes} />
      <AddRemoveFav handleChangeStar={handleChangeStar} star={star} />
    </div>
  );
}

export default Topbar;
