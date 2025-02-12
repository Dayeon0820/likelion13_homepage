import "../../App.css";
import "../about.css";
import React, { useState, useEffect } from "react";
import Footer from "../../default/footer";

function Counter({ value, duration = 2000, startPercentage = 70 }) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false); // 카운트 체크

  useEffect(() => {
    let start = (value * startPercentage) / 100; // value의 70% 부터 시작
    const fastIncrement = (value - start - 3) / (duration / 20); 
    const timer = setInterval(() => {
      start += fastIncrement;
      if (start >= value - 3) {
        start = value - 3; 
        clearInterval(timer);

        // -3부터는 0.4초에 1씩 증가
        const slowIncrementTimer = setInterval(() => {
          if (start < value) {
            start += 1;
            setCount(start);
          } else {
            clearInterval(slowIncrementTimer); // start == value 일 때 종료
            setIsFinished(true); 
          }
        }, 400); // 0.4초
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration, startPercentage]);

  return (
    <h4 className={isFinished ? "ring-text" : ""}>
      {count.toLocaleString()}+
    </h4>
  );
}

function IntroductionAbout() {
  const contents = [
    { number: 61, text: "개의 대학," },
    { number: 500, text: "명의 운영진," },
    { number: 2000, text: "명이 참가하는" },
  ];

  const AboutFooterItems = [
    { title: "VOD 강의 제공", subtitle: "온/오프라인 학습", isTitleH4: false },
    { title: "서비스 빌딩을 위한", subtitle: "월/목", isTitleH4: true },
    { title: "중앙/교내", subtitle: "아이디어톤", isTitleH4: false },
    { title: "멋사의 꽃", subtitle: "해커톤", isTitleH4: false },
  ];

  return (
    <div id="page_container" >
      <section id="about_main" className="common_main">
        <h2 id="about-title">멋쟁이사자처럼 at 국민대는 어떤 동아리인가요?</h2>
        <div id="about-introBox">
          <h3>INTRODUCTION</h3>
          <p>
            멋쟁이 사자처럼 at 국민대학교는 온라인 강의와 오프라인 활동을 통한
            체계적인 프로그래밍 교육 동아리이며,<br /> 자신만의 서비스를 만들고 싶은
            국민대 학생이라면 누구나 지원 가능합니다.
          </p>
        </div>
        <h4 id="about-subtitle" className="about-subtitle">
          멋쟁이 사자처럼은 <span>누구나</span> 자신만의 IT서비스를 개발할 수
          있도록 <span>웹 개발 및 기획</span>을 교육하는 동아리입니다.
        </h4>
        <div className="about-bit-subtitle">
          {contents.map((content, index) => (
            <div key={index} className="about-contents">
              <Counter value={content.number} startPercentage={70} /> 
              <span>{content.text}</span>
            </div>
          ))}
        </div>
        <h4 id="about-contents-txt" className="about-subtitle">
          전국 <span className="orange_txt">최대 규모</span> 개발/창업 동아리입니다.
        </h4>
      </section>
      <section id="about-footer">
        {AboutFooterItems.map((item, index) => (
          <div key={index} className="session-footer_btn">
            {item.isTitleH4 ? <h4>{item.title}</h4> : <h3>{item.title}</h3>}
            <h4>{item.subtitle}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}

export default IntroductionAbout;



// import "../../App.css";
// import "../about.css";
// import React, { useState, useEffect } from "react";
// import Footer from "../../default/footer";

// function Counter({ value, duration = 2000, startPercentage = 70 }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = (value * startPercentage) / 100; // 시작 값을 70%로 설정
//     const fastIncrement = (value - start - 4) / (duration / 20); // 빠른 증가 속도
//     const timer = setInterval(() => {
//       start += fastIncrement;
//       if (start >= value - 4) {
//         start = value - 4; // -4로 설정
//         clearInterval(timer);

//         // 이제 -4부터는 1초에 1씩 증가
//         const slowIncrementTimer = setInterval(() => {
//           if (start < value) {
//             start += 1;
//             setCount(start);
//           } else {
//             clearInterval(slowIncrementTimer); // 목표 숫자에 도달하면 종료
//           }
//         }, 500); // 0.5초마다 1씩 증가
//       }
//       setCount(Math.floor(start));
//     }, 16);

//     return () => clearInterval(timer);
//   }, [value, duration, startPercentage]);

//   return <h4>{count.toLocaleString()}+</h4>;
// }

// function IntroductionAbout() {
//   const contents = [
//     { number: 61, text: "개의 대학," },
//     { number: 500, text: "명의 운영진," },
//     { number: 2000, text: "명이 참가하는" },
//   ];

//   const AboutFooterItems = [
//     { title: "VOD 강의 제공", subtitle: "온/오프라인 학습", isTitleH4: false },
//     { title: "서비스 빌딩을 위한", subtitle: "월/목", isTitleH4: true },
//     { title: "중앙/교내", subtitle: "아이디어톤", isTitleH4: false },
//     { title: "멋사의 꽃", subtitle: "해커톤", isTitleH4: false },
//   ];

//   return (
//     <div id="page_container">
//       <section id="about_main">
//         <h2 id="about-title">멋쟁이사자처럼 at 국민대는 어떤 동아리인가요?</h2>
//         <div id="about-introBox">
//           <h3>INTRODUCTION</h3>
//           <p>
//             멋쟁이 사자처럼 at 국민대학교는 온라인 강의와 오프라인 활동을 통한
//             체계적인 프로그래밍 교육 동아리이며,<br /> 자신만의 서비스를 만들고 싶은
//             국민대 학생이라면 누구나 지원 가능합니다.
//           </p>
//         </div>
//         <h4 id="about-subtitle" className="about-subtitle">
//           멋쟁이 사자처럼은 <span>누구나</span> 자신만의 IT서비스를 개발할 수
//           있도록 <span>웹 개발 및 기획</span>을 교육하는 동아리입니다.
//         </h4>
//         <div className="about-bit-subtitle">
//           {contents.map((content, index) => (
//             <div key={index} className="about-contents">
//               <Counter value={content.number} startPercentage={70} />
//               <span>{content.text}</span>
//             </div>
//           ))}
//         </div>
//         <h4 id="about-contents-txt" className="about-subtitle">
//           전국 <span className="orange_txt">최대 규모</span> 개발/창업 동아리입니다.
//         </h4>
//       </section>
//       <section id="about-footer">
//         {AboutFooterItems.map((item, index) => (
//           <div key={index} className="session-footer_btn">
//             {item.isTitleH4 ? <h4>{item.title}</h4> : <h3>{item.title}</h3>}
//             <h4>{item.subtitle}</h4>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default IntroductionAbout;



// import "../../App.css";
// import "../about.css";
// import React, { useState } from "react";
// import Footer from "../../default/footer";

// function IntroductionAbout() {
//   const contents = [
//     { number: "61+", text: "개의 대학," },
//     { number: "500+", text: "명의 운영진," },
//     { number: "2000+", text: "명이 참가하는" },
//   ];

//   const AboutFooterItems = [
//     { title: "VOD 강의 제공", subtitle: "온/오프라인 학습", isTitleH4: false },
//   { title: "서비스 빌딩을 위한", subtitle: "월/목", isTitleH4: true },
//   { title: "중앙/교내", subtitle: "아이디어톤", isTitleH4: false },
//   { title: "멋사의 꽃", subtitle: "해커톤", isTitleH4: false },
//   ];


//   return (
//     <div id="page_container">
//       <section id="about_main">
//         <h2 id="about-title">멋쟁이사자처럼 at 국민대는 어떤 동아리인가요?</h2>
//         <div id="about-introBox">
//           <h3>INTRODUCTION</h3>
//           <p>
//             멋쟁이 사자처럼 at 국민대학교는 온라인 강의와 오프라인 활동을 통한
//             체계적인 프로그래밍 교육 동아리이며,<br/> 자신만의 서비스를 만들고 싶은
//             국민대 학생이라면 누구나 지원 가능합니다.
//           </p>
//         </div>
//         <h4 id="about-subtitle" className="about-subtitle">
//           멋쟁이 사자 처럼은 <span>누구나</span> 자신만의 IT서비스를 개발할 수
//           있도록 <span>웹 개발 및 기획</span>을 교육하는 동아리입니다.
//         </h4>
//         <div className="about-bit-subtitle">
//           {contents.map((content) => (
//             <div className="about-contents">
//               <h4>{content.number}</h4>
//               <span>{content.text}</span>
//             </div>
//           ))}
//         </div>
//         <h4 id="about-contents-txt" className="about-subtitle">
//           전국 <span className="orange_txt">최대 규모</span> 개발/창업 동아리입니다.
//         </h4>
//       </section>
//       <section id="about-footer">
//         {AboutFooterItems.map((item, index) => (
//         <div key={index} className="session-footer_btn">
//           {item.isTitleH4 ? <h4>{item.title}</h4> : <h3>{item.title}</h3>}
//           <h4>{item.subtitle}</h4>
//         </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default IntroductionAbout;
