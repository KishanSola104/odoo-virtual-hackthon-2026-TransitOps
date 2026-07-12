import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Users,
  Route,
  ShieldCheck,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Section */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-brand">
              Smart Fleet Management Platform
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Manage Your
              <br />
              <span className="text-brand">Fleet Operations</span>
              <br />
              Smarter & Faster
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              TransitOps helps businesses manage vehicles,
              drivers, routes, maintenance, fuel expenses,
              and transportation analytics from one
              centralized dashboard.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/auth"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">

              <div className="rounded-2xl bg-white p-5 shadow-md">
                <Truck className="text-brand" size={28} />
                <h3 className="mt-3 text-2xl font-bold">250+</h3>
                <p className="text-sm text-gray-500">Vehicles</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-md">
                <Users className="text-brand" size={28} />
                <h3 className="mt-3 text-2xl font-bold">120+</h3>
                <p className="text-sm text-gray-500">Drivers</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-md">
                <Route className="text-brand" size={28} />
                <h3 className="mt-3 text-2xl font-bold">1500+</h3>
                <p className="text-sm text-gray-500">Daily Trips</p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-md">
                <ShieldCheck className="text-brand" size={28} />
                <h3 className="mt-3 text-2xl font-bold">99.9%</h3>
                <p className="text-sm text-gray-500">System Uptime</p>
              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
              alt="Fleet Management"
              className="w-full max-w-2xl rounded-3xl object-cover shadow-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;