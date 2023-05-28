import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const Context = () => {
  const useTheme = useContext(ThemeContext);
  console.log(useTheme);
  const { theme, mode, setMode } = useTheme;

  return (
    <div style={{ background: theme?.background?.main }}>
      <h1 style={{ color: theme?.background?.text }}>Context</h1>
      <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        toggle theme
      </button>
    </div>
  );
};

export default Context;
