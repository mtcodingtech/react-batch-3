import React from "react";
import { Link } from "react-router-dom";

function Hooks() {
  return (
    <>
      <ul>
        <li>
          <Link to="/hooks/useState">useState</Link>
        </li>
        <li>
          <Link to="/hooks/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/hooks/useRef">useRef</Link>
        </li>
      </ul>
    </>
  );
}

export default Hooks;
