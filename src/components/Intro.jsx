import styled from "styled-components";

function Intro() {
  return (
    <StIntro>
      <h1>ABOUT</h1>
      <p>EVI$ION은</p>
      <p>엘텍공과대학 소프트웨어학부 사이버보안전공</p>
      <p>소속의 유일한 전공유관 과동아리 입니다.</p>
      <p>5기수째 사이버보안 벗들을 중심으로</p>
      <p>사이버보안 전공의 학술적인 발전을 도모하고 있습니다.</p>
      <h2>RESULT</h2>
      <p>양자암호통신 아이디어 공모전 대상</p>
      <p>소프트웨어 개발 보안 경진대회 최우수상</p>
      <p>블록체인 아이디어 공모전 최우수상</p>
      <p>한국 IT서비스 학회 추계학술대회 우수논문상</p>
      <p>스마트 시티 서비스 아이디어 공모전 우수상</p>
      <p>K-사이버 시큐리티 챌린지 자동차침입탐지부문 우수상</p>
      <p>교내 창업 경진대회 우수상</p>
      <p>KU 해커톤 우수상</p>
      <p>스틸리언, BOSCH KOREA, 금융감독원 등 프로그램 수료</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
    </StIntro>
  );
}

export default Intro;

const StIntro = styled.section`
  animation-delay: 3s;
  animation-duration: 3s;
  animation-name: slidein;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;

  margin-top: 3rem;
  margin-bottom: 3rem;
`;
