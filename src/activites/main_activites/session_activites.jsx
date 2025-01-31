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
      </main>
    </div>
  );
}

export default ActivitesSession;
