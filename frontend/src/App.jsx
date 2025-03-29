import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import SummaryPage from "./pages/SummaryPage";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
