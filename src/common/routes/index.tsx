import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import LoginComposite from "../../login/login-composite";

const GlobalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="Login" element={<LoginComposite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRoutes;
