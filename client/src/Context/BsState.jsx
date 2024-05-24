import React, { useState, useEffect } from "react";
import BsContext from "./BsContext";
import axios from 'axios';

const BsState = (props) => {
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [time, changeTime] = useState("");
  const [movie, changeMovie] = useState("");
  const [noOfSeat, changeNoOfSeats] = useState({
    A1: "",
    A2: "",
    A3: "",
    A4: "",
    D1: "",
    D2: "",
  });
  const [lastBookingDetails, setLastBookingDetails] = useState(null);

  const [seat, changeSeats] = useState([]); // Added this line

  const handlePostBooking = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/booking', {
        movie: movie,
        slot: time,
        seats: noOfSeat,
      });
  
      const data = response.data;
      setErrorPopup(true);
      setErrorMessage(data.message);
  
      if (response.status === 200) {
        changeTime("");
        changeMovie("");
        changeNoOfSeats({
          A1: "",
          A2: "",
          A3: "",
          A4: "",
          D1: "",
          D2: "",
        });
        setLastBookingDetails(data.data);
        window.localStorage.clear();
        changeSeats([]); // Reset seat selection here
      }
    } catch (error) {
      setErrorPopup(true);
      setErrorMessage('Failed to book the movie. Please try again.');
      console.error('There was an error booking the movie:', error);
    }
  };

  const handleGetLastBooking = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/booking');
      const data = response.data;
      setLastBookingDetails(data.data);
    } catch (error) {
      console.error('There was an error fetching the last booking details:', error);
    }
  };
  

  useEffect(() => {
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seats"));

    if (movie) {
      changeMovie(movie);
    }
    if (slot) {
      changeTime(slot);
    }
    if (seats) {
      changeNoOfSeats(seats);
    }
  }, []);

  return (
    <BsContext.Provider
      value={{
        handlePostBooking,
        handleGetLastBooking,
        movie,
        changeMovie,
        time,
        changeTime,
        noOfSeat,
        changeNoOfSeats,
        lastBookingDetails,
        errorPopup,
        setErrorPopup,
        errorMessage,
        setErrorMessage,
        seat, // Provide seat state
        changeSeats, // Provide changeSeats function
      }}
    >
      {props.children}
    </BsContext.Provider>
  );
};
export default BsState;
