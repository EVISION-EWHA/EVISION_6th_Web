import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "@mui/material/Input";
import { TextField } from "@material-ui/core";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { API } from "../../config";
import "./VocView.css";

function VocQuestion() {
  const [inputContent, setInputContent] = useState("");

  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const onClickPosting = () => {
    console.log("click post");
  };

  const [allData, setAllData] = React.useState({});

  const onhandlePost = async (data) => {
    const { content, writerId } = data;
    const postData = { content, writerId };
    postData.content = data.content;
    postData.writerId = data.writerId;
    try {
      await axios.post(`${API.Board}`, postData).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const status = res.data;
        console.log(status);
        alert("글이 정상적으로 작성되었습니다");
        window.location.replace("/board");
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      window.location.replace("http://localhost:3000");
      alert("게시글을 작성할 권한이 없습니다. 로그인을 해주세요");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click post");
    const loginData = {
      content: inputContent,
      writerId: localStorage.getItem("userId"),
    };
    if (loginData.content.length > 0 && loginData.writerId.length != null) {
      console.log(loginData);
      onhandlePost(loginData);
    } else {
      alert("내용이 작성되지 않았습니다");
    }
  };
  const hstyle = {
    //border: "10px solid white",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: "140rem",
    padding: "5rem 20rem 20rem 20rem",
    height: "80rem",
    flexDirection: "column",
    //fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };

  return (
    <ThemeProvider theme={theme}>
      <form style={hstyle} onSubmit={handleSubmit}>
        <Box sx={{ fontSize: "3.4rem", pb: "3rem" }}>게시글 작성</Box>
        <br />
        <Box sx={{ border: "3rem", borderColor: "white" }}>
          <textarea
            name="content"
            id="content"
            style={{
              padding: "1rem",
              marginTop: "5rem",
              fontSize: "3rem",
              width: "120rem",
              height: "20rem",
              bordeer: "none",
              resize: "none",
              color: "white",
              backgroundColor: "black",
            }}
            value={inputContent}
            onChange={handleInputContent}
            placeholder="내용을 입력해주세요."
          ></textarea>{" "}
        </Box>
        <Button
          sx={{
            mt: 10,
            display: "center",
            alignItems: "right",
            backgroundColor: "#474544",
            color: "white",
            mb: 2,
            flexDirection: "row",
            width: "15rem",
            fontWeight: "600",
            fontSize: "2rem",
            justifyContent: "center",
          }}
          type="submit"
          id="submit"
          onClick={onClickPosting}
        >
          등록
        </Button>
      </form>
    </ThemeProvider>
  );
}
export default VocQuestion;
