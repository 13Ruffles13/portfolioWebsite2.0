import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context for theme management
const ThemeContext = createContext();

/**
 * Custom hook to use the ThemeContext.
 *
 * @returns {Object} The current theme and a function to toggle the theme.
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * ThemeProvider component that manages the application's theme state.
 *
 * @param {Object} props - Component properties
 * @param {ReactNode} props.children - Child components that can access the theme context
 *
 * @returns {JSX.Element} The provider wrapping child components with theme context.
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme state from localStorage or default to "light"
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    // Set the theme attribute on the document body
    document.body.setAttribute("data-theme", theme);
    // Store the theme preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
