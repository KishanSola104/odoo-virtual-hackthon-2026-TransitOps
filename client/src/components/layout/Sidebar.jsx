import React from "react";
import {
    Zap,
  LogOut,
  X,
} from "lucide-react";


import SidebarItem from "./SidebarItem";
import { fleetManagerMenu } from "./menu";

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Mobile Overlay */}

      <div
        onClick={closeSidebar}
        className={`
          fixed
          inset-0
          z-40
          bg-black/50
          transition-opacity
          duration-300
          lg:hidden
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
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-72
          flex-col
          bg-brand
          text-white
          shadow-xl
          transition-transform
          duration-300
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
            flex
            items-center
            justify-between
            border-b
            border-white/10
            p-6
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-white/10
              "
            >
              <Zap size={22} />
            </div>

            <div>
              <h1 className="font-display text-2xl font-bold">
                TransitOps
              </h1>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-blue-200
                "
              >
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

        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {fleetManagerMenu.map((item) => (
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

        {/* Logout */}

        <div className="border-t border-white/10 p-5">
          <button
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