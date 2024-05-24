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
        <>
          <div className="mb-6">
            <p className="text-lg font-semibold mb-2 text-white">Seats:</p>
            <ul className="flex flex-wrap">
              {seats.map((seat, index) => (
                <li className="bg-blue-500 text-white rounded-md py-2 px-4 mr-4 mb-4" key={index}>
                  {seat}: <span className="font-semibold">{Number(lastBookingDetails.seats[seat])}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg font-semibold mb-4 text-white">Slot: <span className="font-normal">{lastBookingDetails.slot}</span></p>
          <p className="text-lg font-semibold text-white">Movie: <span className="font-normal">{lastBookingDetails.movie}</span></p>
        </>
      ) : (
        <p className="text-lg text-white">No Previous Booking Found!</p>
      )}
    </div>
  );
};


