import React from "react";

import LeftPanel from "../components/auth/LeftPanel";
import RightPanel from "../components/auth/RightPanel";

function AuthPage() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="flex min-h-screen">

        {/* Left Side */}
        <LeftPanel />

        {/* Right Side */}
        <RightPanel />

      </div>
    </div>
  );
}

export default AuthPage;