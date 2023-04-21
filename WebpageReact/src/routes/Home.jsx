import '../styles/Home.css';
import img1 from "../assets/lab1_1.jpg";
import img2 from "../assets/lab10_2.jpg";
import React from "react";

function Home () {
  // displays some text and an image for 
  return (
    <>
      <h3>CSCI 4470: Open Source Software</h3>
      <p>Open Source has been taught at RPI since Fall of 2007 <br></br>(taught jointly by Dr. William Shroeder and Dr. Luis Ibanez)
         as a 4000 level class, and then by Mukkai Krishnamoorthy as a 2000 level class. <br></br>We will continue this tradition by 
         offering it as a 4000 level course.</p>
      <div className='imgs'>
      <img className="into-img" src={img1} alt="img1"/>
      <img className="into-img" src={img2} alt="img2"/>
      </div>
      <div className="content">
        <h1>Open Source Software</h1>
        <h2>Unlocking Innovation with Open Source</h2>
      </div>
    </>
  )
}

export default Home;