import React, { useState } from 'react';
import "./main.css";
import RecruitmentInfo from "./sections/recruitmentInfo";
import WhoWeAre from "./sections/whoWeAre";
import History from "./sections/history";
import FAQ from "./sections/FAQ";
import JoinUs from "./sections/joinUs";

const MainPage=()=>{

    return(
        <main id="main" className='main'>
            <RecruitmentInfo />
            <WhoWeAre/>
            <History/>
            <FAQ/>
            <JoinUs/>
        </main>
    );
}

export default MainPage;