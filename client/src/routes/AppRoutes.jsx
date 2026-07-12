import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AuthPage from "../pages/AuthPage";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

import { dashboardRoutes } from "./dashboardRoutes";

function AppRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));

  const routes = user
    ? dashboardRoutes[user.role] || []
    : [];

  return (
    <Routes>

      {/* Login */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        {routes.map((route) => (
          <Route
            key={route.path}
            index={route.path === ""}
            path={route.path === "" ? undefined : route.path}
            element={route.element}
          />
        ))}
      </Route>

      {/* Redirect */}
      <Route
        path="*"
        element={
          <Navigate
            to={user ? "/dashboard" : "/auth"}
            replace
          />
        }
      />

    </Routes>
  );
}

export default AppRoutes;