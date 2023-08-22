import { useEffect } from "react";
import styled from "styled-components";

const CurriculumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <StTitle>2023-1 커리큘럼</StTitle>
      <StContent>
        2023-1학기 전체 세션(목요일 18:30 ~ 20:30)에서는
        <br />
        격주로 CTF대회 문제풀이와 토이 프로젝트를 진행합니다.
      </StContent>
      <br />
      <StTitle>토이 프로젝트의 주제</StTitle>
      <StLabel>1. 백도어 개발 및 시나리오 기반 모의해킹</StLabel>
      <StLabel>2. 웹 취약점 자동화 분석 도구(Fuzzer)제작</StLabel>
      <StLabel>3. DFC(Digital Forensics Challenge) 문제 풀이</StLabel>
    </Wrapper>
  );
};

export default CurriculumPage;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 5rem 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  text-align: center;
  line-height: 40px;
  img {
    width: 60%;
    margin: 2rem;
  }

  @media (max-width: 700px) {
    img {
      width: 90%;
      margin: 20px;
    }
  }
`;

const StTitle = styled.h2`
  padding-top: 10rem;
  font-size: 40px;
  margin: 2rem;
  font-weight: bold;
  color: #dfdfdf;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const StContent = styled.p`
  font-size: 25px;
  margin: 2rem;
  @media (max-width: 700px) {
    font-size: 21px;
  }
`;

const StLabel = styled.label`
  width: 33rem;
  margin: 1.5rem;
  flex-direction: row;
  font-size: 27px;

  @media (max-width: 700px) {
    width: 28rem;
    font-size: 23px;
  }
`;
