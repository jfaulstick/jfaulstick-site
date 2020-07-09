import React from "react";

import * as Scroll from "react-scroll";
import {
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { Header } from "./components/header";
import { AboutPage } from "./pages/about";
import { SkillsPage } from "./pages/skills";
import { PortfolioPage } from "./pages/portfolio";
import { ContactPage } from "./pages/contact";

import "./App.scss";

class App extends React.Component {
  componentDidMount = () => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

        <AboutPage />

        <SkillsPage />

        <PortfolioPage />

        {/* <ContactPage /> */}
      </div>
    );
  }
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
