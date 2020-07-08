import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { AboutPage } from "./pages/about";
import { SkillGroup } from "./components/skill-group/skill-group";
import { HeroAvatar } from "./components/hero-avatar/hero-avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { PortfolioPage } from "./pages/portfolio";

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

  handleSetActive = (to) => {
    console.log(to);
  };

  checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if (!location) return false;
    const { pathname } = location;
    return pathname === "/";
  };

  toggleHeader = () => {
    const element = document.getElementById("nav-group");

    if (element.className === "header--nav-group") {
      element.className += " open";
    } else {
      element.className = "header--nav-group";
    }
  };

  render() {
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
                  onClick={this.toggleHeader}
                />
              </div>
            </div>

            <div className="header--nav-group" id="nav-group">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="header--nav-item"
                activeClass="header--nav-item-active"
                // isActive={this.checkActive}
              >
                About
              </Link>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                className="header--nav-item"
                activeClass="header--nav-item-active"
                onSetActive={this.handleSetActive}
              >
                Skills
              </Link>
              {/* <NavLink
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
              </NavLink> */}
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
              <Element name="about">
                <div>
                  <div className="page page--about" id="about-page">
                    <div className="page--about-content">
                      <div className="page--about-text-container">
                        <h2>Hello, I'm Joe!</h2>
                        <p>
                          I am a full stack developer from the Research Triangle
                          area of North Carolina. In additional to HTML, CSS,
                          and JavaScript, my skillset also includes:{" "}
                          <i>React</i>, <i>AngularJS</i>/<i>Angular</i>,{" "}
                          <i>Node</i>, and more.
                        </p>
                        <p>
                          My technical background, passion for coding, and
                          eagerness to learn are all assets in my quest for
                          growth.
                        </p>
                        <p>
                          Before becoming a full stack developer, I spent 15
                          years in the video game industry where I worked on
                          AAA, award-winning titles such as
                          <i> BioShock</i> and <i>Civilization VI</i>.
                        </p>
                      </div>
                      <HeroAvatar />
                    </div>
                    <div className="chevron-down--container">
                      <Link to="skills" smooth={true}>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="chevron chevron-primary"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Element>

              <Element name="skills" id="skills-section">
                <div className="page page--portfolio" id="portfolio-page">
                  <div className="chevron-up--container">
                    <Link to="about" smooth={true}>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="chevron chevron-white"
                      />
                    </Link>
                  </div>
                  <div className="skill-group--section">
                    <SkillGroup
                      title="Front-End Technologies"
                      skills={[
                        "HTML",
                        "CSS",
                        "Sass",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "AngularJS",
                        "Angular 8",
                        "GatsbyJS",
                      ]}
                    />
                    <SkillGroup
                      title="Back-End Technologies"
                      skills={[
                        "Node",
                        "Express",
                        "REST APIs",
                        "MySQL",
                        "MongoDB",
                      ]}
                    />
                    <SkillGroup
                      title="Other Skills"
                      skills={[
                        "Jasmine",
                        "Karma",
                        "Jest",
                        "Git",
                        "Agile Development",
                      ]}
                    />
                  </div>
                </div>
              </Element>
            </Route>
          </Switch>
        </div>
      </Router>
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
