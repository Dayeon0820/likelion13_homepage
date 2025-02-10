import "../../App.css";
import "../activites.css";
import React, { useState } from "react";
import Subtitle from "../../common/subtitle";
import Footer from "../../default/footer";

function ActivitesSession() {
  const trackArray = ["Django", "UI/UX", "GRAPHIC", "DESIGN PROCESS"];
  const title = "SESSION";
  const subtitle = "멋쟁이사자처럼 at 국민대 12기 세션 안내";
  const p = `멋쟁이사자처럼 국민대학교 12기 세션은 디자인 트렉과 개발 트렉 2가지로
          나뉘어 진행됩니다`;
  return (
    <div>
      <div className="activites_main">
        <Subtitle title={title} subtitle={subtitle} P={p} />
        <section className="atv-section">
          <div className="atv-section_column">
            <h1>개발 세션</h1>
          </div>
          <div className="atv-section_column">
            <h1>FRONTEND | BACKEND TRACK</h1>
            <div className="atv-section-innerbox">
              <p>
                디자인 프로세스를 경험하고 서비스 기획에 필요한 디자인 스킬을
                학습합니다. 개발자와의 원활한 의사소통을 위해 협엽룰을 익히고
                서비스의 쿨리티를 높일 수 있는 심화된 디자인 세션을 진행합니다.
              </p>
              <div className="atv-section-innerbox_left">
                {trackArray.map((a, index) => (
                  <div className="session_trackBox" key={index}>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="atv-section">
          <div className="atv-section_column">
            <h1>디자인 세션</h1>
          </div>
          <div className="atv-section_column atv-section_colum_last">
            <h1>DESIGN TRACK</h1>
            <div className="atv-section-innerbox">
              <p>
                디자인 프로세스를 경험하고 서비스 기획에 필요한 디자인 스킬을
                학습합니다. 개발자와의 원활한 의사소통을 위해 협엽룰을 익히고
                서비스의 쿨리티를 높일 수 있는 심화된 디자인 세션을 진행합니다.
              </p>
              <div className="atv-section-innerbox_left">
                {trackArray.map((a, index) => (
                  <div className="session_trackBox" key={index}>
                    {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="session-footer">
        <div className="session-footer_btn">
          <h2>주 2회 세션 진행</h2>
          <h4>월/목</h4>
        </div>
        <div className="session-footer_btn">
          <h4>대면 원칙</h4>
          <p>*일부 세션 줌 가능</p>
        </div>
        <div className="session-footer_btn">
          <h4>18:30 시작, 1-2시간</h4>
          <p>*변동 가능</p>
        </div>
        <div className="session-footer_btn">
          <h2>강의실 대여 예정</h2>
          <h4>공학관, 복지관</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ActivitesSession;
