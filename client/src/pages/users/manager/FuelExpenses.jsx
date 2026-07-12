import React, { useMemo, useState } from "react";
import { Plus, Fuel, ReceiptText } from "lucide-react";

function FuelExpenses() {

  const [activeTab, setActiveTab] = useState("Fuel Logs");

  const summary = [
    {
      vehicle: "KBB-567B",
      fuel: "KSh 57,000",
      maintenance: "KSh 0",
      total: "KSh 57,000",
    },
    {
      vehicle: "KEE-456E",
      fuel: "KSh 14,250",
      maintenance: "KSh 0",
      total: "KSh 14,250",
    },
    {
      vehicle: "KAA-234A",
      fuel: "KSh 18,000",
      maintenance: "KSh 0",
      total: "KSh 18,000",
    },
    {
      vehicle: "KDD-123D",
      fuel: "KSh 43,500",
      maintenance: "KSh 0",
      total: "KSh 43,500",
    },
    {
      vehicle: "KGG-012G",
      fuel: "KSh 31,500",
      maintenance: "KSh 0",
      total: "KSh 31,500",
    },
    {
      vehicle: "KCC-891C",
      fuel: "KSh 0",
      maintenance: "KSh 45,000",
      total: "KSh 45,000",
    },
    {
      vehicle: "KHH-345H",
      fuel: "KSh 0",
      maintenance: "KSh 320,000",
      total: "KSh 320,000",
    },
  ];

  const fuelLogs = [
    {
      id: 1,
      vehicle: "KBB-567B",
      liters: "380 L",
      cost: "57,000",
      date: "2026-07-11",
      trip: "#T1041",
    },
    {
      id: 2,
      vehicle: "KEE-456E",
      liters: "95 L",
      cost: "14,250",
      date: "2026-07-10",
      trip: "#T1042",
    },
    {
      id: 3,
      vehicle: "KAA-234A",
      liters: "120 L",
      cost: "18,000",
      date: "2026-07-10",
      trip: "—",
    },
    {
      id: 4,
      vehicle: "KDD-123D",
      liters: "290 L",
      cost: "43,500",
      date: "2026-07-09",
      trip: "#T1046",
    },
  ];

  const expenseLogs = [
    {
      id: 1,
      vehicle: "KCC-891C",
      type: "Brake Service",
      cost: "45,000",
      date: "2026-07-08",
    },
    {
      id: 2,
      vehicle: "KHH-345H",
      type: "Engine Overhaul",
      cost: "320,000",
      date: "2026-07-05",
    },
  ];

  const records = useMemo(() => {
    return activeTab === "Fuel Logs"
      ? fuelLogs
      : expenseLogs;
  }, [activeTab]);

  return (

    <div className="space-y-6">

      {/* Summary Cards */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

        {summary.map((item) => (

          <div
            key={item.vehicle}
            className="rounded-2xl border border-gray-700 bg-[#18181B] p-5"
          >

            <h2 className="font-semibold text-blue-300">
              {item.vehicle}
            </h2>

            <div className="mt-4 space-y-2 text-sm">

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Fuel
                </span>

                <span className="font-semibold text-white">
                  {item.fuel}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">
                  Maintenance
                </span>

                <span className="font-semibold text-white">
                  {item.maintenance}
                </span>

              </div>

              <div className="mt-3 flex justify-between border-t border-gray-700 pt-3">

                <span className="font-semibold text-white">
                  Total
                </span>

                <span className="font-bold text-white">
                  {item.total}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Tabs */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div className="flex overflow-hidden rounded-xl border border-gray-700">

          <button
            onClick={() => setActiveTab("Fuel Logs")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium

              ${
                activeTab === "Fuel Logs"
                  ? "bg-brand text-white"
                  : "bg-[#18181B] text-gray-300"
              }
            `}
          >

            <Fuel size={16} />

            Fuel Logs

          </button>

          <button
            onClick={() => setActiveTab("Expenses")}
            className={`flex items-center gap-2 px-5 py-3 text-sm font-medium

              ${
                activeTab === "Expenses"
                  ? "bg-brand text-white"
                  : "bg-[#18181B] text-gray-300"
              }
            `}
          >

            <ReceiptText size={16} />

            Expenses

          </button>

        </div>

        <button
          className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
        >

          <Plus size={18} />

          Add Log

        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border border-gray-700">

        <table className="min-w-full">

          <thead className="bg-[#1F1F23] text-gray-300">

            {activeTab === "Fuel Logs" ? (

              <tr>

                <th className="px-5 py-4 text-left">
                  Vehicle
                </th>

                <th className="px-5 py-4 text-left">
                  Liters
                </th>

                <th className="px-5 py-4 text-left">
                  Cost (KSh)
                </th>

                <th className="px-5 py-4 text-left">
                  Date
                </th>

                <th className="px-5 py-4 text-left">
                  Linked Trip
                </th>

              </tr>

            ) : (

              <tr>

                <th className="px-5 py-4 text-left">
                  Vehicle
                </th>

                <th className="px-5 py-4 text-left">
                  Expense Type
                </th>

                <th className="px-5 py-4 text-left">
                  Cost (KSh)
                </th>

                <th className="px-5 py-4 text-left">
                  Date
                </th>

              </tr>

            )}

          </thead>

          <tbody>

                      {records.length > 0 ? (

              activeTab === "Fuel Logs" ? (

                records.map((log) => (

                  <tr
                    key={log.id}
                    className="border-t border-gray-700 hover:bg-[#1C1C20] transition"
                  >

                    <td className="px-5 py-4 font-semibold text-white">
                      {log.vehicle}
                    </td>

                    <td className="px-5 py-4 text-gray-300">
                      {log.liters}
                    </td>

                    <td className="px-5 py-4 font-semibold text-white">
                      KSh {log.cost}
                    </td>

                    <td className="px-5 py-4 text-gray-300">
                      {log.date}
                    </td>

                    <td className="px-5 py-4 text-blue-400">
                      {log.trip}
                    </td>

                  </tr>

                ))

              ) : (

                records.map((expense) => (

                  <tr
                    key={expense.id}
                    className="border-t border-gray-700 hover:bg-[#1C1C20] transition"
                  >

                    <td className="px-5 py-4 font-semibold text-white">
                      {expense.vehicle}
                    </td>

                    <td className="px-5 py-4 text-gray-300">
                      {expense.type}
                    </td>

                    <td className="px-5 py-4 font-semibold text-white">
                      KSh {expense.cost}
                    </td>

                    <td className="px-5 py-4 text-gray-300">
                      {expense.date}
                    </td>

                  </tr>

                ))

              )

            ) : (

              <tr>

                <td
                  colSpan={activeTab === "Fuel Logs" ? 5 : 4}
                  className="py-10 text-center text-gray-400"
                >
                  No records found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default FuelExpenses;