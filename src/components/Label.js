import React from "react";
import "animate.css";
import "./Label.css";

const Label = ({ title, paragraph }) => {
  return (
    <div className="animate__animated animate__fadeInDown label">
      <h1>{title}</h1>
      <span></span>
      <p>{paragraph}</p>
    </div>
  );
};

export default Label;
