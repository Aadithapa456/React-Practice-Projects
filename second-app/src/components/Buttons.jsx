import React from "react";
import Button from "./Button";
const buttonLabels = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "C",
  "0",
  "=",
  "+",
];
// const functionalButtons = ["C", "-", "+", "="];
const primaryButtons = ["="];
const secondaryButton = ["+", "-", "/", "*"];
const specialButton = ["C"];
const specialButtons = {
  primaryButtons: {
    labels: ["="],
    className: "bg-green-600 hover:bg-green-700 text-white",
  },
  secondaryButton: {
    labels: ["+", "-", "/", "*"],
    className: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  specialButton: {
    labels: ["C"],
    className: "bg-gray-600 hover:bg-gray-700 text-white",
  },
};
const Buttons = () => {
  const onButtonClick = (label) => {
    console.log(label.target.textContent);
  };
  const getClassName = (label) => {
    for (const type in specialButtons) {
      if (specialButtons[type].labels.includes(label)) {
        return specialButtons[type].className;
      }
    }
  };
  return (
    <div className="grid grid-cols-4 gap-2 py-4">
      {buttonLabels.map((label) => {
        return (
          <Button
            key={label}
            label={label}
            className={getClassName(label)}
            onClick={(label) => onButtonClick(label)}
          />
        );
      })}
    </div>
  );
};

export default Buttons;
