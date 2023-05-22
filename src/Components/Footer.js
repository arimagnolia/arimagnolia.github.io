import React from 'react';
import "../styles/Footer.css";
import { Link, NavLink } from 'react-router-dom';
import {ImGithub} from "react-icons/im";
import {BsLinkedin} from "react-icons/bs";

function Footer() {
  return (
    <footer>
        <div className="container">
                <div className="col0">
                    <h4>ABOUT ME</h4> 
                    <p>
                        Hello!  I'm a new grad from the University of Pittsburgh with a Bachelors in Computer Science. I enjoy designing full-stack and front-end web applications.
                        Class of '23.  
                    </p>
                </div>
                <div className="col1">
                    <h4>FOLLOW ME</h4>
                    <div className="col1-details">
                        <NavLink to="https://github.com/arimagnolia">
                         <ImGithub size={20} style={{color:"#fff", marginRight:"0.5rem"}} />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/ari-dev/">
                            <BsLinkedin size={20} style={{color:"#fff", marginRight:"0.5rem"}} />
                        </NavLink>
                    </div>
                </div>
                <div className="col2">
                    <h4>MENU</h4>
                    <ul className="links_footer">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
        </div>
    </footer>
  )
}

export default Footer