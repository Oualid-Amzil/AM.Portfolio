import React from "react";

import { NavLink } from "react-router-dom";
import "animate.css";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__contents">
        <div className="nav__logo">
          <h1 style={{ fontFamily: "PT Serif" }}>
            A.M{" "}
            <span style={{ color: "#fff", fontFamily: "PT Serif" }}>
              Profile
            </span>
          </h1>
        </div>
        <div className="nav__list">
          <ul>
            <li>
              <NavLink
                to="/home"
                style={{ fontFamily: "PT Serif" }}
                className={(navData) =>
                  navData.isActive ? "active__navlink" : ""
                }
              >
                Home
                <span></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                style={{ fontFamily: "PT Serif" }}
                className={(navData) =>
                  navData.isActive ? "active__navlink" : ""
                }
              >
                About
                <span></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                style={{ fontFamily: "PT Serif" }}
                className={(navData) =>
                  navData.isActive ? "active__navlink" : ""
                }
              >
                Projects
                <span></span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                style={{ fontFamily: "PT Serif" }}
                className={(navData) =>
                  navData.isActive ? "active__navlink" : ""
                }
              >
                Contact
                <span></span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
