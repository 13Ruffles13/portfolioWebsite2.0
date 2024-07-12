import "./App.scss"; // Importing global styles for the application
import Hero from "./sections/Hero/Hero"; // Importing Hero section
import Projects from "./sections/Projects/Projects"; // Importing Projects section
import Skills from "./sections/Skills/Skills"; // Importing Skills section
import Contact from "./sections/Contact/Contact"; // Importing Contact section
import Footer from "./sections/Footer/Footer"; // Importing Footer section

/**
 * App component serves as the main entry point for the application.
 * It organizes and renders the main sections of the webpage in order.
 *
 * @returns {JSX.Element} The main application layout.
 */
function App() {
  return (
    <>
      <Hero /> {/* Hero section displaying introductory content */}
      <Projects /> {/* Projects section showcasing project work */}
      <Skills /> {/* Skills section listing technical skills */}
      <Contact /> {/* Contact section for user interaction */}
      <Footer /> {/* Footer section with copyright information */}
    </>
  );
}

export default App; // Exporting App component for use in index.js
