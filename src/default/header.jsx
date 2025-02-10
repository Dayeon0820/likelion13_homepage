import React from 'react';
import {  NavLink, Link  } from "react-router-dom";
import "./header.css";
import "./default.css";
// import smallFullLogo from "../img/LIKELION UNIV_full_brandlogo_small.svg";
// import smallLogo from "../img/LIKELION UNIV_brandlogo_small.png";

const Header=()=>{
    
    return(
        <header className='header'>
            <h4 className="logoTitle">
                <Link to="/" className="logoLink">
                    LIKELION UNIV. <span className="logoHighlight">X</span> KMU
                </Link>
            </h4>
            <nav className="headerNavbar">
                <ul>
                    <li><NavLink  to="/about" className={({ isActive }) => isActive ? "active" : ""}>ABOUT US</NavLink></li>
                    <li><NavLink to="/activities" className={({ isActive }) => isActive ? "active" : ""}>ACTIVITIES</NavLink></li>
                    <li><NavLink to="/community" className={({ isActive }) => isActive ? "active" : ""}>COMMUNITY</NavLink></li>
                </ul>
                <button className="loginBox">LOGIN</button>
            </nav>
        </header>
    );
}

export default Header;