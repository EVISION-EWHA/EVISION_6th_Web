//실제 지원 폼
import React, { useState, useRef } from "react";
import axios from "axios";
import "./apply.css";
import { API } from "../../config";

function ApplyForm() {
  const [state, setState] = useState({
    studentId: "",
    studentPw: "",
    name: "",
    phone: "",
    department: "",
    privacy: false,
    management: false,
    contentA: "",
    contentB: "",
  });

  const nameInput = useRef();
  const phoneInput = useRef();
  const studentIdInput = useRef();
  const studentPwInput = useRef();
  const departmentInput = useRef();
  const contentAInput = useRef();
  const contentBInput = useRef();
  const phoneSt = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/; //전화번호 기준
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/; // 비밀번호 유효성

  const handleChange = (e) => {
    // 작성내용 객체에 저장
    // console.log(e.target.name);
    // console.log(e.target.value);

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    //글자수 제한
    var content = e.target.value;
    if (content.length === 500) alert("최대 600자까지 입력가능합니다.");

    if (content.length === 600) alert("최대 600자까지 입력가능합니다.");
    return;
  };

  //데이터전송..
  const onhandlePost = async (data) => {
    const {
      studentId,
      studentPw,
      name,
      phone,
      department,
      privacy,
      management,
      contentA,
      contentB,
    } = data;
    const postData = {
      studentId,
      studentPw,
      name,
      phone,
      department,
      privacy,
      management,
      contentA,
      contentB,
    };
    postData.studentId = data.studentId;
    postData.studentPw = data.studentPw;
    postData.name = data.name;
    postData.phone = data.phone;
    postData.department = data.department;
    postData.privacy = data.privacy;
    postData.management = data.management;
    postData.contentA = data.contentA;
    postData.contentB = data.contentB;

    try {
      await axios.post(`${API.Application}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
          console.log("클릭성공");
        });

        const status = res.data;
        console.log(status);
        if (status === 0) {
          console.log("지원완료");
          alert("지원이 완료되었습니다!");
          window.location.href = "./";
        } else if (status === -1) {
          console.log("지원 실패(학번 중복)");
          alert("이미 제출된 지원서입니다.");
        }
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  // 버튼 {제출하기}
  const handleSubmit = (event) => {
    if (state.name === "") {
      nameInput.current.focus();
      alert("이름을 입력해주세요!");
      return false;
    }
    if (!phoneSt.test(state.phone)) {
      phoneInput.current.focus();
      alert("전화번호는 010-xxxx-xxxx 형태로 입력해주세요!");
      return false;
    }

    if (state.studentId.length !== 7) {
      studentIdInput.current.focus();
      alert("학번 7자리를 맞춰서 작성해주세요! ");
      return false;
    }

    if (!passwordRegex.test(state.studentPw)) {
      studentPwInput.current.focus();
      alert(
        "영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요! "
      );
      return false;
    }

    if (state.department === "") {
      departmentInput.current.focus();
      alert("학과를 입력해주세요!");
      return false;
    }

    if (state.contentA === "") {
      contentAInput.current.focus();
      alert("1번 문항을 작성해주세요!");
      return false;
    }

    if (state.contentB === "") {
      contentBInput.current.focus();
      alert("2번 문항을 작성해주세요!");
      return false;
    }

    var isChecked = document.getElementById("checkAgree").checked;
    if (!isChecked) {
      alert("개인정보 수집에 동의해주세요!!");
      return false;
    }
    //개인정보수집 동의 o
    if (isChecked) {
      state.privacy = true;
    }

    if (state.management === 1) {
      state.management = !!parseInt("1");
    } else {
      state.management = !!parseInt("0");
    }

    // event.preventDefault();
    console.log("click submit");

    console.log("applyData", state);
    onhandlePost(state);
  };

  return (
    <div className="ApplyForm">
      <h2
        style={{
          textAlign: "center",
          //marginBottom: "8rem",
          fontSize: "4rem",
          color: "#c7b0c2",
          fontWeight: 800,
        }}
      >
        ✎ EVI$ION 지원서 작성 ✎
      </h2>
      <br></br>
      <form className="mainform">
        <label />
        성함을 입력해주세요
        <input
          ref={nameInput}
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="예) 홍길동"
        ></input>
        <br />
        <label />
        전화번호를 입력해주세요
        <input
          ref={phoneInput}
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="예) 010-xxxx-xxxx"
        ></input>
        <br />
        <label />
        학번을 입력해주세요
        <input
          ref={studentIdInput}
          name="studentId"
          value={state.studentId}
          onChange={handleChange}
          placeholder="예) 2XXXXXX(7자리)"
        ></input>
        <br />
        <label />
        비밀번호를 입력해주세요
        <input
          ref={studentPwInput}
          name="studentPw"
          value={state.studentPw}
          onChange={handleChange}
          placeholder="영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 설정해주세요."
        ></input>
        <br />
        <label />
        전공을 입력해주세요
        <input
          ref={departmentInput}
          name="department"
          value={state.department}
          onChange={handleChange}
          placeholder="예) 사이버보안"
        ></input>
        <br />
        <label />
        운영진 희망여부를 선택해주세요. 운영진을 희망하시는 경우 신입생 선발
        시에 가산점이 부여될 예정입니다.
        <label>
          <input
            type="radio"
            name="management"
            value="1"
            checked={state.management === "1"}
            onChange={handleChange}
          />
          예
        </label>
        <label>
          <input
            type="radio"
            name="management"
            value="0"
            checked={state.management === "0"}
            onChange={handleChange}
          />
          아니요
        </label>
        <br />
        <br />
        <label>
          1. 자신이 몰입해서 공부해본 분야가 있나요? 있다면 어떤 분야였고,
          결과는 어땠으며, 그 과정을 통해 무엇을 얻었는 지 이야기해주세요.
          <br /> 꼭 보안이 아니어도 좋습니다. (최대 600자)
        </label>
        <textarea
          ref={contentAInput}
          name="contentA"
          value={state.contentA}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          maxLength={600}
        ></textarea>{" "}
        <br />
        <label>
          2. EVI$ION에서 특히 공부해보고 싶은 활동이나 분야가 있나요? (최대
          600자){" "}
        </label>
        <textarea
          ref={contentBInput}
          name="contentB"
          value={state.contentB}
          onChange={handleChange}
          placeholder="내용을 입력해주세요."
          maxLength={600}
        ></textarea>
        <br />
        <br />
        <label>
          개인정보 이용에 동의하시나요? 응답내용은 동아리 신입부원 선발을
          위해서만 사용될 예정이며, 지원 종료 후 모든 정보는 폐기될 예정입니다.
          <br />
        </label>
        <p>
          1. 수집목적 : EVI$ION 신입부원 선발
          <br />
          2. 수집항목 : 이름, 휴대폰 전화번호, 학번, 전공
          <br />
          3. 보유 및 이용 기간 : 신입생 선발 후 OT까지 3/9
        </p>
        <label name="checkout">
          <input type="checkbox" name="isAgee" id="checkAgree" value="" />{" "}
          개인정보 수집에 동의하시겠습니까? <br />
        </label>
      </form>

      <button
        type="submit"
        name="submit"
        id="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        제출하기
      </button>
    </div>
  );
}

export default ApplyForm;
