import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";

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
    title: " 📚Policies",
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
  const [favorites, setFavorites] = useState([]); //{title: "Policies" , path: "/Policies"}
  const [star, setStar] = useState("");

  // const addFavoritePage = (favoritePage) => {
  //   const newFavoriteList = [...favorites, favoritePage];
  //   setFavorites(newFavoriteList);
  // };

  const handleChangeStar = (location) => {
    console.log(location);
    setStar(!star);
  };

  return (
    <Router>
      <div className="App">
        <div className="logo">
          <Link to="/people-and-culture">
            <img className="logo-1" src={Logo1} alt="logo1" />
            <img className="logo-2" src={Logo2} alt="logo2" />
          </Link>
        </div>

        <Topbar
          routes={routes}
          handleChangeStar={handleChangeStar}
          star={star}
        />

        <div className="app-container">
          <div className="grid-sidebar">
            <Sidebar
              routes={routes}
              star={star}
              // addFavoritePage={addFavoritePage}
            />
          </div>

          <Switch>
            <Route path="/people-and-culture" exact>
              <PeopleAndCulture className="grid-pc" />
            </Route>

            <Route path="/policies" exact>
              <Policies className="grid-pc" />
            </Route>

            <Route path="/management-resources" exact>
              <ManagementResources className="grid-pc" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
