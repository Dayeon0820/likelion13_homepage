import React, { useState, useRef, useEffect } from 'react';
import "./main.css";

import Header from "../default/header";
import RecruitmentInfo from "./sections/recruitmentInfo";
import WhoWeAre from "./sections/whoWeAre";
import History from "./sections/history";
import FAQ from "./sections/FAQ";
import JoinUs from "./sections/joinUs";
import Footer from "../default/footer";
import MobilePage from "../main/sections/mobile";


const MainPage=()=>{

    return(
        <main id="main" className='main'>
            <RecruitmentInfo />
            <WhoWeAre/>
            <History/>
            <FAQ/>
            <JoinUs/>
            <MobilePage/>
            <div className="footer-container scrollSection">
                <Footer />
            </div>
        </main>
    );
}

export default MainPage;