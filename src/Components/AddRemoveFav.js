import { useLocation } from "react-router-dom";
import "./AddRemoveFav.css";
import Star from "../images/plain.svg";
import RemoveStar from "../images/stroke.svg";

function AddRemoveFav({ star, handleChangeStar }) {
  const location = useLocation();

  return (
    <div className="AddRemoveFav">
      {!star ? (
        <img
          className="remove-favorite"
          src={RemoveStar}
          alt="remove element"
          onClick={() => handleChangeStar(location.pathname)}
        />
      ) : (
        <img
          className="add-favorite"
          src={Star}
          alt="add element "
          onClick={() => handleChangeStar(location.pathname)} // the function is passed to the onClick handler and will be triggered only onClick
        />
      )}
    </div>
  );
}

export default AddRemoveFav;
