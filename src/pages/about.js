import React from "react";

import { HeroAvatar } from "../components/hero-avatar/hero-avatar";

export const AboutPage = () => {
  return (
    <div className="page page--about">
      <div className="page--about-content">
        <div className="page--about-text">About Me!</div>
        <HeroAvatar />
      </div>
    </div>
  );
};
