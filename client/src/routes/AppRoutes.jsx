import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../pages/AuthPage";


function AppRoutes() {
  return (
    <Routes>

      {/* Authentication Page */}
      <Route path="/" element={<AuthPage />} />


    </Routes>
  );
}

export default AppRoutes;