import styles from "./ProjectsStyles.module.scss";
import viberr from "../../assets/viberr.png";
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/13Ruffles13/BARTNavigate"
          h3="Bart Navigate"
          p="Travel App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/13Ruffles13/Space-travel"
          h3="Space Travel"
          p="Space App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/13Ruffles13/HackOrSnooze"
          h3="Hack Or Snooze"
          p="Articles App"
        />
      </div>
    </section>
  );
}

export default Projects;
