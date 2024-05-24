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

  
};


