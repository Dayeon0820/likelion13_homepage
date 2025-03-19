import React, { useState, useRef, useEffect } from "react";
import Title from "./common";
import "./css/login.css";
import "./css/signup.css";
import Footer from "../default/footer";

function Signup() {
  const formArray = [
    {
      title: "이름",
      type: "text",
      placeholder: "이름을 입력해 주세요",
      className: "signup-input short-input",
    },
    {
      title: "휴대폰 번호",
      type: "number",
      placeholder: "연락 가능한 휴대폰 번호를 입력해 주세요",
      className: "signup-input short-input",
    },
    {
      title: "비밀번호",
      type: "password",
      placeholder: "사용할 비밀번호를 입력해주세요",
      className: "signup-input",
    },
    {
      title: "비밀번호 확인",
      type: "password",
      placeholder: "사용할 비밀번호를 다시 한번 입력해 주세요",
      className: "signup-input",
    },
  ];
  return (
    <div className="signup_container">
      <main className="signup_body black">
        <Title title="SIGNUP" subtitle="회원가입" />
        <form id="signup_form">
          <div className="signup_input-container">
            <div className="signup-input_innerBox">
              <span className="signup-input_title">이메일</span>
              <h4>국민대학교 웹메일로 입력해주세요</h4>
            </div>
            <div className="signup-input_innerBox signup-innerBox_second ">
              <input
                className="signup-input email-input"
                placeholder="이메일 주소를 입력해주세요"
                type="email"
                required
              />
              <button id="verityEmail">이메일인증</button>
            </div>
          </div>
          {formArray.map((i) => {
            return (
              <div className="signup_input-container" key={i.title}>
                <div className="signup-input_innerBox">
                  <span className="signup-input_title">{i.title}</span>
                </div>
                <div className="signup-input_innerBox signup-innerBox_second">
                  <input
                    className={i.className}
                    placeholder={i.placeholder}
                    type={i.type}
                    required
                  />
                </div>
              </div>
            );
          })}
          <div id="signup-buttonBox">
            <button className="signup-btn signup_cancle">취소</button>
            <button className="signup-btn signup_submit">가입하기</button>
          </div>
        </form>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Signup;
