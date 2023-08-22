import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    line-height: 5rem;
    font-size: 2rem;

    div {
      width: 70%;
    }
  `,
  Title: styled.p`
    font-size: 6rem;
    font-weight: 600;

    @media (min-width: 1024px) {
      margin-top: 20rem;
      margin-bottom: 7rem;
    }
    @media (max-width: 1023px) {
      margin-top: 10rem;
      margin-bottom: 5rem;
    }
  `,
  Button: styled.button`
    color: black;
    width: 200px;
    height: 80px;
    background-color: white;
    font-size: 2.4rem;
    margin: 20px;
    border-radius: 0.8rem;

    &:hover {
      background-color: green;
    }
  `,
};

const Apply = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Title>EVI$ION 6th</S.Title>
        <Link to="https://forms.gle/5GeMGzhikCpkBVop7">
          <S.Button>Apply</S.Button>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default Apply;
