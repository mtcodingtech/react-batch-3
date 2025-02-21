import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { TitleContext } from "./ComponentA";

function ComponentC() {
  const { title } = useContext(TitleContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h5>{title}</h5>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
