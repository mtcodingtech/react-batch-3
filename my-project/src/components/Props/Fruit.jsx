import React from "react";

function Fruit({ name, children }) {
  return (
    <>
      <h3>{name}</h3>
      {children}
    </>
  );
}

export default Fruit;
