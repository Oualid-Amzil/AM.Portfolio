import React from "react";
import { useNavigate } from "react-router-dom";
import Label from "../components/Label";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux } from "react-icons/si";
import "animate.css";
import "./AboutScreen.css";

const AboutScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="about__screen">
      <Label
        title="ABOUT ME"
        paragraph=" Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology"
      />

      <div className="animate__animated animate__fadeInUp about__content">
        <div className="left__content">
          <h2>Get to Know me!</h2>
          <div className="left__disc">
            <p>
              I'm a <span>Frontend Web Developer</span> building the Front-end
              of Websites and Web Applications that leads to the success of the
              overall product. Check out some of my work in the{" "}
              <span>Projects</span> section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in <span>Web Development</span> so it can
              help other people of the Dev Community. Feel free to Connect or
              Follow me on my <span className="linkedin">Linkedin</span> where I
              post useful content related to Web Development and Programming
            </p>
            <p>
              I'm open to <span>Job</span> opportunities where I can contribute,
              learn and grow. If you have a good opportunity that matches my
              skills and experience then don't hesitate to <span>contact</span>{" "}
              me.
            </p>
          </div>
          <button onClick={() => navigate("/contact")}>contact</button>
        </div>
        <div className="right__content">
          <h2>My Skills</h2>
          <div className="right__skills">
            <span>
              <FaHtml5 style={{ color: "purple" }} />
              <h5>HTML</h5>
            </span>
            <span>
              <FaCss3Alt style={{ color: "blue" }} />
              <h5>CSS</h5>
            </span>
            <span>
              <SiJavascript style={{ color: "#ff8400" }} />
              <h5>JavaScript</h5>
            </span>
            <span>
              <FaReact style={{ color: "blue" }} />
              <h5>React</h5>
            </span>
            <span>
              <SiRedux style={{ color: "purple" }} />
              <h5>Redux</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
