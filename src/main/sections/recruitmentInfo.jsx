import React, { useState, useEffect, useRef } from 'react';
import "../main.css";

const RecruitmentInfo = () => {
    const scheduleData = [
        { label : "서류 지원", value: "2024.02.08(수) - 2024.02.26(일)"},
        { label : "서류 합격일 발표", value: "2024.03.01(수)"},
        { label : "면접", value: "2024.03.02(목) - 2024.03.07(화)"},
        { label : "최종발표", value: "2024.03.08(수)"},
        { label : "전체 OT", value: "2024.03.09(목) 18시"},
    ];

    const logoRef = useRef(null);
    const containerRef = useRef(null);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const [isContainerVisible, setIsContainerVisible] = useState(false);

    useEffect(()=>{
        const observerOptions = {
            root : null,
            rootMargin: "0px",
            threshold: 0.3, //요소가 30% 보이면 애니메이션 실행
        };

        const logoObserver = new IntersectionObserver(([entry]) => {
            console.log("Logo Entry:", entry); // 확인용 로그
            if (entry.isIntersecting){
                console.log("로고가 보임!");
                setIsLogoVisible(true);
            }
        }, observerOptions);

        const containerObserver = new IntersectionObserver(([entry]) => {
            console.log("Container Entry:", entry); // 확인용 로그
            if (entry.isIntersecting){
                console.log("컨테이너가 보임!");
                setIsContainerVisible(true);
            }
        }, observerOptions);

        if (logoRef.current) logoObserver.observe(logoRef.current);
        if (containerRef.current) containerObserver.observe(containerRef.current);

        

        return () =>{
            if (logoRef.current) logoObserver.unobserve(logoRef.current)
            if (containerRef.current) containerObserver.unobserve(containerRef.current)
        };
    },[]);
    console.log("Logo Visible:", isLogoVisible);
console.log("Container Visible:", isContainerVisible);

    return(
        <section id="recruitmentSection" className="mainSection scrollSection">
            <div ref={logoRef} className={`mainLogoContainer ${isLogoVisible ? "fade-in" : ""}`}>
                 <h1>LIKELION UNIV. <span className='logoHighlight'>X</span> <span className='kmuTxt'>KMU</span></h1>
                 <button className="aboutUsBtn commonBtn">ABOUT US↗</button>
            </div>
            <div ref={containerRef} className={`recruitmentContainer ${isContainerVisible ? "fade-in" : ""}`}>
                <div className="imgBox">
                </div>
                <div className="infoBox">
                    <div className="infoTxt">
                        <h3>멋쟁이사자처럼 at 국민대</h3>
                        <h2>13기 아기사자 모집</h2>
                        <p>멋쟁이사자처럼 at 국민대가<br/> 성공으로 도약할 여러분을 기다리고 있어요!</p>
                    </div>
                    <ul className="schedule">
                        <h4 className='scheduleTitle'>모집일정</h4>
                        {scheduleData.map((item,i) => (
                            <li key={i}>
                                <strong>{item.label} : </strong>{item.value}
                            </li>
                        ))
                        }
                    </ul>
                    <div className="addInfo">
                        <h4 className='activityPeriod scheduleTitle'>활동기간 <span>2024.03 - 2024.12</span></h4>
                        <h4 className="contact scheduleTitle">문의 <span>아래 링크 참조</span></h4>
                    </div>
                    <button className="joinBtn commonBtn">JOIN US↗</button>
                </div>
            </div>
        </section>
    )
}

export default RecruitmentInfo;