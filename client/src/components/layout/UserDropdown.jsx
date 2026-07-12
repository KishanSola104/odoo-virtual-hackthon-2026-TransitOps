import React from "react";
import { LogOut, User, Settings } from "lucide-react";

function UserDropdown() {
  return (
    <div
      className="
        absolute
        right-0
        top-14
        w-64
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-2xl
        overflow-hidden
        z-50
      "
    >
      {/* User Info */}

      <div className="px-5 py-4">

        <h3 className="font-semibold text-gray-800">
          Marcus Chen
        </h3>

        <p className="text-sm text-gray-500">
          manager@transitops.io
        </p>

      </div>

      <div className="border-t"></div>

      {/* Menu */}

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          hover:bg-gray-100
          transition
        "
      >
        <User size={18} />

        Profile
      </button>

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          hover:bg-gray-100
          transition
        "
      >
        <Settings size={18} />

        Settings
      </button>

      <div className="border-t"></div>

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-red-600
          hover:bg-red-50
          transition
        "
      >
        <LogOut size={18} />

        Sign Out
      </button>
    </div>
  );
}

export default UserDropdown;