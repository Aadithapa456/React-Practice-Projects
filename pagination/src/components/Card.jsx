import React, { useState } from "react";
import Readmore from "./Readmore";

const Card = ({ content }) => {
  const [showReadmore, setShowReadmore] = useState(false);
  const handleReadmore = () => {
    setShowReadmore(true);
  };
  const handleClose = () => {
    setShowReadmore(false);
  };
  return (
    <div className="flex max-w-96 flex-col items-center gap-4 overflow-hidden rounded-lg border border-gray-400">
      <img src={content.image} alt={content.title} />
      <div className="main-content flex flex-col items-center gap-5 px-6 py-2">
        <div className="title text-center text-2xl font-bold">
          {content.title}
        </div>
        <div className="details px-2 text-base text-gray-500">
          {content.description}
        </div>
        <button
          className="mb-4 rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          onClick={handleReadmore}
        >
          Read more
        </button>
      </div>
      {showReadmore && <Readmore content={content} onClose={handleClose} />}
    </div>
  );
};

export default Card;
