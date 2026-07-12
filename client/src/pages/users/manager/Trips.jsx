import React, { useMemo, useState } from "react";
import {
  Plus,
  ArrowRight,
} from "lucide-react";

function Trips() {

  const [activeTab, setActiveTab] = useState("Draft");

  const trips = [
    {
      id: 1043,
      from: "Kisumu Port",
      to: "Nakuru Warehouse",
      vehicle: "KAA-234A",
      driver: "Grace Akinyi",
      load: "4,500 kg",
      distance: "168 km",
      status: "Draft",
    },
    {
      id: 1044,
      from: "Nairobi ICD",
      to: "Kisumu Port",
      vehicle: "KDD-123D",
      driver: "Faith Wanjiku",
      load: "15,000 kg",
      distance: "340 km",
      status: "Draft",
    },
    {
      id: 1041,
      from: "Nairobi ICD",
      to: "Mombasa Port",
      vehicle: "KBB-567B",
      driver: "James Mwangi",
      load: "18,000 kg",
      distance: "485 km",
      status: "Dispatched",
    },
    {
      id: 1042,
      from: "Eldoret Depot",
      to: "Nairobi CBD",
      vehicle: "KEE-456E",
      driver: "Samuel Otieno",
      load: "1,200 kg",
      distance: "312 km",
      status: "Completed",
    },
    {
      id: 1046,
      from: "Nairobi ICD",
      to: "Eldoret Depot",
      vehicle: "KBB-567B",
      driver: "James Mwangi",
      load: "19,000 kg",
      distance: "314 km",
      status: "Completed",
    },
    {
      id: 1045,
      from: "Mombasa Port",
      to: "Nairobi ICD",
      vehicle: "KGG-012G",
      driver: "Peter Kamau",
      load: "6,800 kg",
      distance: "485 km",
      status: "Cancelled",
    },
  ];

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => trip.status === activeTab);
  }, [activeTab]);

  const count = (status) =>
    trips.filter((trip) => trip.status === status).length;

  return (

    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Trips
          </h1>

          <p className="mt-1 text-gray-400">
            Manage all transportation trips.
          </p>

        </div>

        <button
          className="flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-medium text-white hover:bg-brand-dark"
        >

          <Plus size={18} />

          Create Trip

        </button>

      </div>

      {/* Tabs */}

      <div className="flex w-fit overflow-hidden rounded-xl border border-gray-700">

        {[
          "Draft",
          "Dispatched",
          "Completed",
          "Cancelled",
        ].map((tab) => (

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

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredTrips.length > 0 ? (

          filteredTrips.map((trip) => (

            <div
              key={trip.id}
              className={`
                rounded-2xl
                border
                p-5
                bg-[#18181B]
                transition
                hover:border-brand

                ${trip.status === "Completed" ? "border-green-700" : ""}

                ${trip.status === "Cancelled" ? "border-red-700" : ""}

                ${
                  trip.status === "Draft" ||
                  trip.status === "Dispatched"
                    ? "border-gray-700"
                    : ""
                }
              `}
            >

              {/* Header */}

              <div className="flex items-center justify-between">

                <span className="text-sm text-blue-300">
                  #{trip.id}
                </span>

                <span
                  className={`rounded-md border px-3 py-1 text-xs font-semibold

                    ${
                      trip.status === "Draft"
                        ? "border-gray-600 bg-gray-500/20 text-gray-300"
                        : ""
                    }

                    ${
                      trip.status === "Dispatched"
                        ? "border-blue-600 bg-blue-500/20 text-blue-400"
                        : ""
                    }

                    ${
                      trip.status === "Completed"
                        ? "border-green-600 bg-green-500/20 text-green-400"
                        : ""
                    }

                    ${
                      trip.status === "Cancelled"
                        ? "border-red-600 bg-red-500/20 text-red-400"
                        : ""
                    }

                  `}
                >
                  {trip.status}
                </span>

              </div>

              {/* Route */}

              <div className="mt-6 flex items-center gap-3">

                <h2 className="text-xl font-bold text-white">
                  {trip.from}
                </h2>

                <ArrowRight
                  size={18}
                  className="text-gray-400"
                />

                <h2 className="text-xl font-bold text-white">
                  {trip.to}
                </h2>

              </div>

              {/* Details */}

              <div className="mt-5 space-y-2 text-gray-300">

                <p>

                  Vehicle:

                  <span className="ml-2 text-white">

                    {trip.vehicle}

                  </span>

                </p>

                <p>

                  Driver:

                  <span className="ml-2 text-white">

                    {trip.driver}

                  </span>

                </p>

                <p>

                  {trip.load}

                  <span className="mx-3 text-gray-500">

                    •

                  </span>

                  {trip.distance}

                </p>

              </div>

              {/* Action Button */}

              {trip.status === "Draft" && (

                <button
                  className="mt-6 w-full rounded-lg bg-brand py-3 font-semibold text-white hover:bg-brand-dark"
                >
                  Dispatch
                </button>

              )}

              {trip.status === "Dispatched" && (

                <button
                  className="mt-6 w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
                >
                  Mark Completed
                </button>

              )}

            </div>

          ))

        ) : (

          <div className="col-span-full rounded-xl border border-gray-700 py-12 text-center text-gray-400">

            No trips found.

          </div>

        )}

      </div>

          </div>
  );
}

export default Trips;
