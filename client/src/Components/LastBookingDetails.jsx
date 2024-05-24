import React, { useEffect, useContext } from "react";
import BsContext from "../Context/BsContext";
import { seats } from "../data";

const LastBookingDetails = () => {
  const context = useContext(BsContext);
  const { handleGetLastBooking, lastBookingDetails } = context;

  useEffect(() => {
    handleGetLastBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
};


