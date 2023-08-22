import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import "./ChangeStatusModal.css";


const Modal = (props) => {
  const { open, close, header, data } = props;
  const [selectedId, setSelectedId] = React.useState("");
  const [selctedGrade, setSelectedGrade] = React.useState("");

  const onClickStatus = () => {
    console.log("click modal");
  };

  const onhandlePost = async (data) => {
    const { userId, authStatus } = data;
    const postData = { userId, authStatus };
    postData.userId = data.userId;
    postData.authStatus = data.authStatus;
    try {
      await axios.put(`${API.AdminRequests}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const test = res.data;
        console.log(test);
        alert("회원 등급 변경이 처리되었습니다");
        close();
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("change submit");
    const statusData = {
      userId: selectedId,
      authStatus: selctedGrade,
    };
    console.log("StatusData", statusData);
    onhandlePost(statusData);
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };
  const handleGradeChange = (event) => {
    setSelectedGrade(event.target.value);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <form onSubmit={handleSubmit}>
            <main>
              <FormControl
                size="large"
                variant="standard"
                sx={{ ml: 3, minWidth: 200, fontSize: "4rem", color: "white" }}
              >
                <InputLabel
                  sx={{ fontSize: "2.5rem", color: "white" }}
                  id="demo-simple-select-standard-label"
                >
                  Id
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectedId}
                  onChange={handleIdChange}
                  label="selectedId"
                  sx={{
                    p: 1,
                    fontSize: "2.5rem",
                    color: "white",
                  }}
                >
                  {data.length > 0 &&
                    data.map((info) => (
                      <MenuItem
                        sx={{
                          fontSize: "2.5rem",
                          color: "white",
                          backgroundColor: "black",
                        }}
                        key={info.userId}
                        value={info.userId}
                      >
                        {info.userId}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl
                size="large"
                variant="standard"
                sx={{
                  ml: 7,
                  minWidth: 200,
                  fontSize: "4rem",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                <InputLabel
                  sx={{ fontSize: "2.5rem", color: "white" }}
                  id="demo-simple-select-standard-label"
                >
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selctedGrade}
                  onChange={handleGradeChange}
                  label="selctedGrade"
                  sx={{
                    p: 1,
                    fontSize: "2.5rem",
                    color: "white",
                  }}
                >
                  <MenuItem
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                    value={0}
                  >
                    0(승인 대기 중)
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                    value={1}
                  >
                    1(승인 완료)
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                    value={2}
                  >
                    2(승인 거절)
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                    value={3}
                  >
                    3(추방)
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      backgroundColor: "black",
                    }}
                    value={5}
                  >
                    5(관리자)
                  </MenuItem>
                </Select>
              </FormControl>
            </main>
            <Button
              type="submit"
              id="submit"
              onClick={onClickStatus}
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                m: "auto",
                mt: 6,
                width: "15rem",
                fontSize: "2rem",
              }}
            >
              변경하기
            </Button>
          </form>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
