import React from 'react';
import { Link } from "react-router-dom";
import "./header.css";
import "./default.css";
// import smallFullLogo from "../img/LIKELION UNIV_full_brandlogo_small.svg";
// import smallLogo from "../img/LIKELION UNIV_brandlogo_small.png";

const Header=()=>{
    
    return(
        <header className='header'>
            <h4 className="logoTitle">
                LIKELION UNIV. <span className='logoHighlight'>X</span> KMU
            </h4>
            <nav className="headerNavbar">
                <ul>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/activities">ACTIVITIES</Link></li>
                    <li><Link to="/community">COMMUNITY</Link></li>
                </ul>
                <button className="loginBox">LOGIN</button>
            </nav>
        </header>
    );
}

export default Header;