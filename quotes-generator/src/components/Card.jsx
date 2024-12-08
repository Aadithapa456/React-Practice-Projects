import React from "react";
import Quote from "./Quote";
import Footer from "./Footer";

const Card = ({ data, onCategoryChange, onNewQuote }) => {
  return (
    <div className="bg-white  rounded-lg shadow-md w-[45rem]">
      <div className="title text-center font-bold py-6 text-2xl px-2 ">Quote of the Day</div>
      <Quote quote={data} />
      <Footer onCategoryChange={onCategoryChange} onNewQuote={onNewQuote} />
    </div>
  );
};

export default Card;
