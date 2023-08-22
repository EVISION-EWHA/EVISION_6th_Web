import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./mypage.css";
import axios from "axios";
import { API } from "../../config";

const MyPage = () => {
  const navigate = useNavigate();
  const [allData, setAllData] = React.useState({});

  //오류가능성 -> id가 중복된 경우가 있으면 나중 회원의 email만 나옴..
  const [state] = useState({
    userId: localStorage.getItem("userId"),
    userPw: localStorage.getItem("userPw"),
    userRePw: "",
    email: "",
  });

  for (let i = 0; i < allData.length; i++) {
    if (allData[i].userId === localStorage.getItem("userId")) {
      state.email = allData[i].email;
    }
  }
  //버튼클릭시
  function handleModify() {
    console.log(state);

    navigate("/modify", {
      state: {
        userId: state.userId,
        userPw: state.userPw,
        userRePw: "",
        email: state.email,
      },
    });
  }

  useEffect(() => {
    axios
      .get(`${API.AdminUsers}`)
      .then(function (response) {
        setAllData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      window.location.replace("http://localhost:3000");
    }
  }, []);

  return (
    <div className="MyPage">
      <br />
      <h2
        style={{
          textAlign: "center",
          fontSize: "5.5rem",
          marginBottom: "10rem",
        }}
      >
        MyPage
      </h2>
      <form>
        <label>아이디 : {localStorage.getItem("userId")} </label>
        <br />

        {/* <label>비밀번호 : {localStorage.getItem("userPw")}</label>
        <br /> */}

        <label>이메일 : {state.email}</label>
        <br />

        <button
          onClick={() => {
            handleModify();
          }}
        >
          수정하기
        </button>
      </form>
    </div>
  );
};

export default MyPage;
