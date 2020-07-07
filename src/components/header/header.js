import React from "react";
import "./header.scss";

export const Header = () => {
  return (
    <div className="header">
      <div className="header--brand">JF</div>
      <div className="header--nav-group">
        <div className="header--nav-item">About</div>
        <div className="header--nav-item">Portfolio</div>
        <div className="header--nav-item">Contact</div>
      </div>
    </div>
  );
};
