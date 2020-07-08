import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import { AboutPage } from "./pages/about";
import { PortfolioPage } from "./pages/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";

function App() {
  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  const toggleHeader = () => {
    const element = document.getElementById("nav-group");

    if (element.className === "header--nav-group") {
      element.className += " open";
    } else {
      element.className = "header--nav-group";
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="header fixed-top">
          <div className="header--top">
            <div className="header--brand">JF</div>
            <div>
              <FontAwesomeIcon
                className="header--bars"
                icon={faBars}
                onClick={toggleHeader}
              />
            </div>
          </div>

          <div className="header--nav-group" id="nav-group">
            <NavLink
              to="/"
              className="header--nav-item"
              activeClassName="header--nav-item-active"
              isActive={checkActive}
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className="header--nav-item"
              activeClassName="header--nav-item-active"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className="header--nav-item"
              activeClassName="header--nav-item-active"
            >
              Contact
            </NavLink>
          </div>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <AboutPage />
            <PortfolioPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
