import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import Login from "pages/login/Login";
import Signup from "pages/sign/Signup";
import MainPage from "pages/Main/MainPage";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
// import Post from "pages/board/post";
import Header from "components/common/header";
import Footer from "components/footer";
import ApplyInfo from "pages/Apply/ApplyInfo";
import ApplyForm from "pages/Apply/ApplyForm";
import Admin from "pages/Admin/Admin";
import MyPage from "pages/Modify/MyPage";
import Modify from "pages/Modify/Modify";
import NewMembers from "pages/Admin/NewMembers";
import Application from "pages/Admin/Application";
// import RegisterPage from "components/views/RegisterPage/Sections/RegisterOrEdit";
// import ArticlePage from "components/views/ArticlePage/ArticlePage";
// import BoardPage from "components/views/BoardPage/BoardPage";
import Voc from "pages/voc/Voc";
import VocView from "pages/voc/VocView";
import VocQuestion from "./pages/voc/VocQuestion";
import CheckPw from "./pages/Apply/CheckPw";
import CheckApplication from "pages/Apply/CheckApplication";

const App = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  return (
    <>
      <Header isLogin={isLogin} style={header} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/curriculum" element={<CurriculumPage></CurriculumPage>} />
        {/* <Route path="/article/:articleId" element={<ArticlePage></ArticlePage>} />
        <Route path="/edit/:articleId" element={<RegisterPage></RegisterPage>} />
        <Route path="/post" element={<RegisterPage></RegisterPage>} />
        <Route path="/board" element={<Voc></Voc>}/> */}
        <Route path="/board" element={<Voc></Voc>} />
        <Route path="/board/:contentId" element={<VocView></VocView>} />
        <Route path="/board/question" element={<VocQuestion />} />
        <Route path="/h8Jd62Ks" element={<Admin></Admin>} />
        <Route
          path="/h8Jd62Ks/newmembers"
          element={<NewMembers></NewMembers>}
        />
        <Route
          path="/h8Jd62Ks/applications/:studentId"
          element={<Application></Application>}
        />
        <Route path="/recruit" element={<ApplyInfo></ApplyInfo>} />
        <Route path="/applyform" element={<ApplyForm></ApplyForm>} />
        <Route path="/mypage" element={<MyPage></MyPage>} />
        <Route path="/modify" element={<Modify></Modify>} />
        <Route path="/checkpw" element={<CheckPw></CheckPw>} />
        <Route
          path="/checkapplication"
          element={<CheckApplication></CheckApplication>}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

const header = styled.div`
  position: fixed;
`;
