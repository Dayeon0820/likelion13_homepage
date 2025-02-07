import React, { useState } from 'react';
import "./main.css";
import RecruitmentInfo from "./sections/recruitmentInfo";

const MainPage=()=>{

    return(
        <main id="main" className='main'>
            <RecruitmentInfo />

        </main>
    );
}

export default MainPage;