import "../App.css";
import "./activites.css";
import Button from "./button";
import React, { useState } from "react";

function Activites() {
  const [activeButton, setActiveButton] = useState(null);
  return (
    <div id="activites_body" className="black">
      <header className="activites_header">
        <h1 className="atv_header-title">ACTIVITES</h1>
        <p>멋쟁이사자처럼 at 국민대의 커리큘럼과 활동들을 소개합니다</p>
        <div id="atv_button-box">
          <Button
            title={"12기 교육일정"}
            detail={"CURRICULUM"}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <Button
            title={"12기 세션안내"}
            detail={"SESSION"}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <Button
            title={"프로젝트 둘러보기"}
            detail={"PROJECT"}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
          <Button
            title={"활동 갤러리"}
            detail={"GALLERY"}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </div>
      </header>
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
          <div className="atv_footer-btn">개발</div>
          <div className="atv_footer-btn">디자인</div>
        </div>
      </footer>
    </div>
  );
}

export default Activites;
