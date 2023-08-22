import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, ThemeProvider } from "@mui/material";
import { API } from "../../config";
import { createTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function CheckApplication() {
  const location = useLocation();
  const data = {
    studentId: location.state.studentId,
    name: location.state.name,
    phone: location.state.phone,
    department: location.state.department,
    management: location.state.management,
    privacy: location.state.privacy,
    contentA: location.state.contentA,
    contentB: location.state.contentB,
    createdDate: location.state.createdDate,
  };
  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });

  let Management = "";
  if (data.management === true) {
    Management = "운영진 지원함";
  } else {
    Management = "운영진 지원하지 않음";
  }

  const hstyle = {
    //border: "10px solid white",
    display: "flex",
    justifyContent: "center",
    padding: "5rem 40rem 20rem 40rem",
    fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box
          sx={{
            color: "white",
            width: "100%",
            fontSize: "3.2rem",
            fontWeight: 800,
          }}
        >
          ── 이름
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.name}
          </Box>
          <br />
          ── 학번 <br />
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.studentId}
          </Box>
          <br />
          ── 학과 <br />
          <Box
            sx={{
              pl: 0.5,
              ontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.department}
          </Box>
          <br />
          ── 핸드폰 번호{" "}
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.phone}
          </Box>
          <br />
          ── 1번 답변{" "}
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.contentA}
          </Box>
          <br />
          ── 2번 답변{" "}
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.contentB}
          </Box>
          <br />
          ── 운영진 지원 여부
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {Management}
          </Box>
          <br />
          ── 지원 날짜{" "}
          <Box
            sx={{
              pl: 0.5,
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "#d3d3d3",
            }}
          >
            {data.createdDate.slice(0, 10)}
          </Box>
          <br />
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default CheckApplication;
