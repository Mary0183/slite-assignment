import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
    title: "People and culture",
    path: "/people-and-culture",
    breadcrumb: "People and culture",
  },
  {
    title: "Policies",
    path: "/policies",
    breadcrumb: "Policies",
  },
  {
    title: "Management resources",
    path: "/management-resources",
    breadcrumb: "Management resources",
  },
];

function App() {
  const [favorite, setFavorite] = useState([]);
  const [star, setStar] = useState("");

  const addFavorites = (favoritePage) => {
    return favoritePage
      ? setFavorite((favorite) => [...favoritePage, favorite])
      : favoritePage;
  };

  const handleChangeStar = () => {
    setStar(!star);
  };

  return (
    <Router>
      <div className="App">
        <div className="logo">
          <Link to="/people-and-culture">
            <img className="logo-1" src={Logo1} />
            <img className="logo-2" src={Logo2} />
          </Link>
        </div>

        <Topbar
          routes={routes}
          handleChangeStar={handleChangeStar}
          star={star}
        />

        <div className="app-container">
          <div className="grid-sidebar">
            <Sidebar routes={routes} />
          </div>

          <Switch>
            {/* <Route path="/" exact>
              <Redirect to="/people-and-culture" />
            </Route> */}

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
