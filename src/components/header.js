import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const toggleHeader = () => {
    const element = document.getElementById("nav-group");

    if (element.className === "header--nav-group") {
      element.className += " open";
    } else {
      element.className = "header--nav-group";
    }
  };

  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
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
        <Link
          to="about"
          spy={true}
          smooth={true}
          className="header--nav-item"
          activeClass="header--nav-item-active"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          className="header--nav-item"
          activeClass="header--nav-item-active"
          onSetActive={handleSetActive}
        >
          Skills
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          className="header--nav-item"
          activeClass="header--nav-item-active"
          onSetActive={handleSetActive}
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};
