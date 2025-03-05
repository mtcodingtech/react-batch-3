import React from "react";
import Heading from "../components/Heading";
import Places from "../components/Places";

function PlacesList() {
  return (
    <div className="p-10">
      <Heading title="Historical Places" />
      <Heading title="All Historical Places" />
      <div className="grid grid-cols-3 gap-10 mt-4">
        <Places />
      </div>
    </div>
  );
}

export default PlacesList;
