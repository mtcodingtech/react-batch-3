import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });
  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });
  const theme = isLightTheme ? light : dark;
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
