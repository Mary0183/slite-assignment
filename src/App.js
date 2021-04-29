import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Logo1 from "./images/Slite.svg";
import Logo2 from "./images/logo--color.svg";
import Sidebar from "./Components/Sidebar.js";
import Breadcrumbs from "./Components/Breadcrumbs";

import PeopleAndCulture from "./Components/PeopleAndCulture";
import Policies from "./Components/Policies";
import ManagementResources from "./Components/ManagementResources";

// import wave from "./images/wave.svg";

const routes = [
  {
    title: "People and culture",
    path: "/people-and-culture",
  },
  {
    title: "Policies",
    path: "/policies",
  },
  {
    title: "Management resources",
    path: "/management-resources",
  },
];

function App() {
  const [favorite, setFavorite] = useState([routes]);

  return (
    <Router>
      <div className="App">
        <div className="logo">
          <img className="logo-1" src={Logo1} />
          <img className="logo-2" src={Logo2} />
        </div>

        <Breadcrumbs routes={routes} />

        <div className="app-container">
          <div className="grid-sidebar">
            <Sidebar routes={routes} />
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
