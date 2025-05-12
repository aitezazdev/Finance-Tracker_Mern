import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashBoard from "./pages/DashBoard";
import SummaryPage from "./pages/SummaryPage";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>zz
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/analytics" element={<SummaryPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
