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
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./ChangeStatusModal";
import Modal2 from "./Status0Modal";
import { Link } from "react-router-dom";
import UserTable from "components/userTable";
import { API } from "config";

function Admin({ names, grade }) {
  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });
  const navigate = useNavigate();
  const [allData, setAllData] = React.useState({});
  const [newData, setNewData] = React.useState({});

  useEffect(() => {
    axios
      .get(`${API.AdminUsers}`)
      .then(function (response) {
        console.log(names);
        console.log(grade);
        setAllData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${API.AdminRequests}`)
      .then(function (response) {
        setNewData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const data = allData ?? [];
  const newdata = newData ?? [];

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const [modal2Open, setModal2Open] = useState(false);

  const open2Modal = () => {
    setModal2Open(true);
  };
  const close2Modal = () => {
    setModal2Open(false);
  };

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      window.location.replace("http://localhost:3000");
    }
  }, []);

  const hstyle = {
    //border: "10px solid white",
    //minHeight: "100rem",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "5rem 40rem 5rem 45rem",
    flexDirection: "column",
    fontSize: "30px",
    backgroundColor: "black",
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box
          sx={{
            alignItems: "flex-start",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#474544",
              color: "white",
              mb: 2,
              mr: 3,
              flexDirection: "row",
              alignItems: "flex-start",
              width: "10rem",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
            variant="contained"
            //color="success"
            onClick={openModal}
          >
            등급 변경
          </Button>
          <Modal
            open={modalOpen}
            close={closeModal}
            header="등급 변경"
            data={data}
          ></Modal>
          <Button
            sx={{
              backgroundColor: "#474544",
              color: "white",
              mb: 2,
              mr: 3,
              flexDirection: "row",
              alignItems: "flex-start",
              width: "22rem",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
            variant="contained"
            onClick={open2Modal}
          >
            승인 대기중 회원 목록
          </Button>
          <Modal2
            open={modal2Open}
            close={close2Modal}
            header="승인 대기중 회원 목록"
            data={newdata}
          ></Modal2>
          <Link to="/h8Jd62Ks/newmembers">
            <Button
              sx={{
                backgroundColor: "#474544",
                color: "white",
                mb: 2,
                flexDirection: "row",
                alignItems: "flex-start",
                width: "15rem",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
              variant="contained"
              onclick="location.href='showingappliment'"
            >
              지원서 열람
            </Button>{" "}
          </Link>
        </Box>
        <UserTable data={data}></UserTable>
        <Box
          sx={{
            fontSize: "2rem",
            color: "white",
            p: 3,
            height: "15rem",
          }}
        >
          승인 대기 중 : 0<br />
          승인 완료(부원) : 1 <br />
          승인 거절 : 2 <br />
          추방 : 3 <br />
          관리자 계정 : 5
        </Box>
      </div>
    </ThemeProvider>
  );
}
export default Admin;
