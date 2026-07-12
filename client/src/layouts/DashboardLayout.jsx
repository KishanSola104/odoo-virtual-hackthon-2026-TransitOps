import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1">

        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;