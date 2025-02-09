import "../App.css";
import "./common.css";
import "../activites/activites.css";
import Button from "./button";
import React, { useState } from "react";

function Page({ title, subtitle, buttons, subComponent }) {
  const [activeButton, setActiveButton] = useState(
    Object.keys(subComponent)[0]
  );

  return (
    <div id="page_body" className="black">
      <header className="page_header">
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
      </header>
      {subComponent[activeButton]}
    </div>
  );
}

export default Page;
