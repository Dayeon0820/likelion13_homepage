import "../../App.css";
import "../activites.css";
import React from "react";
import Subtitle from "../../common/subtitle";
import Footer from "../../default/footer";

function ActivitesSession() {
  const title = "SESSION";
  const subtitle = "멋쟁이사자처럼 at 국민대 13기 세션 안내";
  const description = `멋쟁이사자처럼 국민대학교 13기 세션은 디자인 트랙과 개발 트랙 2가지로 나뉘어 진행됩니다`;

  const sessionData = [
    {
      title: "개발 세션",
      trackTitle: "FRONTEND | BACKEND TRACK",
      description:
        " 프론트엔드 트랙과 백엔드 트랙으로 운영되며 각 분야에 필요한 핵심 역량을 체계적으로 학습합니다. 트랙별 세션은 분리되어 진행되지만, 모든 회원은 자유롭게 다른 파트의 수업을 들을 수 있으며 원활한 학습을 위해 주 2회 출석이 필수입니다.",
      sessionArray: ["html, css, JS", "Django", "React", "git", "aws"], // 개발 세션에 해당하는 배열
    },
    {
      title: "디자인 세션",
      trackTitle: "DESIGN TRACK",
      description:
        "디자인 프로세스를 경험하고 서비스 기획에 필요한 디자인 스킬을 학습합니다. 개발자와의 원활한 의사소통을 위해 협업 룰을 익히고 서비스의 퀄리티를 높일 수 있는 심화된 디자인 세션을 진행합니다.",
      sessionArray: ["html, css", "UI/UX", "GRAPHIC", "DESIGN PROCESS"], // 디자인 세션에 해당하는 배열
    },
  ];

  const sessionFooterData = [
    { title: "주 2회 세션 진행", subtitle: "월/목" },
    { title: "대면 원칙", subtitle: "*일부 세션 줌 가능" },
    { title: "18:30 시작, 1-2시간", subtitle: "*변동 가능" },
    { title: "강의실 대여 예정", subtitle: "공학관, 복지관" },
  ];

  return (
    <div id="page_container">
      <Subtitle title={title} subtitle={subtitle} P={description} />
      <div className="activites_main session_main ">
        <section className="atv-sections-container">
          {sessionData.map((session, index) => (
            <div className="atv-section" key={index}>
              <div className="atv-section_title">
                <h1>{session.title}</h1>
              </div>
              <div className="atv-section_column">
                <h3>{session.trackTitle}</h3>
                <div className="atv-section-innerbox">
                  <p>{session.description}</p>
                  <div className="atv-section-innerbox_left">
                    {session.sessionArray.map((track, idx) => (
                      <div className="session_trackBox" key={idx}>
                        {track}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section id="session-footer" className="active-common-footer">
          {sessionFooterData.map((footerItem, idx) => (
            <div className="session-footer_btn" key={idx}>
              {["주 2회 세션 진행", "강의실 대여 예정"].includes(
                footerItem.title
              ) ? (
                <h3 className="footer-title-large">{footerItem.title}</h3>
              ) : (
                <h4 className="footer-title-small">{footerItem.title}</h4>
              )}

              {["*일부 세션 줌 가능", "*변동 가능"].includes(
                footerItem.subtitle
              ) ? (
                <p className="footer-subtext">{footerItem.subtitle}</p>
              ) : (
                <h4 className="footer-subtitle">{footerItem.subtitle}</h4>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default ActivitesSession;
