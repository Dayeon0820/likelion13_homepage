import "../../App.css";
import "../activites.css";
import React, { useState } from "react";

function ActivitesCurriculum() {
  const [activeButton, setActiveButton] = useState("development");
  return (
    <div>
      <main className="activites_main">
        <div className="atv_main-title">
          <h1>CURRICULUM</h1>
          <h4>2025 멋쟁이사자처럼 국민대학교 13기 아기사자 교육일정</h4>
        </div>
        <p className="atv_main-sub">
          멋쟁이사자처럼 국민대학교 13기 세션은 디자인 트랙과 개발 트랙 2가지로
          나뉘어 진행합니다
        </p>
        <div id="atv_curriculum-img">
          <img id="atv_curriculum-img" src="./curriculum.png" />
        </div>
      </main>
      <footer className="activites_footer">
        <div id="atv_footer-btnBox">
          <div
            className={`atv_footer-btn ${
              activeButton === "development"
                ? "atv_footerBtn_clicked"
                : "atv_footerBtn_default"
            }`}
            onClick={() => setActiveButton("development")}
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
      </footer>
    </div>
  );
}

export default ActivitesCurriculum;
