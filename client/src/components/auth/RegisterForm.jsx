import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import InputField from "./InputField";

function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);

    // POST /api/auth/register
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto"
    >
      <h2 className="mb-2 text-center font-display text-2xl sm:text-3xl font-bold text-gray-800">
        Create Account
      </h2>

      <p className="mb-8 text-center text-sm text-gray-500">
        Fill in your details to create your account.
      </p>

      {/* Name & Phone */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />

        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
        />

      </div>

      {/* Email & Role */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />

        <div>

          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-brand
              focus:ring-4
              focus:ring-blue-100
            "
          >
            <option value="">Select Role</option>
            <option value="fleet_manager">Fleet Manager</option>
            <option value="driver">Driver</option>
            <option value="safety_officer">Safety Officer</option>
            <option value="finance_officer">Finance Officer</option>
          </select>

        </div>

      </div>

      {/* Password */}

      <div className="mt-2">

        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="relative">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              pr-12
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-brand
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Confirm Password */}

      <div className="mt-5">

        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Confirm Password
        </label>

        <div className="relative">

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              px-4
              py-3
              pr-12
              text-sm
              outline-none
              transition-all
              duration-300
              focus:border-brand
              focus:ring-4
              focus:ring-blue-100
            "
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand"
          >
            {showConfirmPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

      </div>

      {/* Submit Button */}

      <button
        type="submit"
        className="
          mt-8
          w-full
          rounded-xl
          bg-brand
          py-3.5
          text-base
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-brand-dark
          hover:shadow-lg
          active:scale-[0.98]
        "
      >
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;