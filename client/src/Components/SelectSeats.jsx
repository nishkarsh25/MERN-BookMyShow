import React, { useContext } from "react";
import { seats } from "../data";
import BsContext from "../Context/BsContext";
import SeatsInput from "./SeatsInput";

const SelectSeats = () => {
  const context = useContext(BsContext);
  const { noOfSeat, changeNoOfSeats, seat, changeSeats } = context;

  return (
    
  );
};


