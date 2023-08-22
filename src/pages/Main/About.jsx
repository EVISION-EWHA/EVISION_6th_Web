import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "./useScrollFadeIn";
import flag from "assets/flag.png";

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
  FirstWrapper: styled.section`
    width: 100%;
    height: 108rem;
    background: linear-gradient(#000000, #00331d);
    @media (max-width: 1023px) {
      height: 85rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    line-height: 9rem;

    b {
      font-size: 12rem;
      line-height: 12rem;
      font-weight: 600;
      @media (max-width: 1023px) {
        width: 80%;
        font-size: 10rem;
        line-height: 12rem;
        font-weight: 600;
      }
      span {
        color: #e2a600;
      }
    }

    p {
      padding-top: 60px;
    }
    p span {
      position: absolute;
      top: 80rem;
      left: 50%;
      width: 36px;
      height: 36px;
      margin-left: -18px;
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      -webkit-animation: sdb 2s infinite;
      animation: sdb 2s infinite;
      box-sizing: border-box;
      @media (max-width: 1023px) {
        top: 70rem;
        width: 24px;
        height: 24px;
        margin-left: -12px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
      }
    }
    @-webkit-keyframes sdb {
      0% {
        -webkit-transform: rotate(-45deg) translate(0, 0);
      }
      20% {
        -webkit-transform: rotate(-45deg) translate(-10px, 10px);
      }
      40% {
        -webkit-transform: rotate(-45deg) translate(0, 0);
      }
    }
    @keyframes sdb {
      0% {
        transform: rotate(-45deg) translate(0, 0);
      }
      20% {
        transform: rotate(-45deg) translate(-10px, 10px);
      }
      40% {
        transform: rotate(-45deg) translate(0, 0);
      }
    }
  `,
  Label: styled.div`
    @media (min-width: 1024px) {
      display: flex;
    }
    p {
      font-size: 2.4rem;
      line-height: 6rem;
      @media (max-width: 1023px) {
        font-size: 2rem;
        line-height: 4rem;
      }
    }

    .flag {
      width: 40rem;
      height: 40rem;
      @media (min-width: 1024px) {
        margin-right: 10rem;
      }
      @media (max-width: 1023px) {
        width: 25rem;
        height: 25rem;
      }
    }
  `,
  Title: styled.p`
    font-size: 7rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      margin-top: 20rem;
      margin-bottom: 7rem;
    }
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;

      font-size: 6rem;
      font-weight: 500;
      margin-top: 8rem;
      margin-bottom: 5rem;
    }
  `,
};

const About = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0),
    1: useScrollFadeIn("up", 1, 0.1),
    2: useScrollFadeIn("up", 1, 0.1),
  };

  return (
    <S.Wrapper>
      <S.FirstWrapper>
        <b {...animatedItem[0]}>
          <span>E</span>wha's <span>VI$ION</span> in security
        </b>
        <p>
          <span></span>
        </p>
      </S.FirstWrapper>
      <S.Title {...animatedItem[1]}>EVI$ION</S.Title>
      <S.Label {...animatedItem[2]}>
        <img src={flag} class="flag" alt="" />
        <p>
          EVI$ION은
          <br />
          엘텍공과대학 소프트웨어학부 사이버보안전공 소속의
          <br />
          유일한 과동아리이자 오펜시브 시큐리티 동아리입니다
          <br />
          6기수째 사이버보안 벗들을 중심으로
          <br />
          사이버보안 전공의 학술적인 발전을 도모하고 있습니다
        </p>
      </S.Label>
    </S.Wrapper>
  );
};

export default About;
