import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import "animate.css";

import "./Nav.css";

const Nav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="nav">
      <div className="nav__contents">
        <div className="animate__animated animate__wobble nav__logo">
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
        {showMobileNav && (
          <div className="mobileNav__list animate__animated animate__fadeInDown">
            <ul>
              <li>
                <button
                  className="hideButton"
                  onClick={() => setShowMobileNav(false)}
                >
                  <RxCross1 />
                </button>
              </li>
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
        )}
        {!showMobileNav && (
          <button
            className="animate__animated animate__zoomIn showButton"
            onClick={() => setShowMobileNav(true)}
          >
            <CiMenuFries />
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
