import React, { createContext, useContext } from "react";
import ComponentB from "./ComponentB";
import { ThemeContext } from "../../../context/ThemeContext";

export const TitleContext = createContext();

function ComponentA() {
  const themeValues = useContext(ThemeContext);
  console.log("CA", themeValues);
  return (
    <div className="box">
      <h1>Component A</h1>
      <TitleContext.Provider value={{ title: "Hello MT", color: "red" }}>
        <ComponentB />
      </TitleContext.Provider>
    </div>
  );
}

export default ComponentA;
