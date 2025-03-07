import React, { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import Place from "./Place";

function RandomPlace() {
    
  const places = useSelector((state) => state.places);

  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length) + 1;
    const randomPlace = places[randomIndex - 1];
  };
  return (
    <>
      <Button text="Suggest random place" clickEvent={getRandomPlace} />
    </>
  );
}

export default RandomPlace;
