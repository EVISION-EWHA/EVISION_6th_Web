import React, { useEffect, useState } from "react";
import axios from "axios";
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
import "./Voc.css";
import { API } from "../../config";

function Voc() {
  //const item = GetData();
  const [allData, setAllData] = React.useState({});
  useEffect(() => {
    axios
      .get(`${API.Board}`)
      .then(function (response) {
        setAllData(response.data);
        console.log(allData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const data = allData ?? [];
  const hstyle = {
    backgroundColor: "black",
    fontColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "5rem 40rem 40rem 45rem",
    flexDirection: "column",
    fontSize: "30px",
  };

  return (
    <div style={hstyle}>
      <TableContainer
        sx={{
          backgroundColor: "black",
          display: "center",
          justifyContent: "center",
          alignItems: "left",
          display: "flex",
          flexDirection: "column",
          marginTop: "10rem",
        }}
      >
        <Link to="/board/question">
          <Button
            sx={{
              display: "center",
              alignItems: "right",
              backgroundColor: "#474544",
              color: "white",
              mb: 2,
              flexDirection: "row",
              width: "15rem",
              fontWeight: "600",
              fontSize: "1.5rem",
              justifyContent: "center",
            }}
            variant="contained"
          >
            게시글 작성
          </Button>{" "}
        </Link>
        <form onSubmit></form>
        <Table
          sx={{
            width: "100%",
            backgroundColor: "black",
          }}
          aria-label="simple table"
        >
          <TableHead
            sx={{
              borderTop: "1px solid white",
              borderBottom: "1px solid white",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "8rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                글번호
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "10rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                작성자
              </TableCell>

              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "25rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                내용
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "10rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                작성일자
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "10rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                수정일자
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((info) => (
                <TableRow key={info.contentId}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontColor: "white",
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      "&:hover,&.Mui-focusVisible": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <div>{info.contentId}</div>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.writerId}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      maxWidth: "10rem",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Link
                      style={{
                        display: "block",
                        color: "white",
                      }}
                      to={`/board/${info.contentId}`}
                    >
                      {info.content}
                    </Link>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      paddingLeft: 8,
                      paddingRight: 7,
                      maxWidth: "16rem",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.writeDate.slice(0, 10)}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      paddingLeft: 8,
                      paddingRight: 7,
                      maxWidth: "14rem",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "revert",
                    }}
                  >
                    {info.updateDate.slice(0, 10)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Voc;
