import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "../pages/AuthPage";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/dashboard/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Authentication Page */}
      <Route path="/auth" element={<AuthPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />

      <Route index element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
