import styled from "styled-components";
import { useState } from "react";
import Fade from "react-reveal";
function Curriculum() {
  const [option, setOption] = useState("main");

  return (
    <StCurri>
      <h2>5th EVI$ION</h2>
      <div>
        <StNav>
          <StBtn isActive={option === "main"} onClick={() => setOption("main")}>
            정규세션
          </StBtn>
          <StBtn
            isActive={option === "study"}
            onClick={() => setOption("study")}
          >
            스터디
          </StBtn>
          <StBtn
            isActive={option === "network"}
            onClick={() => setOption("network")}
          >
            네트워킹
          </StBtn>
        </StNav>
        <Fade>
          <StCard isActive={option === "main"}>
            <p>
              <span>선배들의 튜터링</span> 을 통해 보안의 기초 및 실전 스킬들을
              익힙니다.
            </p>
            <br />
            <p>
              <span>5기 커리큘럼</span>
            </p>
            <br />
            <p>0주차 - OT</p>
            <p>1주차 - web : 웹 기초, 통신, 해킹 툴 소개</p>
            <p>2주차 - web : client side 공격기법</p>
            <p>3주차 - web : server side 공격기법</p>
            <p>4주차 - crypto : 기초개념, crypto ctf</p>
            <p>5주차 - forensic : 기초개념, forensic ctf</p>
            <p>6주차 - forensic : 사진 파일, Zip 파일 분석</p>
            <p>7주차 - pwnable : 기초개념, shell, BOF</p>
            <p>8주차 - pwnable : bypass, format string</p>
            <p>9주차 - 종강 행사 (EVI$ION 해커톤 / 강연)</p>
          </StCard>
        </Fade>
        <Fade>
          <StCard isActive={option === "study"}>
            <p>
              <span>심화 스터디</span> 및 <span>자율 스터디</span>를 통해
            </p>
            <p>자신의 관심분야에 대해 더욱 심화적으로 공부합니다.</p>
            <br />
            <p>
              <span>심화스터디 - 8주차 진행</span>
            </p>
            <p>
              부원 별로 1가지를 선택하여 한가지 분야를 심층적으로 공부합니다.
            </p>
            <p>같은 분야를 선택한 사람끼리 팀을 이뤄 8주간 공부합니다.</p>
            <p>
              각 팀별 로드맵, 자료는 동아리에서 쌓은 데이터를 기반으로
              제공됩니다.
            </p>
            <br />
            <p>
              <span>자율스터디 - 주제,주차 제한 없음</span>
            </p>
            <p>부원별로 참여하고 싶은 스터디를 자유롭게 선택하여 공부합니다.</p>
            <p>같은 분야를 선택한 사람끼리 팀을 이뤄 활동합니다.</p>
            <p>모든 부원이 원하는 스터디를 열 수 있습니다.</p>
            <p>
              학술 스터디의 경우 동아리에서 로드맵, 자료들을 제공해드립니다.
            </p>
          </StCard>
        </Fade>
        <Fade>
          <StCard isActive={option === "network"}>
            <p>EVI$ION에서 제공하는 </p>
            <p>여러 네트워킹 행사에 참여할 수 있습니다.</p>
            <br />
            <p>현직에 계신 과선배님들과의 소통 및 강연 참가</p>
            <p>타 학교 보안동아리와의 연합 활동</p>
            <p>팀단위 외부 해커톤 참가</p>
            <p>EVI$ION 자체 해커톤</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
          </StCard>
        </Fade>
      </div>
    </StCurri>
  );
}

export default Curriculum;

const StCurri = styled.div`
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;

  margin-top: 3rem;
  margin-bottom: 3rem;

  & > div {
    border: 0.2rem solid white;
    padding: 1rem;
  }
`;

const StBtn = styled.button`
  height: 3rem;
  border-bottom: ${({ isActive }) => isActive && "0.31rem solid"};

  font-size: 20px;
  line-height: 25px;
  color: ${({ isActive }) => (isActive ? "#bdbdbd" : "#787878")};
`;

const StNav = styled.aside`
  display: flex;
  margin-bottom: 2rem;
`;

const StCard = styled.section`
  display: flex;
  width: 35rem;

  flex-direction: column;
  display: ${({ isActive }) => (isActive ? "block" : "none")};

  span {
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;
    color: #cccccc;
  }
`;
