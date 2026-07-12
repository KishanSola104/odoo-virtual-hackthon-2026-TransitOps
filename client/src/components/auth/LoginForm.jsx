import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import InputField from "./InputField";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Backend API
    // POST /api/auth/login
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <h2 className="mb-6 text-center font-display text-2xl sm:text-3xl font-bold text-gray-800">
        Sign In
      </h2>

      <InputField
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
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

      <button
        type="submit"
        className="
      w-full
      rounded-xl
      bg-brand
      py-3.5
      font-semibold
      text-white
      transition-all
      duration-300
      hover:bg-brand-dark
      hover:shadow-lg
    "
      >
        Sign In
      </button>
    </form>
  );
}

export default LoginForm;
