import React, { useState } from 'react';
import LikeLionKMULogo from "../../img/lion_logo.svg";
import QualifiedPerson from "../../img/qualified_person.png";

const JoinUs = () => {
    const qualities = [
        { description: "비전공자라도 프로그래밍에 관심이 있는 사람" },
        { description: "웹 개발에 대한 관심과 열정 보유" },
        { description: "톡톡 튀는 아이디어 뱅크" },
        { description: "자신의 손으로 직접 서비스를 만들어 보고 싶은 사람" },
    ];

    return (
        <section id="joinUsSection" className="mainSection">
            <div className="contentWrapper">
                <div className="joinUsHeader">
                    <img src={LikeLionKMULogo} alt="Like Lion KMU Logo" />
                    <h3>
                        <span className='logoHighlight'>멋쟁이사자처럼 at 국민대학교</span>가 좋아하는
                        <br />
                        아기사자 스타일
                    </h3>
                    <p>서류 / 면접 꿀팁 대방출</p>
                </div>
                <div className="joinContent">
                    <div className="joinBox">
                        <img src={QualifiedPerson} alt="Qualified Person" />
                        <div className="qualitiesList">
                            <h4 className='logoHighlight'>WELCOME LIONS</h4>
                            <ul>
                                {qualities.map((item, index) => (
                                <li key={index}>{item.description}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="ctaBox">
                        <p className='font12'>이제 멋쟁이사자처럼 at 국민대에서 꿈을 펼쳐 볼 시간,</p>
                        <button className="joinBtn commonBtn">JOIN US↗</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
