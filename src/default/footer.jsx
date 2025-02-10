import React from "react";
import "./footer.css";
import LikeLionKMULogo from "../img/lion_logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const FooterNav = [
    {
      title: "ABOUT US",
      link: "/about",
      subtitle: ["INFORMATION", "PROFILE"],
    },
    {
      title: "ACTIVITIES",
      link: "/activities",
      subtitle: ["CURRICULUM", "SESSION"],
    },
  ];

  return (
    <footer id="footer">
      <div className="footerLogoBox">
        <div className="snsLink">
          <img src="/textLogo.png" alt="" className="footerLogo" />
          <a href="#" className="faceBookLink">
            <img src="/Facebook.png" alt="Facebook" />
          </a>
          <a href="#" className="instagramLink">
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
        <img src={LikeLionKMULogo} alt="Like Lion KMU Logo" className="kmuLogo" />
        <p>@2025 likelion X KMU All rights reserved</p>
      </div>

      <nav id="footer_nav">
        <p className="Txt2025">2025</p>
        {FooterNav.map((item) => (
          <ul className="footerList" key={item.title}>
            <li>
              <Link className="footerListLink" to={item.link}>
                {item.title}
              </Link>
            </li>
            {item.subtitle.map((sub) => (
              <li key={sub}>
                <span>{sub}</span>
              </li>
            ))}
          </ul>
        ))}

        <ul className="footerList">
          <li>
            <Link className="footerListLink">COMMUNITY</Link>
          </li>
        </ul>

        <ul className="footerList footerListLast">
          <li>
            <Link className="footerListLink footerListLink_last" to="/">
              FAQ <span> | 자주 묻는 질문</span>
            </Link>
          </li>
          <li>
            <Link className="footerListLink footerListLink_last">JOIN US</Link>
          </li>
          <li>
            <Link className="footerListLink footerListLink_last">MYPAGE</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

