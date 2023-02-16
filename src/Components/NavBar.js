import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../styles/Navbar.css";
import { FiX, FiMenu } from "react-icons/fi";
import ProfilePic from "../assets/Picture1.png"; 


function NavBar() {

  const [sticky, setSticky] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  const clickHamburger = () => 
    setOpenHamburger(!openHamburger);

  return (
    <div className={sticky ? "navbar navbar-bg" : "navbar"}>
      <NavLink to="/">
        <img src={ProfilePic} alt="" width="60px" />
      </NavLink>
        <ul className={openHamburger ? "links active" : "links"}>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/projects"> Projects </Link>
          </li>
          <li>
            <Link to="/experience"> Experience </Link>
          </li>
          <li>
           <Link to="/contact"> Contact </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={clickHamburger}>
          {openHamburger ? (<FiX size={20} />) 
          : ( <FiMenu size={20} /> )}
        </div>
    </div>
  )
  
}

export default NavBar