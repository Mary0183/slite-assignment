import React, { useState } from "react";
import "./AddRemoveFav.css";
import Star from "../images/plain.svg";
import RemoveStar from "../images/stroke.svg";

function AddRemoveFav(props) {
  return (
    <div className="AddRemoveFav">
      {!props.star ? (
        <img
          className="remove-favorite"
          src={RemoveStar}
          onClick={props.handleChangeStar}
        />
      ) : (
        <img
          className="add-favorite"
          src={Star}
          onClick={props.handleChangeStar}
        />
      )}
    </div>
  );
}

export default AddRemoveFav;
