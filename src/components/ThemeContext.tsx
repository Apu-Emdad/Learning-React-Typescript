import React, { createContext, useState } from "react";
import { theme } from "./theme";

export type Theme = {
  theme: {
    primary: {
      main: string;
      text: string;
    };
    secondary: {
      main: string;
      text: string;
    };
    background: {
      main: string;
      text: string;
    };
  };
  setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  mode: "dark" | "light";
};

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Theme>({} as Theme); // Use the Theme type
console.log(ThemeContext);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const useTheme = theme(mode);
  return (
    <ThemeContext.Provider
      value={{ theme: useTheme, setMode: setMode, mode: mode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
