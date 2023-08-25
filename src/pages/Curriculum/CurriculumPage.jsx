import { useEffect } from "react";
import styled from "styled-components";
import curriculum from "assets/20232curri.png";

const CurriculumPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <StTitle>2023-2 커리큘럼</StTitle>
      <StContent>
        이번 세션은 전체세션과 심화세션 총 두가지입니다. <br />
        전체 세션(목요일 18:30 ~ 20:30)의 스케줄은 아래와 같습니다
      </StContent>
      <img src={curriculum} class="flag" alt="" />
      <StContent>
        심화세션은 보다 심화된 공부를 위한 시간입니다. <br />
        - 토요일 9~21 중에서 5시간 이상 참여해야합니다
        <br />- 매주가 아닌 월 2회 이상 필참입니다
      </StContent>
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
    width: 40%;
    margin: 20px;
  }

  @media (max-width: 1023px) {
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
  margin: 20px;
  @media (max-width: 1023px) {
    font-size: 18px;
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
