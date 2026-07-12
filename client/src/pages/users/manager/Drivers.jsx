import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  AlertTriangle,
} from "lucide-react";

function Drivers() {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const drivers = [
    {
      id: 1,
      name: "James Mwangi",
      license: "DL-KE-001234",
      category: "Class G",
      expiry: "15/03/2025",
      phone: "+254 700 111 222",
      score: 94,
      status: "On Duty",
      expired: true,
    },
    {
      id: 2,
      name: "Grace Akinyi",
      license: "DL-KE-002345",
      category: "Class CE",
      expiry: "20/08/2026",
      phone: "+254 711 222 333",
      score: 88,
      status: "Off Duty",
      expired: false,
    },
    {
      id: 3,
      name: "Peter Kamau",
      license: "DL-KE-003456",
      category: "Class G",
      expiry: "30/11/2024",
      phone: "+254 722 333 444",
      score: 72,
      status: "On Duty",
      expired: true,
    },
    {
      id: 4,
      name: "Faith Wanjiku",
      license: "DL-KE-004567",
      category: "Class CE",
      expiry: "14/02/2027",
      phone: "+254 733 444 555",
      score: 97,
      status: "Off Duty",
      expired: false,
    },
    {
      id: 5,
      name: "Samuel Otieno",
      license: "DL-KE-005678",
      category: "Class G",
      expiry: "01/12/2025",
      phone: "+254 744 555 666",
      score: 81,
      status: "On Duty",
      expired: true,
    },
    {
      id: 6,
      name: "Linda Chebet",
      license: "DL-KE-006789",
      category: "Class C",
      expiry: "30/06/2026",
      phone: "+254 755 666 777",
      score: 91,
      status: "Suspended",
      expired: true,
    },
  ];

  const filteredDrivers = useMemo(() => {

    return drivers.filter((driver) => {

      const matchesSearch =
        driver.name.toLowerCase().includes(search.toLowerCase()) ||
        driver.license.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All Statuses" ||
        driver.status === statusFilter;

      return matchesSearch && matchesStatus;

    });

  }, [search, statusFilter]);

  return (

    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Drivers
        </h1>

        <p className="mt-1 text-gray-400">
          Manage all fleet drivers.
        </p>

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-4">

        <div className="relative flex-1 min-w-[260px]">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by name or license..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-[#18181B] py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-gray-700 bg-[#18181B] px-4 text-white"
        >
          <option>All Statuses</option>
          <option>On Duty</option>
          <option>Off Duty</option>
          <option>Suspended</option>
        </select>

        <button
          className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
        >

          <Plus size={18} />

          Add Driver

        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border border-gray-700">

        <table className="min-w-full">

          <thead className="bg-[#1F1F23] text-gray-300">

            <tr>

              <th className="px-5 py-4 text-left">
                Name
              </th>

              <th className="px-5 py-4 text-left">
                License Number
              </th>

              <th className="px-5 py-4 text-left">
                Category
              </th>

              <th className="px-5 py-4 text-left">
                License Expiry
              </th>

              <th className="px-5 py-4 text-left">
                Phone
              </th>

              <th className="px-5 py-4 text-left">
                Safety Score
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

                      {filteredDrivers.length > 0 ? (

              filteredDrivers.map((driver) => (

                <tr
                  key={driver.id}
                  className="border-t border-gray-700 hover:bg-[#1C1C20] transition"
                >

                  <td className="px-5 py-4 font-semibold text-white">
                    {driver.name}
                  </td>

                  <td className="px-5 py-4 text-blue-300">
                    {driver.license}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {driver.category}
                  </td>

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2">

                      {driver.expired && (
                        <AlertTriangle
                          size={16}
                          className="text-red-500"
                        />
                      )}

                      <span
                        className={
                          driver.expired
                            ? "text-red-500 font-medium"
                            : "text-gray-300"
                        }
                      >
                        {driver.expiry}
                      </span>

                    </div>

                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {driver.phone}
                  </td>

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-4">

                      <div className="h-2 w-28 rounded-full bg-gray-700">

                        <div
                          className={`h-2 rounded-full

                            ${
                              driver.score >= 90
                                ? "bg-green-500"
                                : driver.score >= 80
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            }

                          `}
                          style={{
                            width: `${driver.score}%`,
                          }}
                        />

                      </div>

                      <span className="font-semibold text-white">
                        {driver.score}
                      </span>

                    </div>

                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`rounded-md border px-3 py-1 text-xs font-semibold

                        ${
                          driver.status === "On Duty"
                            ? "border-blue-600 bg-blue-500/20 text-blue-400"
                            : ""
                        }

                        ${
                          driver.status === "Off Duty"
                            ? "border-gray-600 bg-gray-500/20 text-gray-300"
                            : ""
                        }

                        ${
                          driver.status === "Suspended"
                            ? "border-red-600 bg-red-500/20 text-red-400"
                            : ""
                        }

                      `}
                    >
                      {driver.status}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-center">

                    <button
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >

                      <Pencil size={16} />

                      Edit

                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="8"
                  className="py-10 text-center text-gray-400"
                >
                  No drivers found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Drivers;