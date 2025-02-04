import "../../App.css";
import "../activites.css";
import React, { useState } from "react";

function ActivitesSession() {
  return (
    <div>
      <main className="activites_main">
        <div className="atv_main-title">
          <h1>SESSION</h1>
          <h4>멋쟁이사자처럼 at 국민대 12기 세션 안내</h4>
        </div>
        <p className="atv_main-sub">
          멋쟁이사자처럼 국민대학교 12기 세션은 디자인 트렉과 개발 트렉 2가지로
          나뉘어 진행됩니다
        </p>
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
            </div>
          </div>
        </section>
      </main>
      <footer id="session-footer">
        <div className="session-footer_btn">
          <h2>주 2회 세션 진행</h2>
          <h4>월/목</h4>
        </div>
        <div className="session-footer_btn">
          <h2>주 2회 세션 진행</h2>
          <h4>월/목</h4>
        </div>
        <div className="session-footer_btn">
          <h2>주 2회 세션 진행</h2>
          <h4>월/목</h4>
        </div>
        <div className="session-footer_btn">
          <h2>주 2회 세션 진행</h2>
          <h4>월/목</h4>
        </div>
      </footer>
    </div>
  );
}

export default ActivitesSession;
