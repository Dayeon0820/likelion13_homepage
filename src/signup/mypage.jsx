import React, { useState, useRef, useEffect } from "react";
import Title from "./common";
import "./css/login.css";
import "./css/mypage.css";
import Footer from "../default/footer";
import { useNavigate } from "react-router-dom";

function Mypage() {
  return (
    <div className="signup_container">
      <main className="signup_body black">
        <Title title="MY PAGE" subtitle="마이페이지" />
        <div id="mypage_section-container">
          <section id="mypage_section">
            <div className="mypage_Img-container">
              <img src="./profile.png" />
            </div>
            <div className="mypage_info-container">
              <div className="mypape_info-name">
                <h4>이다연</h4>
                <h6>님</h6>
              </div>
              <div className="mypage_linkBox">
                <span>내 정보 수정</span>
                <span> | </span>
                <span href="#">비밀번호 변경</span>
              </div>
              <div className="mypage_detailBox">
                <div className="mypage_detail-innerBox">
                  <span className="mypage_detail_key">이메일</span>
                  <span className="mypage_detail_value">dfsdf@@f.com</span>
                </div>
                <div className="mypage_detail-innerBox">
                  <span className="mypage_detail_key">전화번호</span>
                  <span className="mypage_detail_value">010-2323-1233</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Mypage;
