import React from "react"; // Import React library
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering
import App from "./App.jsx"; // Import the main App component
import "./index.scss"; // Import global styles
import { ThemeProvider } from "./common/ThemeContext.jsx"; // Import ThemeProvider for theme context

// Create a root DOM element and render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Activate strict mode for highlighting potential issues */}
    <ThemeProvider>
      {" "}
      {/* Provide theme context to the application */}
      <App /> {/* Render the main App component */}
    </ThemeProvider>
  </React.StrictMode>
);
