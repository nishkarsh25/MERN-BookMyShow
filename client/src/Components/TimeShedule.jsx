import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { slots } from "../data";
import BsContext from "../Context/BsContext";

const TimeShedule = () => {
  const context = useContext(BsContext);

  // Getting time and change time components from the context.
  const { time, changeTime } = context;

  const handleChangeTime = (value) => {
    changeTime(value);

    // Setting slot in localStorage
    window.localStorage.setItem("slot", value);
  };

  
};


