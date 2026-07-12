import React, { useState } from "react";

import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function RightPanel() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-surface px-6 py-10 lg:w-1/2">

      <div className="w-full max-w-md animate-fade-in">

        {/* Welcome Text */}
        <div className="mb-8 text-center">

          <h1 className="font-display text-4xl font-bold text-gray-900">
            Welcome
          </h1>

          <p className="mt-2 text-gray-500">
            Login or create an account to continue.
          </p>

        </div>

        {/* Login / Signup Buttons */}
        <AuthTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Form */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl border border-gray-200">

          {activeTab === "login" ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}

        </div>

      </div>

    </div>
  );
}

export default RightPanel;