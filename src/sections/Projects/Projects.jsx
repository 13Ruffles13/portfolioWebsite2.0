import styles from "./ProjectsStyles.module.scss"; // Importing styles for the Projects component
import bartNavigate from "../../assets/bart-navigate.jpg"; // Image for Bart Navigate project
import spaceTravel from "../../assets/space-travel.jpg"; // Image for Space Travel project
import hackOrSnooze from "../../assets/hack-or-snooze.jpg"; // Image for Hack Or Snooze project
import ProjectCard from "../../common/ProjectCard"; // Importing ProjectCard component

/**
 * Projects component displays a list of personal projects with links and descriptions.
 *
 * @returns {JSX.Element} A section containing project cards.
 */
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>{" "}
      {/* Main title for the projects section */}
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bartNavigate} // Image source for the Bart Navigate project
          link="https://13ruffles13.github.io/BARTNavigate/" // URL link to the Bart Navigate project
          h3="Bart Navigate" // Title of the Bart Navigate project
          p="Travel App" // Short description of the Bart Navigate project
        />
        <ProjectCard
          src={spaceTravel} // Image source for the Space Travel project
          link="https://13ruffles13.github.io/Space-travel/" // URL link to the Space Travel project
          h3="Space Travel" // Title of the Space Travel project
          p="Space App" // Short description of the Space Travel project
        />
        <ProjectCard
          src={hackOrSnooze} // Image source for the Hack Or Snooze project
          link="https://13ruffles13.github.io/HackOrSnooze/" // URL link to the Hack Or Snooze project
          h3="Hack Or Snooze" // Title of the Hack Or Snooze project
          p="Articles App" // Short description of the Hack Or Snooze project
        />
      </div>
    </section>
  );
}

export default Projects; // Exporting Projects component for use in other parts of the application
