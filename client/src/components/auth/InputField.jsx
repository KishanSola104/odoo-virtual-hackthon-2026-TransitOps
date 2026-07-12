import React from "react";

function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = true,
}) {
  return (
    <div className="mb-5">

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          text-gray-800
          placeholder:text-gray-400
          outline-none
          transition-all
          duration-300
          focus:border-brand
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  );
}

export default InputField;