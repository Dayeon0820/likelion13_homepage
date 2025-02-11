import "../../App.css";
import "../activites.css";
import React, { useState } from "react";
import CommonActivites from "./common_activites";
import Footer from "../../default/footer";
import { Gallery11, Gallery12 } from "../../data/gallery";

function ActivitesGallery() {
  const [activeButton, setActiveButton] = useState("11");
  return (
    <div>
      <div id="atv-project_header">
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
      </div>
      <section id="atv-project_main">
        <div id="atv-project-main_container">
          {activeButton === "11" ? (
            <>
              {Gallery11.map((i) => (
                <CommonActivites title={i.title} subtitle={i.subtitle} />
              ))}
            </>
          ) : (
            <>
              {Gallery12.map((i) => (
                <CommonActivites title={i.title} subtitle={i.subtitle} />
              ))}
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ActivitesGallery;
