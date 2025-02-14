import React, { useState, useRef, useEffect } from 'react';
import "../main.css";
import "../css/mobile.css";
import likeLionLogo from"../../img/LIKELION_symbol_white_forweb_220622.png";


const MobilePage=()=>{

    return(
        <section id="MobileSection" className="mainSection scrollSection">
            <div className="inquiryTitleBox">
                <img src={likeLionLogo} alt="" className="logo" />
                <p>멋쟁이사자처럼 at 국민대</p>
                <h5 className='logoHighlight'>13기 아기사자 지원문의</h5>
            </div>
            <div className="inquiryContents">
                <h4>국민대학교 대표</h4>
                <div className="innerBox">
                    <h3 className='tel logoHighlight'>010-9911-2830</h3>
                    <div className="instaBox">
                        <p>멋쟁이사자처럼 at 국민대 인스타그램 계정 DM 문의</p>
                        <h5 className='logoHighlight'>@likelion_kmu</h5>
                    </div>
                </div>
            </div>
            <div className="joinBtnBox">
                <p>준비되었다면,
                </p>
                <button className="joinBtn commonBtn joinBtn-lastPage">
                    <a href="https://forms.gle/mqwKMLhqsaSJCt6s7" target="_blank" rel="noopener noreferrer">
                        JOIN US↗
                    </a>
                </button>
            </div>
        </section>
    );
}

export default MobilePage;