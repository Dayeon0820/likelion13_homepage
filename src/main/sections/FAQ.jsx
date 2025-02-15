import React, { useState, useEffect, useRef } from "react";
import "../css/FAQ.css";
import Possibility from "../../img/possibility.png";

const FAQ = () => {
    const QuestionData = [
        { question: "활동 기간은 어떻게 되나요?", answer: "13기 아기사자 활동은 1년 동안 진행됩니다. 3월 초에 모든 아기사자 모집이 마감되고 12월에 활동이 종료됩니다." },
        { question: "하고 싶은 분야가 많은데 여러 파트를 지원해도 되나요?", answer: "아쉽게도 아기사자 지원 시 개발/디자인 트랙 중 하나의 파트만 지원이 가능합니다. 하지만 아이디어톤과 해커톤, 세션 진행 시 하나의 트랙에 국한되지 않은 유연한 학습이 가능하니 자신이 좀 더 관심 있고 파고들 수 있는 분야로 지원해주세요!" },
        { question: "면접은 어떻게 진행되나요?", answer: "13기 아기사자 면접은 대면을 통해 진행됩니다." },
        { question: "학년에 제한이 있나요?", answer: "멋쟁이사자처럼 at 국민대는 재학/휴학, 학년 제한 없이 모든 국민대학교 학우분들께 열려있습니다" },
        { question: "비전공자나 개발 경험이 없어도 지원 가능할까요?", answer: "당연히 가능합니다. 멋쟁이사자처럼 at 국민대는 개발과 창업, 서비스 제작에 관심과 열정이 가득한 모든 국민대 학우분들을 환영합니다!" },
    ];

    const faqItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 } // 20% 이상 보이면 애니메이션 실행
        );

        faqItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => {
            faqItemsRef.current.forEach((item) => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    return (
        <section id="FAQSection" className="mainSection scrollSection">
            <div className="FAQLogoBox">
                <img src={Possibility} alt="" />
            </div>
            <div className="FAQContainer">
                <div className="FAQTitle">
                    <h3 className="logoHighlight">FAQ</h3>
                    <div className="FAQ">
                        <h3>자주 묻는 질문</h3>
                        <p className="font14">이외에도 궁금한 점이 있으시면 언제든 인스타그램(@likelion_kmu)으로 문의 주시면 빠르게 답변 드리겠습니다.</p>
                    </div>
                </div>
                <ul className="FAQLists">
                    {QuestionData.map((data, i) => (
                        <li key={i} ref={(el) => (faqItemsRef.current[i] = el)} className="faq-item">
                            <h3 className="logoHighlight">Q</h3>
                            <div className="QAndA">
                                <h4 className="question logoHighlight">{data.question}</h4>
                                <p className="font12">{data.answer}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FAQ;