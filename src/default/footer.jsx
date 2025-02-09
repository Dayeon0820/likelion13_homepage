import React, { useState } from "react-dom";
import "./footer.css";
import LikeLionKMULogo from "../img/lion_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterNav = [
    {
      title: "ABOUT US",
      link: "/about",
      subtitle: ["INFORMATION", "OURHISTORY", "WHAT WE ACHIEVE", "PROFILE"],
    },
    {
      title: "ACTIVITES",
      link: "/activities",
      subtitle: ["CURRICULUM", "SESSION", "PROJECT", "GALLERY"],
    },
  ];
  return (
    <footer id="footer">
      <div className="footerLogoBox">
        <div className="snsLink">
          <img src="/textLogo.png" alt="" className="footerLogo" />
          <a href="#" className="faceBookLink">
            <img src="/Facebook.png" />
          </a>
          <a href="#" className="instagramLink">
            <img src="/instagram.png" />
          </a>
        </div>
        <img
          src={LikeLionKMULogo}
          alt="Like Lion KMU Logo"
          className="kmuLogo"
        ></img>
        <p>@2025 likelion X KMU All rights reserved</p>
      </div>
      <nav id="footer_nav">
        <p className="Txt2025">2025</p>
        {FooterNav.map((a) => (
          <ul className="footerList" key={a.title}>
            <li>
              <Link className="footerListLink" to={a.link}>
                {a.title}
              </Link>
            </li>
            {a.subtitle.map((i) => (
              <li key={i}>
                <h5>{i}</h5>
              </li>
            ))}
          </ul>
        ))}
        <ul className="footerList">
          <Link className="footerListLink">COMMUNITY</Link>
        </ul>
        <ul className="footerList">
          <Link className="footerListLink footerListLink_last" to="/">
            FAQ <span> | 자주 묻는 질문</span>
          </Link>
          <Link className="footerListLink footerListLink_last">JOIN US</Link>
          <Link className="footerListLink footerListLink_last">MYPAGE</Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
