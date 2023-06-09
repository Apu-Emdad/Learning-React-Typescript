export type Theme = {
  theme: {
    primary: {
      main: string,
      text: string,
    },
    secondary: {
      main: string,
      text: string,
    },
    background: {
      main: string,
      text: string,
    },
  },
  setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>,
  mode: "dark" | "light",
};

export const theme = (mode = "light") => {
  const commonColors = {
    primary: {
      main: "#3f51b5",
      text: "#fff",
    },
    secondary: {
      main: "#f50057",
      text: "#fff",
    },
  };

  if (mode === "dark") {
    return {
      ...commonColors,
      background: {
        main: "#1f1f1f",
        text: "#fff",
      },
      // Add more color values specific to dark mode
    };
  } else if (mode === "light") {
    return {
      ...commonColors,
      background: {
        main: "#fff",
        text: "#000",
      },
      // Add more color values specific to light mode
    };
  }

  // Return default theme (e.g., light mode)
  return {
    ...commonColors,
    background: {
      main: "#fff",
      text: "#000",
    },
    // Add more color values for default mode
  };
};

export const gopiTheme= {
  primary: {
    main: '#3f51b5',
    text: '#fff'
  },
  secondary: {
    main: '#f50057',
    text: '#fff'
  }
}