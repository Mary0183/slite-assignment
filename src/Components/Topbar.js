import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import AddRemoveFav from "./AddRemoveFav";
import "./Topbar.css";

function Topbar({ routes, handleChangeStar, star }) {
  return (
    <div className="Topbar">
      <Breadcrumbs routes={routes} />
      <AddRemoveFav star={star} handleChangeStar={handleChangeStar} />
    </div>
  );
}

export default Topbar;
