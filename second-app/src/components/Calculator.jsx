import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = () => {
  return (
    <div className="bg-gray-200 p-4 flex max-w-96 m-auto justify-center items-center flex-col rounded-lg shadow-xl">
      <Display />
      <Buttons />
    </div>
  );
};

export default Calculator;
