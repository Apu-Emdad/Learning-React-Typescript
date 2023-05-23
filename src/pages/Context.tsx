import React, { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { Theme } from "../components/theme";

const Context = () => {
  const useTheme = useContext(ThemeContext);
  console.log(useTheme);
  const { theme, mode, setMode } = useTheme as Theme;

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
