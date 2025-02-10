import React from "react";
import logo from "../assets/react.svg";
import { logoStyle } from "../helpers/style";

function Logo() {
  return (
    <>
      <img src={logo} alt="img" />
      <img
        style={logoStyle}
        src="https://images.pexels.com/photos/29709071/pexels-photo-29709071/free-photo-of-frosty-winter-landscape-in-bosnia-and-herzegovina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="img"
      />
    </>
  );
}

export default Logo;
