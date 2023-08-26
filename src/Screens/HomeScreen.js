import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AmInfo from "../components/AmInfo";
import AboutScreen from "./AboutScreen";
import ProjectsScreen from "./ProjectsScreen";
import ContactScreen from "./ContactScreen";
import NotFound from "./NotFound";
import amImage from "../images/cropped-DSC_0156.JPG";
import "animate.css";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="home__screen">
      <div className="home__left">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<AmInfo />}></Route>
          <Route path="/about" element={<AboutScreen />}></Route>
          <Route path="/projects" element={<ProjectsScreen />}></Route>
          <Route path="/contact" element={<ContactScreen />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <div className="home__right">
        <div className="image__container">
          <img
            class="animate__animated animate__pulse"
            src={amImage}
            alt="am face"
          />
          <div className="back__box"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
