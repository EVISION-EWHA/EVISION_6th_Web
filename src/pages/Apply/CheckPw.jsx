import React, { useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import "./apply.css";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";

function CheckPw() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate();

  const onHandleCheck = async (data) => {
    //확인하기 버튼 - 데이터받기
    const { id, pw } = data;
    console.log(data);
    const getData = { id, pw };
    getData.id = data.id;
    getData.pw = data.pw;

    console.log("받은id", getData.id);
    console.log("받은pw", getData.pw);

    try {
      await axios
        .get(
          `${API.Application}`,
          {
            params: {
              studentId: getData.id,
              studentPw: getData.pw,
            },
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log("res", res);
          let submitBtn = document.getElementById("submit");
          submitBtn.addEventListener("click", function (e) {
            this.setAttribute("disabled", "true");
            this.setAttribute("disabledElevation", "true");
            this.setAttribute("disabledRipple", "true");
          });
          const status = res.data;
          console.log("status", status);
          // alert("확인되었습니다");

          console.log("status", status);
          if (status === "") {
            alert("비밀번호가 일치하지 않거나 지원서가 존재하지 않습니다.");
            return false;
          } else {
            navigate("/checkapplication", {
              state: {
                studentId: status.studentId,
                name: status.name,
                phone: status.phone,
                department: status.department,
                management: status.management,
                privacy: status.privacy,
                contentA: status.contentA,
                contentB: status.contentB,
                createdDate: status.createdDate,
              },
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  }; //버튼 끝

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click checkbutton");
    if (inputId === "") {
      alert("학번을 입력해주세요");
      return false;
    }
    if (inputPw === "") {
      alert("비밀번호를 입력해주세요");
      return false;
    } else {
      const Data = {
        id: inputId,
        pw: inputPw,
      };
      console.log({ Data });
      onHandleCheck(Data);
    }
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <form className="CheckPw" onSubmit={handleSubmit}>
      <h2
        style={{
          textAlign: "center",
          fontSize: "4rem",
          marginBottom: "10rem",
        }}
      >
        지원서 조회
      </h2>
      <label>학번</label>
      <input
        type="text"
        id="userId"
        name="id"
        input={inputId}
        onChange={handleInputId}
        placeholder="학번을 입력해주세요."
      ></input>
      <br />
      <label>비밀번호</label>
      <input
        label="Password"
        type="password"
        value={inputPw}
        onChange={handleInputPw}
        placeholder="지원 시 작성한 비밀번호를 입력해주세요."
      ></input>
      <br />
      <button type="submit" id="submit" onClick={handleSubmit}>
        확인하기
      </button>
    </form>
  );
}

export default CheckPw;
