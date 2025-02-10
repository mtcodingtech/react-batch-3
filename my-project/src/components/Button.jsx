import React from "react";
import { btnStyle } from "../helpers/style";

function Button({ isMobile }) {
  console.log(isMobile); // undefined
  const btnText = isMobile ? "Mobile Button" : "Dektop Button";

  const handleClick = () => {
    alert("Hello");
  };
  return (
    <>
      {/* <button style={btnStyle(isMobile)} onClick={handleClick()}> // immediate
      {btnText}
    </button> */}
      {/* <button style={btnStyle(isMobile)} onClick={() => handleClick()}>
      {btnText}
    </button> */}

      <button style={btnStyle(isMobile)} onClick={handleClick}>
        {btnText}
      </button>
    </>
  );
}

export default Button;
