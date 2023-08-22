import React from "react";
import "./apply.css";
import time_line from "assets/timeline.png";

function ApplyInfo() {
  const handleApply = (event) => {
    window.location.href = "./applyform";
  };

  const handleCheck = (event) => {
    window.location.href = "./checkpw";
  };

  return (
    <div className="ApplyInfo">
      <h2 style={{ textAlign: "center", fontSize: "7rem" }}>
        EVI$ION
        <br />
        <br />
      </h2>
      <h3
        style={{
          textAlign: "center",
          fontSize: "4rem",
          color: "#c7b0c2",
          fontWeight: 800,
        }}
      >
        ✎ 2023-1 신입부원 모집 ✎
      </h3>
      <br />

      <article>
        <label>
          이화여자대학교 엘텍공과대학 사이버보안전공 과동아리 EVI$ION이 새로운
          기수를 선발합니다!
          <br />
          아래의 사항을 꼭 확인하시고 지원부탁드립니다.
        </label>
        <br />
        <br />
        <label>
          ✔ 지원 조건 : 엘텍공과대학 소프트웨어학부 사이버보안전공
          (주전공/복수전공 및 진입예정자)
        </label>
        <label>
          ✔ 전체세션 장소 : 이화여자대학교 교내 강의실 (세부건물 및 호수는 미정)
        </label>
        <label>
          ✔ 전체세션 시간 : 매주 목요일 오후 6시 반 ~ 오후 8시 반 (시험기간
          제외)
        </label>
        <img src={time_line} alt="" />
        <br />
        <div className="apply_btn">
          <button
            type="button"
            onClick={() => {
              handleApply();
            }}
          >
            지원하기
          </button>

          <button
            type="button"
            onClick={() => {
              handleCheck();
            }}
          >
            지원서 확인하기
          </button>
        </div>
      </article>
    </div>
  );
}

export default ApplyInfo;
