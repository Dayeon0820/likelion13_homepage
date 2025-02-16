import "../App.css";
import ActivitesCurriculum from "./main_activites/curriculum_activites";
import ActivitesSession from "./main_activites/session_activites";
import ActivitesProject from "./main_activites/project_activites";
import ActivitesGallery from "./main_activites/gallery_activites";
import React, { useState } from "react";
import Page from "../common/page";
import Footer from "../default/footer";

function Activites() {
  const mainComponent = {
    CURRICULUM: <ActivitesCurriculum />,
    SESSION: <ActivitesSession />,
    PROJECT: <ActivitesProject />,
    GALLERY: <ActivitesGallery />,
  };

  const title = "ACTIVITIES";
  const subtitle = "멋쟁이사자처럼 at 국민대의 커리큘럼과 활동들을 소개합니다";
  const buttons = [
    {
      title: "13기 교육 일정",
      detail: "CURRICULUM",
    },
    {
      title: "13기 세션안내",
      detail: "SESSION",
    } /*
    {
      title: "프로젝트 둘러보기",
      detail: "PROJECT",
    }, */,
    {
      title: "활동 갤러리",
      detail: "GALLERY",
    },
  ];

  return (
    <>
      <Page
        title={title}
        subtitle={subtitle}
        subComponent={mainComponent}
        buttons={buttons}
      />
    </>
  );
}

export default Activites;
