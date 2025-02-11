import "../../App.css";
import "../about.css";
import React, { useState } from "react";

function IntroductionAbout() {
  const contents = [
    { number: "61+", text: "개의 대학," },
    { number: "500+", text: "명의 운영진," },
    { number: "2000+", text: "명이 참가하는" },
  ];
  return (
    <div id="page_container">
      <section id="about_main">
        <h2 id="about-title">멋쟁이사자처럼 at 국민대는 어떤 동아리인가요?</h2>
        <div id="about-introBox">
          <h3>INTRODUCTION</h3>
          <p>
            멋쟁이 사자처럼 at 국민대학교는 온라인 강의와 오프라인 활동을 통한
            체계적인 프로그래밍 교육 동아리이며,<br/> 자신만의 서비스를 만들고 싶은
            국민대 학생이라면 누구나 지원 가능합니다.
          </p>
        </div>
        <h4 id="about-subtitle">
          멋쟁이 사자 처럼은 <span>누구나</span> 자신만의 IT서비스를 개발할 수
          있도록 <span>웹 개발 및 기획</span>을 교육하는 동아리입니다.
        </h4>
        {contents.map((content) => (
          <div className="about-contents">
            <h4>{content.number}</h4>
            <span>{content.text}</span>
          </div>
        ))}
        <h4 id="about-subtitle">
          전국 <span>최대 규모</span> 개발/창업 동아리입니다.
        </h4>
      </section>
      <section id="about-footer">
        <div className="session-footer_btn">
          <h3>VOD 강의 제공</h3>
          <h4>온/오프라인 학습</h4>
        </div>
        <div className="session-footer_btn">
          <h4>서비스 빌딩을 위한</h4>
          <h4>월/목</h4>
        </div>
        <div className="session-footer_btn">
          <h4>중앙/교내</h4>
          <h3>아이디어톤</h3>
        </div>
        <div className="session-footer_btn">
          <h4>멋사의 꽃</h4>
          <h3>해커톤</h3>
        </div>
      </section>
    </div>
  );
}

export default IntroductionAbout;
