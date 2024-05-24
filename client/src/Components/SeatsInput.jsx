import React from "react";

const SeatsInput = ({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
}) => {
  const changeSeatsHandler = (e) => {
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
      })
    );
  };

  const handleChecked = (text) => {
    changeSeats(text);
  };

  return (
    <div
      className={`p-4 m-2 rounded-lg border transition-all duration-300 cursor-pointer ${
        seat === text
          ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white border-green-700 shadow-lg"
          : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-gray-300 hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:text-white"
      }`}
      onClick={() => {
        handleChecked(text);
      }}
    >
      <span className="text-lg font-semibold block mb-2">{text}</span>
      <div className="flex items-center">
        <input
          type="number"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-red-800 placeholder-red-500"
          placeholder="0"
          name={text}
          min="0"
          max="30"
          onChange={changeSeatsHandler}
          value={noOfSeat[text]}
        />
      </div>
    </div>
  );
};


