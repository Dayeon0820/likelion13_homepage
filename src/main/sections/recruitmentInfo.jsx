import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../main.css";
import "../css/recruitmentInfo.css";
import LionLogo from "../../img/lion_logo.svg";
import QR from "../../img/google_form.png";


const RecruitmentInfo = () => {
    const scheduleData = [
        { label : "서류 지원", value: "2025.02.10(월) - 2025.02.23(일) 오후 6시"},
        { label : "서류 합격일 발표", value: "2025.03.01(토)"},
        { label : "면접", value: "2025.03.02(화) - 2025.03.07(금)"},
        { label : "최종발표", value: "추후 공지 예정"},
        { label : "전체 OT", value: "2025.03.14(금)"},
    ];

    return(
        <section id="recruitmentSection" className="mainSection scrollSection">
            <div className="mainLogoContainer">
                <h1>LIKELION UNIV. </h1>
                <div className='mainLogoKMUWrapper'>
                    <div className='mainLogoKMUBox'>
                        <h2 className='logoHighlight xTxt'>X</h2>
                        <span className='lionLogoSpan'></span>
                        <h2 className='kmuTxt'>KMU</h2>
                    </div>
                    <button className="aboutUsBtn commonBtn"><Link to="/about">ABOUT US↗</Link></button>
                </div>
            </div>
            {/* <div className="mainLogoContainer">
                <h1>LIKELION UNIV. <span className='logoHighlight xTxt'>X</span><span className='kmuTxt'>KMU</span></h1>
                <button className="aboutUsBtn commonBtn"><Link to="/about">ABOUT US↗</Link></button>
            </div> */}
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
                        <h4 className='activityPeriod scheduleTitle'>활동기간 <span>2025.03 - 2025.12</span></h4>
                        <h4 className="contact scheduleTitle">문의 <span>010-9911-2830｜@likelion_kmu</span></h4>
                    </div>
                    <button className="commonBtn joinBtn">
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