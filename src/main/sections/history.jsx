import React, { useState } from 'react';
import LikeLionKMULogo from "../../img/lion_logo.svg";
import LikeLionKMU10 from "../../img/LIKELION_KMU_10st.png";

const History = () => {
    const group = "국민대학교 멋쟁이사자처럼"
    const programData = [
        { year: 2018, group: `${group} 5기 start`, content: "", img: ""},
        { year: 2022, group: `${group} 10기`, content: "Sellon 팀 중앙해커톤 동상 수상 (73팀 중 4위)", img: LikeLionKMU10},
        { year: 2025, group: `${group} 13기 모집`, content: "", img: ""},
    ]


    return(
        <section id="historySection" className='mainSection'>
            <h3 className="historyTitle">OUR HISTORY & ACHIEVEMENT</h3>
            <div className="historyContainer">
                <span className="imgWrapper">
                    <img src={LikeLionKMULogo}alt="멋쟁이 사자처럼 국민대 로고" />
                </span>
                <div className="historyWrapper">
                    <ul className="historyLists">
                        {programData.map((item,i) => (
                            <li key={i}>
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
    )
}

export default History;