import React from "react";

function Place({ place }) {
  const { name, description, image, visited } = place;
  return (
    <>
      <img src={image} alt="img" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>{visited ? "visited" : "not visited"}</h2>
    </>
  );
}

export default Place;
