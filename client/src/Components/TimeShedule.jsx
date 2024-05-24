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

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center my-8 text-gradient bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">Select a Schedule</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {slots.map((el, index) => (
            <RadioComponent
              text={el}
              changeSelection={handleChangeTime}
              data={time}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};


