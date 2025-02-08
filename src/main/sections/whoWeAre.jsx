import React, { useState } from 'react';

const WhoWeAre =()=>{

    return(
        <section id="WWASection" className='scrollSection'>
            <h3 className="WWATxt">
                <span className='logoHighlight'>ABOUT US</span>
                WHO WE ARE
            </h3>
            <div className="WWAIntroductionBox">
                <h4 className="introductionTxt logoHighlight">INTRODUCTION</h4>
                <p>멋쟁이 사자처럼 at 국민대학교는 온라인 강의와 오프라인 활동을 통한<br/>체계적인 프로그래밍 교육 동아리이며, 자신만의 서비스를 만들고 싶은 국민대 학생이라면 누구나 지원 가능합니다.</p>
            </div>
        </section>
    )
}

export default WhoWeAre;