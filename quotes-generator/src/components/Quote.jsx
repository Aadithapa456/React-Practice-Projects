import React from "react";

const Quote = ({ quote }) => {
  console.log(quote);
  return (
    <>
      <div className="quote-container flex flex-wrap justify-center items-center gap-3 mt-20">
        <i className="fa-solid fa-quote-left self-start" aria-hidden="true"></i>
        <div className="quote text-xl">{quote.length > 0 ? quote[0].quote : "Loading"}</div>
        <i className="fa-solid fa-quote-right self-end" aria-hidden="true"></i>
      </div>
      <div className="quote-author flex justify-end items-center px-4 mt-2 mx-4">
        - {quote.length > 0 ? quote[0].author : " "}
      </div>
    </>
  );
};

export default Quote;
