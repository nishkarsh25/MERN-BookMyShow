import React, { useContext } from "react";
import { seats } from "../data";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats, seat, changeSeats } = context;

  return (
    <div className="SS_wrapper p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-gradient bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Select Seats</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {seats.map((el, index) => (
          <SeatsInput
            seat={seat}
            key={index}
            changeSeats={changeSeats}
            noOfSeat={noOfSeat}
            text={el}
            changeNoOfSeats={changeNoOfSeats}
          />
        ))}
      </div>
    </div>
  );
};


