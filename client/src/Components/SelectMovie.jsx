import React, { useContext } from "react";
import RadioComponent from "./RadioComponent";
import { moviesList } from "../data";
import BsContext from "../Context/BsContext";

const SelectMovie = () => {
  const context = useContext(BsContext);

  // Getting movie and change movie components from the context.
  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);

    // Setting movie in localStorage
    window.localStorage.setItem("movie", value);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Select a Movie</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {moviesList.map((el, index) => (
          <RadioComponent
            text={el}
            changeSelection={handleChangeMovie}
            data={movie}
            key={index}
          />
        ))}
      </div>
    </>
  );
};


