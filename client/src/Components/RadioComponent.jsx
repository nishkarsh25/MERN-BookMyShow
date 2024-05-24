import React from "react";

// This is the radio component which is used for selecting movie and slot.
const RadioComponent = ({ text, changeSelection, data }) => {
  // Changing selected data from the user.
  const handleChecked = (value) => {
    changeSelection(value);
  };

  return (
    <div
      className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
        data === text
          ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white border-green-700 shadow-lg"
          : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-white"
      }`}
      onClick={() => {
        handleChecked(text);
      }}
    >
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};


