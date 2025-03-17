import React, { useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import Place from "./Place";

function RandomPlace() {
  const [randomPlaceId, setRandomPlaceId] = useState(null);

  const places = useSelector((state) => state.places);

  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    const randomPlaceItem = places[randomIndex];
    setRandomPlaceId(randomPlaceItem.id);
  };
  
  const randomPlace = randomPlaceId
    ? places.find((place) => place.id === randomPlaceId)
    : null;
 
  return (
    <>
      <Button text="Suggest random place" clickEvent={getRandomPlace} />
      {randomPlace && <Place place={randomPlace} />}
    </>
  );
}

export default RandomPlace;
