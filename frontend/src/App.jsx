import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Dashboardpage from "./components/Dashboardpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UploadMomentPage from "./components/uploadfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboardpage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/upload" element={<UploadMomentPage/>} />
    </Routes>
  );
}

export default App;
