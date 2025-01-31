import "../App.css";
import "./activites.css";
import Button from "./button";
import ActivitesCurriculum from "./main_activites/curriculum_activites";
import ActivitesSession from "./main_activites/session_activites";
import ActivitesProject from "./main_activites/project_activites";
import React, { useState } from "react";

function Activites() {
  const [activeButton, setActiveButton] = useState(null);
  const mainComponent = {
    CURRICULUM: <ActivitesCurriculum />,
    SESSION: <ActivitesSession />,
    PROJECT: <ActivitesProject />,
    GALLERY: <ActivitesProject />,
  };
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
      {mainComponent[activeButton] || <ActivitesCurriculum />}
    </div>
  );
}

export default Activites;
