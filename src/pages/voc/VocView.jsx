import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./VocView.css";
import { API } from "../../config";
import { Link } from "react-router-dom";
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
import Modal from "./ReviceModal";
import { createTheme } from "@mui/material/styles";

function VocView({ match }) {
  const { contentId } = useParams();
  let UpdateDate = "";

  const theme = createTheme({
    palette: {
      background: "black",
    },
    typography: {
      fontFamily: "'Pretendard', sans-serif",
    },
  });

  const [allData, setAllData] = React.useState({});
  useEffect(() => {
    //게시글 내용 받아오기
    axios
      .get(`${API.Board}/` + contentId)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData.writeDate);
        console.log(data.writeDate);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const data = allData ?? [];
  data.writeDate = allData.writeDate?.slice(0, 10);
  data.updateDate = allData.updateDate?.slice(0, 10);
  // if (data.updateDate.length > 0) {
  //   UpdateDate = data.updateDate?.slice(0, 10);
  // }

  const onhandlePost = async (deleteData) => {
    const { userId, contentId } = deleteData;
    const postData = { userId, contentId };
    postData.userId = deleteData.userId;
    postData.contentId = deleteData.contentId;
    try {
      await axios.delete(`${API.Board}`, { data: postData }).then((res) => {
        console.log(res);
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function (e) {
          this.setAttribute("disabled", "true");
          this.setAttribute("disabledElevation", "true");
          this.setAttribute("disabledRipple", "true");
        });
        const status = res.data;
        if (status === 1) {
          alert("삭제되었습니다");
          window.location.replace("/board");
        } else if (status === 0) {
          alert("삭제할 권한이 존재하지 않습니다");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  //const userdata = data[contentId];

  const onClickRevise = () => {
    console.log("click revise");
  };
  const onClickDelete = () => {
    console.log("click delete");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("click deletebutton");
    const deleteData = {
      userId: localStorage.getItem("userId"),
      contentId: contentId,
    };
    console.log(deleteData);
    onhandlePost(deleteData);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const hstyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "2.3rem",
    color: "white",
    backgroundColor: "black",
    padding: "5rem 12rem 3rem 45rem",
    justifyContent: "center",
    lineHeight: 1.8,
  };
  return (
    <ThemeProvider theme={theme}>
      <div style={hstyle}>
        <Box sx={{ color: "white", width: "80%" }}>
          <Link to="/board">
            <Button
              sx={{
                alignContent: "space-between",
                backgroundColor: "#474544",
                color: "white",
                height: "3.5rem",
                mb: 7,
                width: "10rem",
                fontWeight: "600",
                fontSize: "2rem",
              }}
              variant="contained"
            >
              ←
            </Button>{" "}
          </Link>
          <br></br>
          작성자: {data.writerId}
          <br />
          작성일자: {data.writeDate}
          <br />
          수정일자 : {data.updateDate}
          <br />
          <Box
            sx={{
              width: "100%",
              height: "20rem",
              mb: 3,
              mt: 3,
            }}
          >
            {data.content}
          </Box>
          <br />
          {/* <button type="submit" id="submit" onClick={onClickRevise}>
              수정
            </button> */}
          <form onSubmit={handleSubmit}>
            <div className="revise_button">
              <button
                type="submit"
                id="submit"
                onClick={() => {
                  handleSubmit();
                }}
              >
                삭제
              </button>
            </div>
          </form>
          <div className="revise_button">
            <button
              type="submit"
              id="submit"
              variant="contained"
              onClick={openModal}
            >
              수정하기
            </button>
            <Modal
              open={modalOpen}
              close={closeModal}
              header="수정하기"
              userId={localStorage.getItem("userId")}
              contentId={contentId}
            ></Modal>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default VocView;
