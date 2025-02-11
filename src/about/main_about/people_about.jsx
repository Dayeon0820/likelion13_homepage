import "../../App.css";
import "../about.css";
import React, { useState } from "react";
import Subtitle from "../../common/subtitle";
import Footer from "../../default/footer";
import members from "../../data/member";

function PeopleAbout() {
  const title = "PEOPLE";
  const subtitle = "멋쟁이사자처럼 at 국민대 12기 운영진";
  const p = `2025년 13기 운영진을 소개합니다. 13기 운영진은 개발, 디자인, 홍보부, 총무 파트로 구성되어 있습니다.`;
  return (
    <>
      <div id="people_header">
        <Subtitle title={title} subtitle={subtitle} P={p} />
      </div>
      <section id="people_main">
        <div id="people-profile_container">
          {members.map((member) => (
            <ProfileAbout
              name={member.name}
              part={member.part}
              major={member.major}
              key={member.name}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

function ProfileAbout({ name, part, major }) {
  return (
    <>
      <div className="ab_profile-box">
        <img
          src={`/memberImg/${name}.jpg`}
          className="ab_profile-img"
          onError={(e) => (e.target.src = "/profile.png")}
        />

        <div className="ab_profile-name">
          <h2>{name}</h2>
          <div className="ab_profile-part">{part}</div>
        </div>
        <h4 className="ab_profile-major">{major}</h4>
      </div>
    </>
  );
}

export { PeopleAbout, ProfileAbout };
