import React, { useState } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  dashboardCards,
  vehicleTypes,
  vehicleStatus,
  fleetTrend,
  fleetStatus,
} from "../../../data/dashboardData";

function ManagerDashboard() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  return (
    <div className="space-y-7">

      {/* Filters */}

      <div className="flex flex-wrap gap-8">

        <div className="flex flex-wrap gap-3">

          {vehicleTypes.map((type) => (

            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition
                ${
                  selectedType === type
                    ? "bg-brand border-brand text-white"
                    : "border-gray-700 text-gray-300 hover:border-brand"
                }`}
            >
              {type}
            </button>

          ))}

        </div>

        <div className="flex flex-wrap gap-3">

          {vehicleStatus.map((status) => (

            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition
                ${
                  selectedStatus === status
                    ? "bg-brand border-brand text-white"
                    : "border-gray-700 text-gray-300 hover:border-brand"
                }`}
            >
              {status}
            </button>

          ))}

        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">

        {dashboardCards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.id}
              className="rounded-2xl border border-gray-700 bg-[#18181B] p-5"
            >

              <div className="flex justify-between">

                <div
                  className={`
                    rounded-xl p-3

                    ${card.color === "blue" && "bg-blue-500/10 text-blue-400"}
                    ${card.color === "green" && "bg-green-500/10 text-green-400"}
                    ${card.color === "orange" && "bg-orange-500/10 text-orange-400"}
                    ${card.color === "purple" && "bg-purple-500/10 text-purple-400"}
                    ${card.color === "gray" && "bg-gray-500/10 text-gray-300"}
                    ${card.color === "indigo" && "bg-indigo-500/10 text-indigo-300"}
                  `}
                >

                  {Icon && <Icon size={22} />}

                </div>

                {card.growth && (

                  <span className="text-sm font-semibold text-green-500">
                    ↗ {card.growth}
                  </span>

                )}

              </div>

              <h2 className="mt-5 text-5xl font-bold text-white">
                {card.value}
              </h2>

              <p className="mt-2 text-gray-400">
                {card.title}
              </p>

            </div>

          );

        })}

      </div>

            {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-3">

        {/* Fleet Utilization Chart */}

        <div className="xl:col-span-2 rounded-2xl border border-gray-700 bg-[#18181B] p-6">

          <div>

            <h2 className="text-xl font-semibold text-white">
              Fleet Utilization Trend
            </h2>

            <p className="text-sm text-gray-400">
              Weekly utilization over the last 6 weeks
            </p>

          </div>

          <div className="mt-6 h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={fleetTrend}>

                <CartesianGrid
                  stroke="#3f3f46"
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="week"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                  domain={[60, 100]}
                />

                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid #3f3f46",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="utilization"
                  stroke="#A5B4FC"
                  strokeWidth={3}
                  dot={{
                    fill: "#C7D2FE",
                    r: 5,
                  }}
                  activeDot={{
                    r: 7,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Fleet Status */}

        <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

          <h2 className="text-xl font-semibold text-white">
            Vehicle Status
          </h2>

          <p className="text-sm text-gray-400">
            Current fleet breakdown
          </p>

          <div className="mt-6 h-[240px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={fleetStatus}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={2}
                >

                  {fleetStatus.map((item, index) => (

                    <Cell
                      key={index}
                      fill={item.color}
                    />

                  ))}

                </Pie>

                <Tooltip />

              </PieChart>

            </ResponsiveContainer>

          </div>

          <div className="mt-6 space-y-3">

            {fleetStatus.map((item) => (

              <div
                key={item.name}
                className="flex items-center justify-between"
              >

                <div className="flex items-center gap-3">

                  <div
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />

                  <span className="text-gray-300">
                    {item.name}
                  </span>

                </div>

                <span className="font-semibold text-white">
                  {item.value}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManagerDashboard;