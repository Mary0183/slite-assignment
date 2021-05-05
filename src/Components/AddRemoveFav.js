import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AddRemoveFav.css";
import Star from "../images/plain.svg";
import RemoveStar from "../images/stroke.svg";

function AddRemoveFav(props) {
  // const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();

  return (
    <div className="AddRemoveFav">
      {!props.star ? (
        <img
          className="remove-favorite"
          src={RemoveStar}
          alt="remove element"
          onClick={() => props.handleChangeStar(location.pathname)}
        />
      ) : (
        <img
          className="add-favorite"
          src={Star}
          alt="add element "
          onClick={() => props.handleChangeStar(location.pathname)} // the function is passed to the onClick handler and will be triggered only onClick
        />
      )}
    </div>
  );
}

export default AddRemoveFav;
