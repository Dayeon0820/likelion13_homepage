import "../App.css";
import React, { useState } from "react";
import Page from "../common/page";

function About() {
  const mainComponent = {
    INTRODUCTION: <div />,
    "OUR HISTORY": <div />,
    "WHAT WE ACHIEVE": <div />,
    PEOPLE: <div />,
  };

  const title = "ABOUT US";
  const subtitle = "멋쟁이사자처럼 at 국민대를 소개합니다";
  const buttons = [
    {
      title: "소개",
      detail: "INTRODUCTION",
    },
    {
      title: "국민대 멋사의 역사",
      detail: "OUR HISTORY",
    },
    {
      title: "우리가 이룬 것",
      detail: "WHAT WE ACHIEVE",
    },
    {
      title: "운영진",
      detail: "PEOPLE",
    },
  ];

  return (
    <Page
      title={title}
      subtitle={subtitle}
      subComponent={mainComponent}
      buttons={buttons}
    />
  );
}

export default About;
