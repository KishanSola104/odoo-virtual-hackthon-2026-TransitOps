import React from "react";
import {
  LogOut,
  User,
  Settings,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

function UserDropdown({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div
      className="
        absolute
        right-0
        top-14
        z-50
        w-72
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-2xl
      "
    >
      {/* User Info */}

      <div className="flex items-center gap-4 px-5 py-5">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-brand
            text-lg
            font-bold
            text-white
          "
        >
          {user?.name?.charAt(0)?.toUpperCase()}
        </div>

        <div className="flex-1">

          <h3 className="font-semibold text-gray-800">
            {user?.name}
          </h3>

          <p className="text-sm text-gray-500">
            {user?.email}
          </p>

          <span
            className="
              mt-2
              inline-block
              rounded-full
              bg-blue-100
              px-2
              py-1
              text-xs
              font-medium
              text-brand
            "
          >
            {user?.role}
          </span>

        </div>

      </div>

      <div className="border-t" />

      {/* Menu */}

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          transition
          hover:bg-gray-100
        "
      >
        <User size={18} />

        My Profile
      </button>

      <button
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          transition
          hover:bg-gray-100
        "
      >
        <Settings size={18} />

        Settings
      </button>

      <div className="border-t" />

      {/* Logout */}

      <button
        onClick={handleLogout}
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-red-600
          transition
          hover:bg-red-50
        "
      >
        <LogOut size={18} />

        Sign Out
      </button>

    </div>
  );
}

export default UserDropdown;