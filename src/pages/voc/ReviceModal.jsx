import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Input from "@mui/material/Input";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import "./ReviceModal.css";

const Modal = (props) => {
  const { open, close, header, userId, contentId } = props;
  const [inputContent, setInputContent] = useState("");
  const onClickStatus = () => {
    console.log("click modal");
  };
  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onhandleRevice = async (data) => {
    const { userId, contentId, content } = data;
    const postData = { userId, contentId, content };
    postData.userId = data.userId;
    postData.contentId = data.contentId;
    postData.content = data.content;
    console.log(postData);
    try {
      await axios.put(`${API.Board}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const status = res.data;
        console.log(status);
        if (!status) {
          alert("게시글을 수정할 권한이 없습니다");
        } else {
          alert("수정이 완료되었습니다");
        }
        close();
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("revice");
    const Data = {
      userId: userId,
      contentId: contentId,
      content: inputContent,
    };
    console.log("Data", Data);
    onhandleRevice(Data);
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
            <Input
              type="text"
              id="newContent"
              name="newContent"
              onChange={handleInputContent}
              value={inputContent}
              sx={{
                background: "transparent",
                color: "white",
                ml: 3,
                height: "10rem",
                width: "70rem",
                fontSize: "3rem",
              }}
              placeholder="수정할 내용을 입력해주세요."
              label="text"
            ></Input>
            <Button
              type="submit"
              id="submit"
              name="submit"
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
