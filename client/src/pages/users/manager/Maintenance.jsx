import React, { useMemo, useState } from "react";
import {
  Plus,
} from "lucide-react";

function Maintenance() {

  const [activeTab, setActiveTab] = useState("All");

  const maintenanceRecords = [
    {
      id: 1,
      vehicle: "KCC-891C",
      type: "Brake Service",
      description: "Front brake pads replacement + rotor resurfacing",
      cost: "45,000",
      opened: "2026-07-08",
      closed: "—",
      status: "Open",
    },
    {
      id: 2,
      vehicle: "KHH-345H",
      type: "Engine Overhaul",
      description: "Major engine overhaul — piston rings, gaskets",
      cost: "320,000",
      opened: "2026-07-05",
      closed: "—",
      status: "Open",
    },
    {
      id: 3,
      vehicle: "KBB-567B",
      type: "Oil Change",
      description: "Routine 15,000km oil + filter change",
      cost: "12,000",
      opened: "2026-07-01",
      closed: "2026-07-01",
      status: "Closed",
    },
    {
      id: 4,
      vehicle: "KAA-234A",
      type: "Tyre Rotation",
      description: "Full tyre rotation and pressure check",
      cost: "8,000",
      opened: "2026-06-25",
      closed: "2026-06-25",
      status: "Closed",
    },
    {
      id: 5,
      vehicle: "KDD-123D",
      type: "Coolant Service",
      description: "Radiator flush and coolant replacement",
      cost: "18,000",
      opened: "2026-06-20",
      closed: "2026-06-21",
      status: "Closed",
    },
  ];

  const filteredRecords = useMemo(() => {

    if (activeTab === "All") {
      return maintenanceRecords;
    }

    return maintenanceRecords.filter(
      (record) => record.status === activeTab
    );

  }, [activeTab]);

  const count = (status) => {

    if (status === "All") {
      return maintenanceRecords.length;
    }

    return maintenanceRecords.filter(
      (record) => record.status === status
    ).length;

  };

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Maintenance
          </h1>

          <p className="mt-1 text-gray-400">
            Manage vehicle maintenance records.
          </p>

        </div>

        <button
          className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
        >

          <Plus size={18} />

          Add Record

        </button>

      </div>

      {/* Tabs */}

      <div className="flex w-fit overflow-hidden rounded-xl border border-gray-700">

        {["All", "Open", "Closed"].map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-3 text-sm font-medium transition

              ${
                activeTab === tab
                  ? "bg-brand text-white"
                  : "bg-[#18181B] text-gray-300 hover:bg-[#242428]"
              }

            `}
          >

            {tab}

            <span className="ml-2 text-gray-400">

              ({count(tab)})

            </span>

          </button>

        ))}

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border border-gray-700">

        <table className="min-w-full">

          <thead className="bg-[#1F1F23] text-gray-300">

            <tr>

              <th className="px-5 py-4 text-left">
                Vehicle
              </th>

              <th className="px-5 py-4 text-left">
                Type
              </th>

              <th className="px-5 py-4 text-left">
                Description
              </th>

              <th className="px-5 py-4 text-left">
                Cost (KSh)
              </th>

              <th className="px-5 py-4 text-left">
                Opened
              </th>

              <th className="px-5 py-4 text-left">
                Closed
              </th>

              <th className="px-5 py-4 text-left">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

                      {filteredRecords.length > 0 ? (

              filteredRecords.map((record) => (

                <tr
                  key={record.id}
                  className="border-t border-gray-700 hover:bg-[#1C1C20] transition"
                >

                  <td className="px-5 py-4 font-semibold text-white">
                    {record.vehicle}
                  </td>

                  <td className="px-5 py-4 text-white">
                    {record.type}
                  </td>

                  <td className="max-w-xs truncate px-5 py-4 text-gray-300">
                    {record.description}
                  </td>

                  <td className="px-5 py-4 font-semibold text-white">
                    {record.cost}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {record.opened}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {record.closed}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`rounded-md border px-3 py-1 text-xs font-semibold

                        ${
                          record.status === "Open"
                            ? "border-yellow-600 bg-yellow-500/20 text-yellow-400"
                            : ""
                        }

                        ${
                          record.status === "Closed"
                            ? "border-green-600 bg-green-500/20 text-green-400"
                            : ""
                        }

                      `}
                    >
                      {record.status}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-center">

                    {record.status === "Open" ? (

                      <button
                        className="font-medium text-green-500 hover:text-green-400"
                      >
                        Close
                      </button>

                    ) : (

                      <span className="text-gray-500">
                        —
                      </span>

                    )}

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="py-10 text-center text-gray-400"
                >
                  No maintenance records found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Maintenance;