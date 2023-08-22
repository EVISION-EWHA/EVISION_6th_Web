import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ctf from "assets/ctf.png";
import session from "assets/session.png";
import contest from "assets/contest.png";
import bugbounty from "assets/bugbounty.png";
import pentest from "assets/pentest.png";
import ctfsession from "assets/ctfsession.png";
import projectsession from "assets/projectsession.png";
import hspaceCTF from "assets/hspaceCTF.png";
import medusa from "assets/medusa.png";
import ddos from "assets/ddos.png";

import career from "assets/career.png";
import hspace from "assets/space.png";

const S = {
  Wrapper: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: black;
    color: white;
    text-align: center;
    line-height: 9rem;
  `,
  Label: styled.div`
    width: 90%;
    @media (min-width: 1024px) {
      display: flex;
      justify-content: center;
      gap: 20rem;
    }
    b {
      font-size: 5rem;
      font-weight: 500;
      line-height: 5rem;

      @media (max-width: 1023px) {
        font-size: 4rem;
        font-weight: 500;
        line-height: 4rem;
      }
    }
    p {
      border-radius: 2rem;
      font-size: 2.4rem;
      line-height: 5rem;
      @media (min-width: 1023px) {
        background-color: rgb(255, 255, 255, 0.1);
        padding: 4rem;
      }
    }

    .career {
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 4rem;
      @media (min-width: 1023px) {
        width: 50%;
        padding: 6rem;
      }
      @media (max-width: 700px) {
        width: 90%;
        padding: 3rem;
      }
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h3 {
      font-size: 2rem;
      line-height: 5rem;
      font-weight: 400;
    }

    .award {
      font-size: 2rem;
      padding: 4rem;
      line-height: 4rem;
      @media (max-width: 1023px) {
        border-radius: 2rem;
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  `,
  Article: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    nav {
      @media (max-width: 1023px) {
        gap: 2rem;
        font-size: 1.5rem;
        line-height: 3rem;
        margin-bottom: 1rem;
      }
      display: flex;
      width: 90%;
      justify-content: center;
      gap: 3rem;
      font-size: 2.3rem;
      line-height: 3.5rem;
      margin-bottom: 2rem;
      div {
        &:hover {
          cursor: pointer;
        }
      }
    }
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgb(255, 255, 255, 0.15);
      border-radius: 1.5rem;
      width: 70%;
      padding: 2rem;
    }
    section > img {
      width: 90%;
      height: 60rem;
      margin-bottom: 1rem;
      @media (max-width: 1023px) {
        height: 20rem;
      }
    }
    section > p {
      @media (max-width: 1023px) {
        gap: 2rem;
        font-size: 1.5rem;
        line-height: 3rem;
        margin-bottom: 1rem;
      }
      width: 90%;
      font-size: 2.3rem;
      line-height: 3.5rem;
    }
  `,
  Title: styled.p`
    font-size: 6rem;
    font-weight: 600;
    margin-top: 20rem;
    margin-bottom: 2rem;
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;

      font-size: 5rem;
      line-height: 6rem;
      font-weight: 500;
      margin-top: 8rem;
      margin-bottom: 5rem;
    }
  `,
  Subtitle: styled.p`
    font-size: 5rem;
    font-weight: 500;
    margin-top: 8rem;
    margin-bottom: 3rem;
    @media (max-width: 1023px) {
      margin-top: 7rem;
      margin-bottom: 2rem;

      font-size: 3rem;
      line-height: 4rem;
      font-weight: 400;
    }
  `,
  Button: styled.div`
    background-color: white;
    color: black;
    padding: 5% 5rem;
    margin-top: 10rem;
    border-radius: 0.8rem;

    font-size: 2.4rem;
    font-weight: 400;
    line-height: 4rem;

    &:hover {
      background-color: green;
    }
  `,
};

const Result = () => {
  const [firstOpt, setFirstOpt] = useState("1");
  const [secondOpt, setSecondOpt] = useState("1");

  return (
    <S.Wrapper>
      <S.Title>EVI$ION 5기 활동</S.Title>
      <S.Subtitle>2022-2 + Winter</S.Subtitle>
      <S.Article>
        <nav>
          <div
            style={
              firstOpt === "1"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setFirstOpt("1")}
          >
            정규세션+심화세션
          </div>
          <div
            style={
              firstOpt === "2"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setFirstOpt("2")}
          >
            내부CTF
          </div>
          <div
            style={
              firstOpt === "3"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setFirstOpt("3")}
          >
            외부CTF
          </div>
          <div
            style={
              firstOpt === "4"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setFirstOpt("4")}
          >
            겨울방학활동
          </div>
          <div
            style={
              firstOpt === "5"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setFirstOpt("5")}
          >
            ETC.
          </div>
        </nav>
        <section
          style={firstOpt === "1" ? { display: "" } : { display: "none" }}
        >
          <img src={session} alt="" />
          <p>
            선후배 멘토링 프로그램을 통한 web/pwnable/reversing/forensic 주제의
            <br />
            오펜시브 시큐리티 개념 다지기 및 CTF 문제풀이를 통한 해킹 기법 공부
          </p>
        </section>
        <section
          style={firstOpt === "2" ? { display: "" } : { display: "none" }}
        >
          <img src={ctf} alt="" />
          <p>
            세션 + 심화스터디를 통해 배운것을 바탕으로
            문제출제(web/pwnable/reversing/forensic), ctf 구축 등<br />
            동아리내에서 대회 개최, 모든 부원이 참여한 EVI$ION 내부 CTF
          </p>
        </section>
        <section
          style={firstOpt === "3" ? { display: "" } : { display: "none" }}
        >
          <img src={contest} alt="" />
          <p>화이트햇, DFC, POX 등 외부 해킹 대회 참가를 통한 실력 성장</p>
        </section>
        <section
          style={firstOpt === "4" ? { display: "" } : { display: "none" }}
        >
          <img src={pentest} alt="" />
          <p>
            1. 시나리오기반 모의해킹 공부 자세한 영상은 아래 링크 참조
            <br />
            https://drive.google.com/drive/folders/14zm_Gj-4QMJShsRovdddpZpTP2IvO2jG?usp=sharing
            <br />
            2. EV$ION 웹사이트 (what you're looking at right now!) 개발
          </p>
        </section>
        <section
          style={firstOpt === "5" ? { display: "" } : { display: "none" }}
        >
          <img src={bugbounty} alt="" />
          <p>
            toss, 우리은행 등의 버그바운티 대회, 모의해킹 프로젝트, AI 보안
            대회, 개발 등 CTF 외의 보안 및 소프트웨어 대회 참가
          </p>
        </section>
      </S.Article>
      <S.Subtitle>2023-1 + Summer</S.Subtitle>
      <S.Article>
        <nav>
          <div
            style={
              secondOpt === "1"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setSecondOpt("1")}
          >
            CTF세션
          </div>
          <div
            style={
              secondOpt === "2"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setSecondOpt("2")}
          >
            Project세션
          </div>
          <div
            style={
              secondOpt === "3"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setSecondOpt("3")}
          >
            내부CTF
          </div>
          <div
            style={
              secondOpt === "4"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setSecondOpt("4")}
          >
            여름방학활동
          </div>
          <div
            style={
              secondOpt === "5"
                ? { borderBottom: "2px solid white" }
                : { borderBottomColor: "" }
            }
            onClick={() => setSecondOpt("5")}
          >
            ETC.
          </div>
        </nav>
        <section
          style={secondOpt === "1" ? { display: "" } : { display: "none" }}
        >
          <img src={ctfsession} alt="" />
          <p>
            HackDay, DEFCON, DreamHack Blitz CTF 등
            <br />
            개인 또는 팀을 구성해서 국내외 CTF에 참가
          </p>
        </section>
        <section
          style={secondOpt === "2" ? { display: "" } : { display: "none" }}
        >
          <img src={projectsession} alt="" />
          <p>
            웹 Fuzzing, 시나리오기반모의해킹, 디지털포렌식 챌린지
            <br /> 총 3가지 팀을 관심사 기반으로 구성하여 공부
          </p>
        </section>
        <section
          style={secondOpt === "3" ? { display: "" } : { display: "none" }}
        >
          <img src={hspaceCTF} alt="" />
          <p>H-Space와 연계한 EVI$ION 내부 CTF</p>
        </section>
        <section
          style={secondOpt === "4" ? { display: "" } : { display: "none" }}
        >
          <img src={medusa} alt="" />
          <p>Medusa: 문서형 악성코드 제작 프로젝트</p>
        </section>
        <section
          style={secondOpt === "5" ? { display: "" } : { display: "none" }}
        >
          <img src={ddos} alt="" />
          <p>
            DDoS Generator 제작 프로젝트(기업외주 및 타대 해킹동아리와 협업)
          </p>
        </section>
      </S.Article>
      <Link to="/curriculum">
        <S.Button>
          6th EVI$ION <br />
          커리큘럼 보러가기
        </S.Button>
      </Link>
      <S.Title>Accomplishment</S.Title>
      <S.Label>
        <div>
          <b>Contest</b>
          <p className="award">
            양자암호통신 아이디어 공모전 대상
            <br />
            소프트웨어 개발 보안 경진대회 최우수상
            <br />
            블록체인 아이디어 공모전 최우수상
            <br />
            스마트 시티 서비스 아이디어 공모전 우수상
            <br />
            K-사이버 시큐리티 챌린지 자동차침입탐지부문 우수상
            <br />
            현대오토에버 앱 개발 공모전 우수상
            <br />
            SW중심대학 공동 AI 경진대회 본선
            <br />
            교내 창업 경진대회 우수상
            <br />
            KU 해커톤 우수상
          </p>
        </div>
        <div>
          <b>Research / Project</b>
          <p className="award">
            한국 IT서비스 학회 추계학술대회 우수논문상
            <br />
            웹 취약점 스캐너 Fuzzer 제작
            <br />
            리버싱을 이용한 게임핵 제작
            <br />
            시나리오 기반의 모의해킹 프로젝트
            <br />
            BOB 차세대 보안리더 양성 프로그램 수료
            <br />
            스틸리언, BOSCH KOREA, 금융감독원 프로그램
          </p>
        </div>
      </S.Label>
      <S.Title>Alumni + Career</S.Title>
      <S.Label>
        <section>
          <img src={career} className="career" alt="" />
        </section>
      </S.Label>
      <S.Title>Partner</S.Title>
      <S.Label>
        <section>
          <img src={hspace} className="" alt="" />
          <h3>
            파트너쉽 혜택
            <br />
            - 전국 보안 동아리 연합 CTF 대회
            <br />
            - 보안 전문가의 무료 보안 강의
            <br />
            - 보안 공부를 위한 공간 무료 대여
            <br />
            - 그외 진로 보안 관련 컨설팅
            <br />
          </h3>
        </section>
      </S.Label>
    </S.Wrapper>
  );
};

export default Result;
