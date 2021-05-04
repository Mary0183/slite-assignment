import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import AddRemoveFav from "./AddRemoveFav";
import "./Topbar.css";

function Topbar({ routes, handleChangeStar, star, favorites, location }) {
  return (
    <div className="Topbar">
      <Breadcrumbs routes={routes} favorites={favorites} location={location} />
      <AddRemoveFav star={star} handleChangeStar={handleChangeStar} />
    </div>
  );
}

export default Topbar;
