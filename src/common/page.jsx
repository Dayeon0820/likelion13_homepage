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
    <div id="layout_container">
      <main id="page_body" className="black">
        <div className="page_header">
          <div className="page_header_inner">
            <div className="page_header_title_box">
              <h1 className="page_header-title">{title}</h1>
              <p>{subtitle}</p>
            </div>
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
        </div>
        {subComponent[activeButton]}
      </main>
      <Footer/>
    </div>
  );
}

export default Page;
