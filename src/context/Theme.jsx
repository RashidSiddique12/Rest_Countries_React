import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [backgroundMode, setBackgroundMode] = useState("whiteGrey");
  const [elementMode, setElementMode] = useState("white");

  return (
    <ThemeContext.Provider
      value={{ backgroundMode, setBackgroundMode, elementMode, setElementMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default function useTheme() {
  return useContext(ThemeContext);
}
