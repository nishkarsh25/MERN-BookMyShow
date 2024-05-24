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

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6">Last Booking Details:</h2>
      {lastBookingDetails ? (
        
      ) : (
        
      )}
    </div>
  );
};


