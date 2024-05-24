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

  
  

  

  
};

