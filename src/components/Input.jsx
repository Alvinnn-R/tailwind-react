import React from "react";

export default function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className="w-full transition duration-200 border-gray-300 shadow-sm rounded-xl focus:ring focus:ring-indigo-100 focus:border-indigo-400"
    />
  );
}
