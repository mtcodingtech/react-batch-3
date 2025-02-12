import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div style={{display: "flex", gap: 20}}>
      <Link to="/">Home</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Nav;
