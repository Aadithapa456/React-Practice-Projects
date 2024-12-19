import React from "react";

const SelectInput = ({ name, onChange, options }) => {
  return (
    <div className="mb-4">
      <select
        name={name}
        onChange={onChange}
        className="mt-1 block w-full rounded-md border-0 border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
