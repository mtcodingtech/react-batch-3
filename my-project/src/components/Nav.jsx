import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faReact } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";
import ToggleBtn from "./ToggleBtn";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";

const linkItems = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/hooks",
    name: "Hooks",
  },
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/contact",
    name: "Contact",
  },
  {
    url: "/contact",
    name: "Contact",
  },
];

function Nav() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        background: theme.ui,
        padding: 20,
      }}
    >
      {linkItems.map((linkItem, index) => {
        const { url, name } = linkItem;
        return (
          <Link style={{ color: theme.syntax }} key={index} to={url}>
            {name}
          </Link>
        );
      })}
      {/* <Link to="/">Home</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}
      {/* <FontAwesomeIcon icon={faReact} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faFacebookF} /> */}
      <ToggleBtn />
    </div>
  );
}

export default Nav;
