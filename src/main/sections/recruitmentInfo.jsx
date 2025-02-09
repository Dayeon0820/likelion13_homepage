import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../main.css";

const RecruitmentInfo = () => {
    const scheduleData = [
        { label : "서류 지원", value: "2024.02.08(수) - 2024.02.26(일)"},
        { label : "서류 합격일 발표", value: "2024.03.01(수)"},
        { label : "면접", value: "2024.03.02(목) - 2024.03.07(화)"},
        { label : "최종발표", value: "2024.03.08(수)"},
        { label : "전체 OT", value: "2024.03.09(목) 18시"},
    ];

    return(
        <section id="recruitmentSection" className="mainSection scrollSection">
            <div className="mainLogoContainer">
                 <h1>LIKELION UNIV. <span className='logoHighlight'>X</span> <span className='kmuTxt'>KMU</span></h1>
                 <button className="aboutUsBtn commonBtn"><Link>ABOUT US↗</Link></button>
            </div>
            <div className="recruitmentContainer">
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
                    <button className="joinBtn commonBtn">
                        <a href="https://forms.gle/mqwKMLhqsaSJCt6s7" target="_blank" rel="noopener noreferrer">
                        JOIN US↗
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default RecruitmentInfo;