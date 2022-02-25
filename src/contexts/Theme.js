import React, { createContext, useEffect, useState, useContext} from 'react';

const ThemeContext = createContext();

export const themes = [
  "white-theme",
  "dark-theme"
]

export default function ThemeProvider({children}) {

  const storageTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      return themes[0];
    }
  }

  const [theme, setTheme] = useState(storageTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const {theme, setTheme} = context;
  return {theme, setTheme};
}