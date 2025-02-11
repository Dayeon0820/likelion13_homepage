import "../App.css";
import "./common.css";
import "../activites/activites.css";
import Footer from "../default/footer";
import Button from "./button";
import React, { useState } from "react";

function Page({ title, subtitle, buttons, subComponent }) {
  const [activeButton, setActiveButton] = useState(
    Object.keys(subComponent)[0]
  );

  return (
    <>
      <main id="page_body" className="black">
        <div className="page_header">
          <h1 className="page_header-title">{title}</h1>
          <p>{subtitle}</p>
          <div id="page_button-box">
            {buttons.map((button) => (
              <Button
                title={button.title}
                detail={button.detail}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            ))}
          </div>
        </div>
        {subComponent[activeButton]}
      </main>
      <div className="footer-container scrollSection">
        <Footer />
      </div>
    </>
  );
}

export default Page;
