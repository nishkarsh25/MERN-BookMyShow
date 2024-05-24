import LastBookingDetails from "../Components/LastBookingDetails";
import SelectMovie from "../Components/SelectMovie";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import Modal from "../Components/ModalComponent";
import BsContext from "../Context/BsContext";
import { useContext } from "react";

const Home = () => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }
    return false;
  };

  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      setErrorPopup(true);
      setErrorMessage("Invalid Seats!");
    } else {
      handlePostBooking();
    }
  };

  return (
    <>
      <Modal />
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 min-h-screen flex flex-col justify-center items-center">
        <div className="container mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Book Your Movie Tickets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
              <SelectMovie />
            </div>
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
              <LastBookingDetails />
            </div>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-md mt-8">
            <TimeShedule />
            <SelectSeats />
            <button
              onClick={handleBookNow}
              className="w-full py-3 mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-md shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
