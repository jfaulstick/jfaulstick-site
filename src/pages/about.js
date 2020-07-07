import React from "react";

import { HeroAvatar } from "../components/hero-avatar/hero-avatar";

export const AboutPage = () => {
  return (
    <div className="page page--about">
      <div className="page--about-content">
        <div className="page--about-text-container">
          <h2>Hello, I'm Joe!</h2>
          <p>
            I am a full stack developer from the Research Triangle area of North
            Carolina. In additional to HTML, CSS, and JavaScript, my skillset
            also includes: <i>React</i>, <i>AngularJS</i>/<i>Angular</i>, <i>Node</i>, and more.
          </p>
          <p>
            My technical background, passion for coding, and eagerness to learn
            are all assets in my quest for growth.
          </p>
          <p>
            Before becoming a full stack developer, I spent 15 years in the
            video game industry where I worked on AAA, award-winning titles such as
            <i> BioShock</i> and <i>Civilization VI</i>.
          </p>
        </div>
        <HeroAvatar />
      </div>
    </div>
  );
};
