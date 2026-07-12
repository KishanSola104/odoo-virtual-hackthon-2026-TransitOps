import React from "react";

function AuthTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex rounded-xl bg-gray-200 p-1">

      <button
        onClick={() => setActiveTab("login")}
        className={`w-1/2 rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
          activeTab === "login"
            ? "bg-brand text-white shadow-lg"
            : "text-gray-600 hover:text-brand"
        }`}
      >
        Login
      </button>

      <button
        onClick={() => setActiveTab("register")}
        className={`w-1/2 rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${
          activeTab === "register"
            ? "bg-brand text-white shadow-lg"
            : "text-gray-600 hover:text-brand"
        }`}
      >
        Sign Up
      </button>

    </div>
  );
}

export default AuthTabs;