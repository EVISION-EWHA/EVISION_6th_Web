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
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function UserTable({ data }) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{
            backgroundColor: "background.default",
            mb: 50,
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
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                Id
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                이메일
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                가입일
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "white",
                  textAlign: "center",
                  width: "20rem",
                  fontSize: "2.5rem",
                  fontWeight: "340",
                }}
              >
                회원 등급
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map((info) => (
                <TableRow key={info.userId}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
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
                    <div>{info.userId}</div>
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
                    {info.email}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: "white",
                      paddingLeft: 8,
                      paddingRight: 7,
                      maxWidth: "10rem",
                      fontSize: "2rem",
                      textAlign: "center",
                      fontWeight: "400",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {info.signupDate?.slice(0, 10)}
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
                    {info.authStatus}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default UserTable;
