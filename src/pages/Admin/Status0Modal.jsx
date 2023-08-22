import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import { API } from "../../config";
import "./Status0Modal.css";

const Modal2 = (props) => {
  const { open, close, header, data } = props;
  let newData;

  useEffect(() => {
    {
      data.length > 0 &&
        data.map((info) => (
          <div key={info.userId}>
            {info.authStatus} == 0 ? newData = data : null
          </div>
        ));
    }
  }, []);

  //data.filter(content => content.authStatus.includes("0"))

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
          <main>
            <Box sx={{ color: "white" }}>
              {data.length > 0 &&
                data.map((info) => (
                  <Box sx={{ color: "white" }} key={info.userId}>
                    {info.userId}
                  </Box>
                ))}
            </Box>
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal2;
