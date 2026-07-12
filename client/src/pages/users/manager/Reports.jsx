import React, { useState } from "react";

import {
  Download,
  Filter,
} from "lucide-react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Reports() {

  const [fromDate, setFromDate] = useState("2026-06-01");
  const [toDate, setToDate] = useState("2026-07-12");
  const [vehicleType, setVehicleType] = useState("All Types");

  /* ===============================
        KPI DATA
  ================================ */

  const kpis = [
    {
      title: "Total Operational Cost",
      value: "KSh 529K",
      subtitle: "Fuel + Maintenance",
      color: "text-white",
    },
    {
      title: "Fleet Utilization",
      value: "29%",
      subtitle: "Vehicles on trip",
      color: "text-green-500",
    },
    {
      title: "Fuel Efficiency",
      value: "0.6 km/L",
      subtitle: "Fleet average",
      color: "text-white",
    },
    {
      title: "Total Distance",
      value: "626 km",
      subtitle: "Completed trips",
      color: "text-white",
    },
  ];

  /* ===============================
        CHART DATA
  ================================ */

  const operationalCostData = [
    {
      vehicle: "234A",
      fuel: 18,
      maintenance: 0,
    },
    {
      vehicle: "567B",
      fuel: 57,
      maintenance: 12,
    },
    {
      vehicle: "891C",
      fuel: 0,
      maintenance: 45,
    },
    {
      vehicle: "123D",
      fuel: 43,
      maintenance: 18,
    },
    {
      vehicle: "456E",
      fuel: 14,
      maintenance: 8,
    },
    {
      vehicle: "012G",
      fuel: 31,
      maintenance: 0,
    },
    {
      vehicle: "345H",
      fuel: 0,
      maintenance: 320,
    },
  ];

  /* ===============================
        CSV EXPORT
  ================================ */

  const exportCSV = () => {

    const headers = [
      "Vehicle",
      "Fuel Cost",
      "Maintenance Cost",
    ];

    const rows = operationalCostData.map((item) => [

      item.vehicle,
      item.fuel,
      item.maintenance,

    ]);

    const csv = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "fleet-report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  };

  return (

    <div className="space-y-7">

      {/* FILTERS */}

      <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-5">

        <div className="mb-5 flex items-center gap-2">

          <Filter
            size={18}
            className="text-blue-400"
          />

          <h2 className="font-semibold text-white">

            FILTERS

          </h2>

        </div>

        <div className="flex flex-wrap items-end justify-between gap-5">

          <div className="flex flex-wrap gap-4">

            <div>

              <label className="mb-2 block text-sm text-gray-400">

                From Date

              </label>

              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-2 text-white"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-400">

                To Date

              </label>

              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-2 text-white"
              />

            </div>

            <div>

              <label className="mb-2 block text-sm text-gray-400">

                Vehicle Type

              </label>

              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="rounded-lg border border-gray-700 bg-[#111111] px-4 py-2 text-white"
              >

                <option>All Types</option>

                <option>Light Truck</option>

                <option>Medium Truck</option>

                <option>Heavy Truck</option>

              </select>

            </div>

          </div>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
          >

            <Download size={18} />

            Export CSV

          </button>

        </div>

      </div>

      {/* KPI CARDS */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {kpis.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-gray-700 bg-[#18181B] p-6"
          >

            <p className="text-gray-400">

              {item.title}

            </p>

            <h2 className={`mt-3 text-5xl font-bold ${item.color}`}>

              {item.value}

            </h2>

            <p className="mt-3 text-gray-400">

              {item.subtitle}

            </p>

          </div>

        ))}

      </div>

      {/* CHARTS */}

      <div className="grid gap-6 xl:grid-cols-2">

              {/* Operational Cost Chart */}

        <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

          <h2 className="text-xl font-semibold text-white">
            Operational Cost by Vehicle
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Fuel vs. maintenance cost (KSh '000)
          </p>

          <div className="mt-6 h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={operationalCostData}>

                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#3f3f46"
                />

                <XAxis
                  dataKey="vehicle"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid #3f3f46",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                />

                <Bar
                  dataKey="fuel"
                  fill="#8EA7FF"
                  radius={[4, 4, 0, 0]}
                />

                <Bar
                  dataKey="maintenance"
                  fill="#F59E0B"
                  radius={[4, 4, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* Fuel Efficiency Chart */}

        <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

          <h2 className="text-xl font-semibold text-white">
            Fuel Efficiency by Vehicle
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Distance per liter (km/L)
          </p>

          <div className="mt-6 h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={[
                  { vehicle: "234A", efficiency: 1.4 },
                  { vehicle: "567B", efficiency: 2.1 },
                  { vehicle: "123D", efficiency: 1.2 },
                  { vehicle: "456E", efficiency: 3.4 },
                  { vehicle: "012G", efficiency: 2.3 },
                ]}
              >

                <CartesianGrid
                  strokeDasharray="4 4"
                  stroke="#3f3f46"
                />

                <XAxis
                  dataKey="vehicle"
                  stroke="#94a3b8"
                />

                <YAxis
                  stroke="#94a3b8"
                />

                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid #3f3f46",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                />

                <Bar
                  dataKey="efficiency"
                  fill="#16A34A"
                  radius={[4, 4, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

          </div>
  );
}

export default Reports;