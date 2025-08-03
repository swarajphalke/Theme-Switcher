// src/context/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { themes, ThemeConfig } from "../styles/themes";

export type ThemeType = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: ThemeType;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "theme1",
  themeConfig: themes.theme1,
  setTheme: () => {},
  isTransitioning: false,
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeType>("theme1");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeType;
    if (savedTheme && themes[savedTheme]) setThemeState(savedTheme);
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setThemeState(newTheme);
      localStorage.setItem("theme", newTheme);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 150);
  };

  const themeConfig = themes[theme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeConfig,
        setTheme,
        isTransitioning,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      <div
        className={`${themeConfig.layout} transition-all duration-500 ${
          isTransitioning ? "opacity-90" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
