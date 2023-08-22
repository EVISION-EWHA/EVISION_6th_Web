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
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

function NewMembers() {
  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });
  const [allData, setAllData] = React.useState({});
  const [applyData, setApplyData] = React.useState({});

  useEffect(() => {
    axios
      .get(`${API.AdminApplications}`)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData);
        let studentNumber = allData;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const data = allData ?? [];

  const hstyle = {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 63rem 5rem 63rem",
    fontSize: "30px",
    color: "white",
    height: "150rem",
    backgroundColor: "black",
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box sx={{ height: "30rem", color: "white" }}>
          {data.length > 0 &&
            data.map((info) => (
              <Box
                sx={{
                  height: "7rem",
                  color: "white",
                }}
                key={info}
              >
                {info}
                <Link to={`/h8Jd62Ks/applications/${info}`}>
                  <Button
                    type="submit"
                    id="submit"
                    sx={{
                      backgroundColor: "#474544",
                      color: "white",
                      ml: 4,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      width: "22rem",
                      fontWeight: "600",
                      fontSize: "1.5rem",
                    }}
                    variant="contained"
                  >
                    지원서 보기
                  </Button>
                </Link>
              </Box>
            ))}
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default NewMembers;
