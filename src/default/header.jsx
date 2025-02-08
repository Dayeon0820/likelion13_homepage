import React from 'react';
import "./header.css";
import "./default.css";
import smallLogo from "../img/LIKELION UNIV_full_brandlogo_small.svg";

const Header=()=>{
    
    return(
        <header className='header'>
            <h4 className="logoTitle">
                LIKELION UNIV. <span className='logoHighlight'>X</span> KMU
            </h4>
            <nav className="headerNavbar">
                <ul>
                    <li>ABOUT US</li>
                    <li>ACTIVITIES</li>
                    <li>COMMUNITY</li>
                </ul>
                <button className="loginBox">LOGIN</button>
            </nav>
        </header>
    );
}

export default Header;