import "../../App.css";
import "../about.css";
import React, { useState } from "react";
import Subtitle from "../../common/subtitle";

function PeopleAbout() {
  const title = "PEOPLE";
  const subtitle = "멋쟁이사자처럼 at 국민대 12기 운영진";
  const p = `2025년 13기 운영진을 소개합니다. 13기 운영진은 개발, 디자인, 홍보부, 총무 파트로 구성되어 있습니다.`;
  return (
    <div>
      <header id="people_header">
        <Subtitle title={title} subtitle={subtitle} P={p} />
      </header>
      <main id="people_main">
        <div id="people-profile_container">
          <ProfileAbout />
          <ProfileAbout />
          <ProfileAbout />
          <ProfileAbout />
          <ProfileAbout />
          <ProfileAbout />
          <ProfileAbout />
        </div>
      </main>
    </div>
  );
}

function ProfileAbout() {
  return (
    <>
      <div className="ab_profile-box">
        <img src="/profile.png" className="ab_profile-img" />

        <div className="ab_profile-name">
          <h2>이다연</h2>
          <div className="ab_profile-part">디자인</div>
        </div>
        <h4 className="ab_profile-major">미디어전공 22학번</h4>
      </div>
    </>
  );
}

export { PeopleAbout, ProfileAbout };
