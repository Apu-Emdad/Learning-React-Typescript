import React, { createContext, useState } from "react";
import { theme } from "./theme";
import type { Theme } from "./theme"; // Import the Theme type

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Theme | null>(null); // Use the Theme type
console.log(ThemeContext);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState("light");
  const useTheme = theme(mode);
  return (
    <ThemeContext.Provider
      value={{ theme: useTheme, setMode: setMode, mode: mode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
