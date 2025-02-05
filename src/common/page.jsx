import "../App.css";
import "../activites/activites.css";
import Button from "./button";
import React, { useState } from "react";

function Page({ title, subtitle, buttons, subComponent }) {
  const [activeButton, setActiveButton] = useState(
    Object.keys(subComponent)[0]
  );

  return (
    <div id="activites_body" className="black">
      <header className="activites_header">
        <h1 className="atv_header-title">{title}</h1>
        <p>{subtitle}</p>
        <div id="atv_button-box">
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
