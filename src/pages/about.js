import React from "react";

import { HeroAvatar } from "../components/hero-avatar";
import { Element, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const AboutPage = () => {
  return (
    <Element name="about">
      <div>
        <div className="page page--about" id="about-page">
          <div className="chevron-up--container"></div>
          <div className="page--main-content">
            <div className="page--about-text-container">
              <h2>Hello, I'm Joe!</h2>
              <p>
                I am a full stack developer from the Research Triangle area of
                North Carolina. In additional to HTML, CSS, and JavaScript, my
                skillset also includes: <i>React</i>, <i>AngularJS</i>/
                <i>Angular</i>, <i>Node</i>, and more.
              </p>
              <p>
                My technical background, passion for coding, and eagerness to
                learn are all assets in my quest for growth.
              </p>
              <p>
                Before becoming a full stack developer, I spent 15 years in the
                video game industry where I worked on AAA, award-winning titles
                such as
                <i> BioShock</i> and <i>Civilization VI</i>.
              </p>
              <p>
                Contact me{" "}
                <Link to="contact" className="text-link" smooth={true} duration={1500}>
                  below
                </Link>{" "}
                or find my resume{" "}
                <a
                  href="/assets/files/Joseph_Faulstick_2020.pdf"
                  target="_blank"
                  className="text-link"
                >
                  here
                </a>
                .
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
  );
};
