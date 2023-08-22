import { Routes, Route } from "react-router-dom";
import MainPage from "pages/Main/MainPage";
import Header from "components/common/header";
// import { useState, useCallback } from "react";
import CurriculumPage from "pages/Curriculum/CurriculumPage";
import Footer from "components/footer";
import Login from "pages/login/Login";

const LandingRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default LandingRoutes;
