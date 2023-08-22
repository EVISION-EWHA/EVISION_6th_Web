import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Input from "@mui/material/Input";
import { API } from "../../config";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Application({ match }) {
  const { studentId } = useParams();

  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });
  const [allData, setAllData] = React.useState({});
  let Management = "";

  useEffect(() => {
    axios
      .get(`${API.AdminApplications}/` + studentId)
      .then(function (response) {
        setAllData(response.data);
        const test = response.data.management;
        // console.log(test);
        // console.log(test == true);
        // if (test == true) {
        //   amanagement = "운영진 지원함";
        //   console.log({ amanagement });
        // } else {
        //   amanagement = "운영진 지원하지 않음";
        // }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const data = allData ?? [];
  if (data.management == true) {
    Management = "운영진 지원함";
  } else {
    Management = "운영진 지원하지 않음";
  }
  const userdata = data[studentId];

  const hstyle = {
    //border: "10px solid white",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 40rem 5rem 40rem",
    //height: "100rem",
    flexDirection: "column",
    fontSize: "30px",
    color: "white",
    backgroundColor: "black",
    lineHeight: 1.8,
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box sx={{ color: "white", width: "100%", fontSize: "2rem" }}>
          이름: {data.name}
          <br />
          <br />
          학번: {data.studentId}
          <br />
          <br />
          학과 : {data.department}
          <br />
          <br />
          핸드폰 번호 : {data.phone}
          <br />
          <br />
          1번 답변 : {data.contentA}
          <br />
          <br />
          2번 답변 : {data.contentB}
          <br />
          <br />
          운영진 지원 여부 : {Management}
          <br />
          <br />
          생성한 날짜: {data.createdDate}
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default Application;
