import React from "react";
import "./ProjectsItem.css";

import "animate.css";

const ProjectsItem = ({ title, link, webImage }) => {
  return (
    <div className="  project__wrapper">
      <h2 className="animate__animated animate__lightSpeedInLeft">{title}</h2>
      <div className="animate__animated animate__lightSpeedInLeft project__image">
        <img src={webImage} alt="website" />
        <div className="animate__animated animate__fadeIn project__link">
          <a
            className="animate__animated animate__zoomIn link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
