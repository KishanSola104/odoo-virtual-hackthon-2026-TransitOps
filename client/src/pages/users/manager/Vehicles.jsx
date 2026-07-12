import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

function Vehicles() {

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const vehicles = [
    {
      id: 1,
      regNo: "KAA-234A",
      model: "Isuzu NQR 33",
      type: "Medium Truck",
      load: "5,000 kg",
      odometer: "84,320 km",
      cost: "KSh 4,200,000",
      region: "Nairobi",
      status: "Available",
    },
    {
      id: 2,
      regNo: "KBB-567B",
      model: "Mercedes Actros",
      type: "Heavy Truck",
      load: "22,000 kg",
      odometer: "156,040 km",
      cost: "KSh 12,500,000",
      region: "Mombasa",
      status: "On Trip",
    },
    {
      id: 3,
      regNo: "KCC-891C",
      model: "Mitsubishi Canter",
      type: "Light Truck",
      load: "2,500 kg",
      odometer: "42,100 km",
      cost: "KSh 2,800,000",
      region: "Kisumu",
      status: "In Shop",
    },
    {
      id: 4,
      regNo: "KDD-123D",
      model: "Hino 500 Series",
      type: "Heavy Truck",
      load: "18,000 kg",
      odometer: "201,500 km",
      cost: "KSh 9,800,000",
      region: "Nairobi",
      status: "Available",
    },
    {
      id: 5,
      regNo: "KEE-456E",
      model: "Toyota Dyna",
      type: "Light Truck",
      load: "1,500 kg",
      odometer: "63,400 km",
      cost: "KSh 1,950,000",
      region: "Nakuru",
      status: "On Trip",
    },
    {
      id: 6,
      regNo: "KFF-789F",
      model: "Scania R-Series",
      type: "Heavy Truck",
      load: "25,000 kg",
      odometer: "320,100 km",
      cost: "KSh 18,000,000",
      region: "Eldoret",
      status: "Retired",
    },
    {
      id: 7,
      regNo: "KGG-012G",
      model: "Isuzu FRR 90",
      type: "Medium Truck",
      load: "7,000 kg",
      odometer: "97,200 km",
      cost: "KSh 5,500,000",
      region: "Nairobi",
      status: "Available",
    },
    {
      id: 8,
      regNo: "KHH-345H",
      model: "UD Trucks Quon",
      type: "Heavy Truck",
      load: "20,000 kg",
      odometer: "178,900 km",
      cost: "KSh 14,200,000",
      region: "Mombasa",
      status: "In Shop",
    },
  ];

  const filteredVehicles = useMemo(() => {

    return vehicles.filter((vehicle) => {

      const matchesSearch =
        vehicle.regNo.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "All" || vehicle.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" || vehicle.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;

    });

  }, [search, typeFilter, statusFilter]);

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Vehicles
          </h1>

          <p className="text-gray-400 mt-1">
            Manage your fleet vehicles.
          </p>

        </div>

      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-4">

        {/* Search */}

        <div className="relative flex-1 min-w-[260px]">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search by registration or vehicle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-700 bg-[#18181B] py-3 pl-10 pr-4 text-white outline-none focus:border-blue-500"
          />

        </div>

        {/* Type */}

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded-lg border border-gray-700 bg-[#18181B] px-4 text-white"
        >
          <option>All</option>
          <option>Light Truck</option>
          <option>Medium Truck</option>
          <option>Heavy Truck</option>
        </select>

        {/* Status */}

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border border-gray-700 bg-[#18181B] px-4 text-white"
        >
          <option>All</option>
          <option>Available</option>
          <option>On Trip</option>
          <option>In Shop</option>
          <option>Retired</option>
        </select>

        {/* Button */}

        <button className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark">

          <Plus size={18} />

          Add Vehicle

        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto rounded-xl border border-gray-700">

        <table className="min-w-full">

          <thead className="bg-[#1F1F23] text-gray-300">

            <tr>

              <th className="px-5 py-4 text-left">Reg. Number</th>

              <th className="px-5 py-4 text-left">Name / Model</th>

              <th className="px-5 py-4 text-left">Type</th>

              <th className="px-5 py-4 text-left">Max Load</th>

              <th className="px-5 py-4 text-left">Odometer</th>

              <th className="px-5 py-4 text-left">Acq. Cost</th>

              <th className="px-5 py-4 text-left">Region</th>

              <th className="px-5 py-4 text-left">Status</th>

              <th className="px-5 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

                      {filteredVehicles.length > 0 ? (

              filteredVehicles.map((vehicle) => (

                <tr
                  key={vehicle.id}
                  className="border-t border-gray-700 hover:bg-[#1C1C20] transition"
                >

                  <td className="px-5 py-4 font-semibold text-white">
                    {vehicle.regNo}
                  </td>

                  <td className="px-5 py-4 font-semibold text-white">
                    {vehicle.model}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {vehicle.type}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {vehicle.load}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {vehicle.odometer}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {vehicle.cost}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {vehicle.region}
                  </td>

                  <td className="px-5 py-4">

                    <span
                      className={`rounded-md px-3 py-1 text-xs font-semibold

                        ${
                          vehicle.status === "Available"
                            ? "bg-green-500/20 text-green-400 border border-green-600"
                            : ""
                        }

                        ${
                          vehicle.status === "On Trip"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-600"
                            : ""
                        }

                        ${
                          vehicle.status === "In Shop"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-600"
                            : ""
                        }

                        ${
                          vehicle.status === "Retired"
                            ? "bg-gray-500/20 text-gray-400 border border-gray-600"
                            : ""
                        }

                      `}
                    >
                      {vehicle.status}
                    </span>

                  </td>

                  <td className="px-5 py-4">

                    <div className="flex justify-center gap-4">

                      <button
                        className="text-gray-400 transition hover:text-blue-400"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="text-gray-400 transition hover:text-yellow-400"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="text-gray-400 transition hover:text-red-500"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="9"
                  className="py-10 text-center text-gray-400"
                >
                  No vehicles found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Vehicles;