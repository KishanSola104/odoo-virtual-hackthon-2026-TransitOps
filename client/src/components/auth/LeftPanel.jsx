import React from "react";
import { Zap } from "lucide-react";

function LeftPanel() {
  const stats = [
    {
      title: "98.4%",
      subtitle: "Fleet Uptime",
    },
    {
      title: "2,400+",
      subtitle: "Active Vehicles",
    },
    {
      title: "$1.2M",
      subtitle: "Cost Savings",
    },
    {
      title: "340",
      subtitle: "Daily Trips",
    },
  ];

  return (
    <div className="relative hidden lg:flex lg:w-1/2 overflow-hidden bg-gradient-to-br from-brand via-brand-dark to-blue-950">

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col justify-center w-full px-12 py-10 xl:px-16">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur">

            <Zap className="h-6 w-6 text-white" />

          </div>

          <div>

            <h1 className="font-display text-3xl font-bold text-white">
              TransitOps
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-blue-200">
              Fleet Platform
            </p>

          </div>

        </div>

        {/* Hero Content */}

        <div className="mt-12">

          <h2 className="font-display text-4xl xl:text-5xl font-bold leading-tight text-white">

            Intelligent Fleet
            <br />
            Management
            <br />
            Made Simple

          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-blue-100">

            Streamline your fleet operations with real-time
            vehicle tracking, driver management, trip monitoring,
            maintenance scheduling and intelligent reporting—all
            from one secure platform.

          </p>

        </div>

        {/* Stats */}

        <div className="mt-10 grid grid-cols-2 gap-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
                rounded-xl
                border
                border-white/10
                bg-white/10
                p-5
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/20
              "
            >

              <h3 className="font-display text-3xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-1 text-sm text-blue-100">

                {item.subtitle}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default LeftPanel;