import React from "react";

const Button = ({ label, onClick, className }) => {
  return (
    <>
      <button
        className={`bg-gray-500 py-4 px-8 text-lg text-white rounded-lg shadow-lg mt-4 transition duration-300 ease-in-out transform hover:bg-gray-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
