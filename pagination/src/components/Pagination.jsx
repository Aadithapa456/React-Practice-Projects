import React from "react";

const Pagination = ({ onClick }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <button
          className="mt-4 rounded-lg bg-blue-500 px-8 py-2 text-base text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          onClick={() => onClick("prev")}
        >
          Prev
        </button>
        <button
          className="mt-4 rounded-lg bg-green-500 px-8 py-2 text-base text-white shadow-md transition duration-300 hover:bg-green-700 hover:shadow-lg"
          onClick={() => onClick("next")}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
