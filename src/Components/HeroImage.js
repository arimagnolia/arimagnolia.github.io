import React from 'react';
import {Link} from "react-router-dom";
import Image1 from "../assets/test.jpg";
import "../styles/Heroimage.css";

function HeroImage() {

  return (
    <div className="hero">
        <div className="mask">
         <img className="coding-img" src={Image1} alt="" />
        </div>
        <div className="about">
          <h1>Hi.</h1>
            <p>I'm Ari and I design apps.</p>
              <Link to="/projects">
                <button type="button" className="home-btn">
                    Hire Me
                </button>
              </Link>
              
        </div>
    </div>
  )
}

export default HeroImage