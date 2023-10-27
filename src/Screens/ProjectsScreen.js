import React from "react";
import "./ProjectsScreen.css";
import Label from "../components/Label";
import ProjectsItem from "../components/ProjectsItem";
import mvImage from "../images/Web capture_29-8-2023_103413_ra-netflix-clone.web.app.jpeg";
import rcImage from "../images/Web capture_29-8-2023_155310_oualid-amzil.github.io.jpeg";
import shImage from "../images/am-shop-capture.jpeg";

const ProjectsScreen = () => {
  return (
    <div className="projects__screen">
      <Label
        title="PROJECTS"
        paragraph="Here you will find some of the personal and clients projects that I
          created"
      />
      <div className="projects__elements">
        <ProjectsItem
          title="AM Movies"
          webImage={mvImage}
          link="https://ra-netflix-clone.web.app"
        />

        <ProjectsItem
          title="AM Recipes"
          webImage={rcImage}
          link=" https://oualid-amzil.github.io/AM.Recipes/"
        />
        <ProjectsItem
          title="AM Shop"
          webImage={shImage}
          link=" https://silver-arithmetic-d2e4d4.netlify.app"
        />
      </div>
    </div>
  );
};

export default ProjectsScreen;
