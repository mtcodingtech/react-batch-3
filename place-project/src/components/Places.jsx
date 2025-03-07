import React from "react";
import { data } from "../data";
import Place from "./Place";
import { useSelector } from "react-redux";

function Places() {
  const places = useSelector((state) => state.places);
  return (
    <>
      {places.map((place, index) => {
        return (
          <React.Fragment key={index}>
            <Place place={place} />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Places;
