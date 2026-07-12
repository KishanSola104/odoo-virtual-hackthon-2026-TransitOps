import React from "react";
import { Zap, LogOut, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { menus } from "./menu";
import { logout } from "../../utils/auth";

function Sidebar({ isOpen, closeSidebar }) {
  const navigate = useNavigate();

  // Logged-in user
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // Menu based on role
  const sidebarMenu = menus[user.role] || [];

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <>
      {/* Mobile Overlay */}

      <div
        onClick={closeSidebar}
        className={`
          fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden
          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}

      <aside
        className={`
          fixed top-0 left-0 z-50
          flex h-screen w-72 flex-col
          bg-brand text-white shadow-xl
          transition-transform duration-300

          lg:static
          lg:translate-x-0

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Logo */}

        <div
          className="
            flex items-center justify-between
            border-b border-white/10
            px-6 py-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-xl bg-white/10
              "
            >
              <Zap size={22} />
            </div>

            <div>
              <h1 className="font-display text-2xl font-bold">
                TransitOps
              </h1>

              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                Fleet Platform
              </p>
            </div>
          </div>

          <button
            onClick={closeSidebar}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-white/10
              lg:hidden
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Menu */}

        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">

          {sidebarMenu.map((item) => (

            <div
              key={item.title}
              onClick={closeSidebar}
            >
              <SidebarItem
                title={item.title}
                path={item.path}
                Icon={item.icon}
              />
            </div>

          ))}

        </div>

        {/* User Card */}

        <div className="border-t border-white/10 p-5">

          <div className="mb-5 flex items-center gap-3">

            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-blue-500
                font-semibold
                text-white
              "
            >
              {user?.name?.charAt(0)?.toUpperCase()}
            </div>

            <div>

              <h3 className="font-semibold">

                {user?.name}

              </h3>

              <p className="text-sm text-blue-200">

                {user?.role}

              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-red-200
              transition
              hover:bg-red-500/20
              hover:text-white
            "
          >
            <LogOut size={20} />

            <span className="font-medium">

              Sign Out

            </span>

          </button>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;