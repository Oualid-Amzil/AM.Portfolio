import React from "react";
import "./AmInfo.css";

const AmInfo = () => {
  return (
    <div className="am__info">
      <h1>Frontend Developer.</h1>
      <p>
        I like to craft solid and scalable{" "}
        <span className="front__end">frontend</span> products with great user
        experience.
      </p>

      <div className="add__info">
        <p>
          Highly skilled at progressive enhancement, design systems & UI
          Engineering.
        </p>
        <p>
          Over a decade of experience building products for clients across
          several countries.
        </p>
      </div>
    </div>
  );
};

export default AmInfo;
