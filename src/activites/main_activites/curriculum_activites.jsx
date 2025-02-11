import "../../App.css";
import "../activites.css";
import React, { useState } from "react";
import Subtitle from "../../common/subtitle";

function ActivitesCurriculum() {
  const [activeButton, setActiveButton] = useState("development");
  const title = "CURRICULUM";
  const subtitle = "2025 멋쟁이사자처럼 국민대학교 13기 아기사자 교육일정";
  const p = `멋쟁이사자처럼 국민대학교 13기 세션은 디자인 트랙과 개발 트랙 2가지로
          나뉘어 진행합니다`;
  return (
    <div id="page_container">
      <section id="curriculum_main" className="activites_main">
        <Subtitle title={title} subtitle={subtitle} P={p} />

        <div id="atv_curriculum-img_box">
          <img id="atv_curriculum-img" src="./curriculum.png" />
        </div>
      </section>
      <section id="curriculum_footer" className="activites_footer active-common-footer">
        <div id="atv_footer-btnBox">
          <div
            className={`atv_footer-btn ${
              activeButton === "development"
                ? "atv_footerBtn_clicked"
                : "atv_footerBtn_default"
            }`}
            onClick={() => {
              setActiveButton("development");
              console.log(activeButton);
            }}
          >
            개발
          </div>
          <div
            className={`atv_footer-btn ${
              activeButton === "design"
                ? "atv_footerBtn_clicked"
                : "atv_footerBtn_default"
            }`}
            onClick={() => setActiveButton("design")}
          >
            디자인
          </div>
        </div>
        <div id="atv-footer-imgBox">
          {activeButton === "development" ? (
          <div className="img-grid">
            <img src="/html.png" alt="HTML" />
            <img src="/git.png" alt="Git" />
            <img src="/django.png" alt="Django" />
            <img src="/aws.png" alt="AWS" />
          </div>
          ) : (
          <div className="img-grid single">
            <img src="/figma.png" alt="Figma" />
          </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ActivitesCurriculum;
