import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
}

export default Nav;
