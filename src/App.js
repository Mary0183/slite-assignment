import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Logo1 from "./images/Slite.svg";
import Logo2 from "./images/logo--color.svg";

import Sidebar from "./Components/Sidebar.js";
import Topbar from "./Components/Topbar.js";

import PeopleAndCulture from "./Components/PeopleAndCulture";
import Policies from "./Components/Policies";
import ManagementResources from "./Components/ManagementResources";

// import wave from "./images/wave.svg";

const routes = [
  // {
  //   title: "Home",
  //   path: "/",
  //   breadcrumb: "Home",
  // },
  {
    title: "🥇People and culture",
    path: "/people-and-culture",
    breadcrumb: "People and culture",
  },
  {
    title: "📚Policies",
    path: "/policies",
    breadcrumb: "Policies",
  },
  {
    title: "📖Management resources",
    path: "/management-resources",
    breadcrumb: "Management resources",
  },
];

function App() {
  let location = useLocation();
  const [favorites, setFavorites] = useState([]); //{title: "Policies" , path: "/Policies"}
  const [star, setStar] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("");

  // useSetLocation(setCurrentLocation);

  const handleChangeStar = (location) => {
    const favoritesObj = routes.find((k) => k.path === location);
    const newFavoriteList = [...favorites, favoritesObj];

    //take the value that the state star has at that moment in time and toggle it
    //if the new value is true setFavorites to new list
    setStar((previousStar) => {
      const newStarValue = !previousStar;
      if (newStarValue) {
        setFavorites(newFavoriteList);
      }
      //if star value is false return an array with the objects that don't match location
      if (!newStarValue) {
        const filteredFavorites = favorites.filter((r) => r.path !== location);
        //then setFavorites to the values of the new array
        setFavorites(filteredFavorites);
      }

      return newStarValue;
    });
  };

  useEffect(() => {
    setCurrentLocation(location.pathname);
    const favoritePath = favorites
      .map((f) => f.path)
      .includes(location.pathname)
      ? setStar(true)
      : setStar(false);
  });

  return (
    <div className="App">
      <Link to="/people-and-culture">
        <div className="logo">
          <div className="grid-logo1">
            <img className="logo-1" src={Logo1} alt="logo1" />
          </div>
          <div className="grid-logo2">
            <img className="logo-2" src={Logo2} alt="logo2" />
          </div>
        </div>
      </Link>

      <Topbar
        routes={routes}
        handleChangeStar={handleChangeStar}
        star={star}
        favorites={favorites}
        location={location}
      />

      <div className="app-container">
        <div className="grid-sidebar">
          <Sidebar
            routes={routes}
            star={star}
            favorites={favorites}
            handleChangeStar={handleChangeStar}
          />
        </div>

        <Switch>
          <Route path="/people-and-culture" exact>
            <PeopleAndCulture />
          </Route>

          <Route path="/policies" exact>
            <Policies />
          </Route>

          <Route path="/management-resources" exact>
            <ManagementResources />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
