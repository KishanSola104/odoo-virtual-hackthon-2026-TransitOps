import React, { useState } from "react";

function Settings() {

  const [companyName, setCompanyName] = useState("TransitOps Logistics");
  const [email, setEmail] = useState("admin@transitops.com");
  const [phone, setPhone] = useState("+254 700 123 456");
  const [address, setAddress] = useState("Nairobi, Kenya");

  const [currency, setCurrency] = useState("KSh");
  const [distanceUnit, setDistanceUnit] = useState("Kilometers");
  const [weightUnit, setWeightUnit] = useState("Kilograms");

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-3xl font-bold text-white">

          Settings

        </h1>

        <p className="mt-1 text-gray-400">

          Configure your fleet management system.

        </p>

      </div>

      {/* Company Information */}

      <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">

          Company Information

        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Company Name

            </label>

            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Company Email

            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Contact Number

            </label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Office Address

            </label>

            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-blue-500"
            />

          </div>

        </div>

      </div>

      {/* Fleet Configuration */}

      <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">

          Fleet Configuration

        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Currency

            </label>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white"
            >

              <option>KSh</option>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Distance Unit

            </label>

            <select
              value={distanceUnit}
              onChange={(e) => setDistanceUnit(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white"
            >

              <option>Kilometers</option>
              <option>Miles</option>

            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm text-gray-400">

              Weight Unit

            </label>

            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#111111] px-4 py-3 text-white"
            >

              <option>Kilograms</option>
              <option>Tonnes</option>
              <option>Pounds</option>

            </select>

          </div>

        </div>

      </div>

            {/* Notification Settings */}

      <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          Notification Settings
        </h2>

        <div className="space-y-5">

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                Email Notifications
              </p>

              <p className="text-sm text-gray-400">
                Receive important updates via email.
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />

          </label>

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                SMS Alerts
              </p>

              <p className="text-sm text-gray-400">
                Receive emergency notifications via SMS.
              </p>

            </div>

            <input
              type="checkbox"
              className="h-5 w-5"
            />

          </label>

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                Push Notifications
              </p>

              <p className="text-sm text-gray-400">
                Browser notifications for live fleet updates.
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />

          </label>

        </div>

      </div>

      {/* System Preferences */}

      <div className="rounded-2xl border border-gray-700 bg-[#18181B] p-6">

        <h2 className="mb-6 text-xl font-semibold text-white">
          System Preferences
        </h2>

        <div className="space-y-5">

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                Dark Theme
              </p>

              <p className="text-sm text-gray-400">
                Use dark appearance across the dashboard.
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />

          </label>

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                Automatic Backup
              </p>

              <p className="text-sm text-gray-400">
                Backup fleet data every 24 hours.
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />

          </label>

          <label className="flex items-center justify-between">

            <div>

              <p className="font-medium text-white">
                Maintenance Reminders
              </p>

              <p className="text-sm text-gray-400">
                Notify managers about upcoming maintenance.
              </p>

            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5"
            />

          </label>

        </div>

      </div>

      {/* Action Buttons */}

      <div className="flex justify-end gap-4">

        <button
          className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-300 transition hover:bg-gray-800"
        >
          Reset
        </button>

        <button
          onClick={() => alert("Settings saved successfully!")}
          className="rounded-lg bg-brand px-6 py-3 font-medium text-white transition hover:bg-brand-dark"
        >
          Save Settings
        </button>

      </div>

    </div>

  );

}

export default Settings;