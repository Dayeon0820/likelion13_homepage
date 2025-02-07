import "../../App.css";
import "../activites.css";
import React, { useState } from "react";
import CommonActivites from "./common_activites";

function ActivitesGallery() {
  const [activeButton, setActiveButton] = useState("11");
  return (
    <div>
      <header id="atv-project_header">
        <div
          className={`atv_footer-btn ${
            activeButton === "11"
              ? "atv_footerBtn_clicked"
              : "atv_footerBtn_default"
          }`}
          onClick={() => {
            setActiveButton("11");
            console.log(activeButton);
          }}
        >
          11기
        </div>
        <div
          className={`atv_footer-btn ${
            activeButton === "12"
              ? "atv_footerBtn_clicked"
              : "atv_footerBtn_default"
          }`}
          onClick={() => setActiveButton("12")}
        >
          12기
        </div>
      </header>
      <main id="atv-gallery_main"></main>
    </div>
  );
}

export default ActivitesGallery;
