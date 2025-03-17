import React, { useState, useRef, useEffect } from "react";
import Title from "./common";
import "./css/login.css";
import Footer from "../default/footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="signup_container">
      <main className="signup_body black">
        <Title title="LOGIN" subtitle="로그인" />
        <form className="login_form">
          <div className="login_input">
            <span>이메일</span>
            <input placeholder="이메일을 입력해주세요" />
          </div>
          <div className="login_input">
            <span>비밀번호</span>
            <input placeholder="비밀번호를 입력해주세요" />
          </div>
          <a className="login_a">비밀번호 찾기</a>
        </form>
        <div className="login_button-container">
          <div className="login_button">로그인</div>

          <span className="login_aTxt">
            기존 회원이 아니신가요?{" "}
            <a className="login_a" onClick={() => navigate("/signup")}>
              회원가입하기
            </a>{" "}
          </span>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Login;
