import React from "react";

const Footer = ({ onCategoryChange, onNewQuote }) => {
  const handleSelectChange = (event) => {
    console.log("Category is changed to ", event.target.value);
    onCategoryChange(event.target.value);
  };
  return (
    <div className="footer flex justify-evenly mt-20 mb-5 border-t py-4 ">
      <button>
        <i className="fa-solid fa-copy" aria-hidden="true"></i>
      </button>
      <select onChange={handleSelectChange}>
        <option value="Architecture">Architecture</option>
        <option value="Friendship">Friendship</option>
        <option value="Health">Health</option>
      </select>
      <button
        className="bg-blue-400 py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300"
        onClick={onNewQuote}
      >
        New Quote
      </button>
    </div>
  );
};

export default Footer;