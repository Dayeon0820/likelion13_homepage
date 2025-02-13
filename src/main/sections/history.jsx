import React, { useState, useRef, useEffect } from 'react';
import "../css/history.css";
import LikeLionKMULogo from "../../img/lion_logo.svg";
import LikeLionKMU10 from "../../img/LIKELION_KMU_10st.png";
import LikeLionKMU12 from "../../img/likelion_history_4호선톤 수상 1.png";


const History = () => {
  const historyRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [itemVisible, setItemVisible] = useState([]); 
  
  const group = "국민대학교 멋쟁이사자처럼";
  const programData = [
    { year: 2018, group: `${group} 5기 start`, content: "", img: "" },
    { year: 2022, group: `${group} 10기`, content: "Sellon 팀 중앙해커톤 동상 수상 (73팀 중 4위)", img: LikeLionKMU10 },
    { year: 2024, group: `${group} 12기`, content: "오이지 팀(송지민) 연합해커톤 4호선톤 최우수상 수상", img: LikeLionKMU12 },
    { year: 2025, group: `${group} 13기 모집`, content: "", img: "" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (historyRef.current) {
      observer.observe(historyRef.current);
    }

    // 리스트에 IntersectionObserver 설정
    const itemObservers = programData.map((_, index) => {
      const itemRef = document.querySelector(`#historyItem-${index}`);
      const itemObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setItemVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }
      }, { threshold: 0.5 });

      if (itemRef) {
        itemObserver.observe(itemRef);
      }

      return itemObserver;
    });

    return () => {
      if (historyRef.current) {
        observer.unobserve(historyRef.current);
      }
      itemObservers.forEach(observer => observer.disconnect());
    };
  }, [programData.length]); 

  return (
    <section id="historySection" className='mainSection scrollSection'>
      <h3 className="historyTitle">OUR HISTORY & ACHIEVEMENT</h3>
      <div className="historyContainer">
        <span className="imgWrapper">
          <img src={LikeLionKMULogo} alt="멋쟁이 사자처럼 국민대 로고" />
        </span>
        <div className="historyWrapper">
          <div className="historyPoints" ref={historyRef}>
            <span className="startPoint"></span>
            <div className={`historyLine ${isVisible ? 'animateLine' : ''}`}></div>
            <span className="endPoint"></span>
          </div>
          <ul className="historyLists">
            {programData.map((item, i) => (
              <li
                key={i}
                id={`historyItem-${i}`}
                className={itemVisible[i] ? 'visible' : ''}
              >
                <h4 className='logoHighlight'>{item.year}</h4>
                <div className="content">
                  {item.group}
                  <span className='logoHighlight'>{item.content}</span>
                </div>
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default History;