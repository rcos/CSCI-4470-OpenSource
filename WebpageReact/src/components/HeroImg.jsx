import "../styles/HeroImgStyle.css";
import RPI1 from "../assets/RPI1.jpg";
import React from "react";

const HeroImg = () => {
  return (
    <div className="main-container">
      <div className="picture">
        <img className="into-img" src={RPI1} alt="RPI1"/>
      </div>
      <div className="content">
          <h1>Open Source Software</h1>
          <h2>Unlocking Innovation with Open Source</h2>
      </div>
    </div>
  );
};

export default HeroImg;