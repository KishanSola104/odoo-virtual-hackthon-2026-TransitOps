import React, { useState } from "react";
import {
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

import UserDropdown from "./UserDropdown";

function Navbar({ openSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-6
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">
        <button
          onClick={openSidebar}
          className="
            rounded-lg
            p-2
            transition
            hover:bg-gray-100
            lg:hidden
          "
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="font-display text-2xl font-bold text-gray-800">
            Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            {today}
          </p>
        </div>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell
            size={22}
            className="text-gray-600"
          />

          <span
            className="
              absolute
              -right-1
              -top-1
              h-2.5
              w-2.5
              rounded-full
              bg-red-500
            "
          />
        </button>

        <div className="relative">
          <button
            onClick={() =>
              setShowDropdown(!showDropdown)
            }
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-brand
                font-semibold
                text-white
              "
            >
              M
            </div>

            <div className="hidden text-left sm:block">
              <h3 className="font-semibold text-gray-800">
                Marcus Chen
              </h3>

              <span
                className="
                  rounded-full
                  bg-blue-100
                  px-2
                  py-1
                  text-xs
                  text-brand
                "
              >
                Fleet Manager
              </span>
            </div>

            <ChevronDown
              size={18}
              className={`transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showDropdown && <UserDropdown />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;