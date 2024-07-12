import styles from "./SkillsStyles.module.scss"; // Importing styles for the Skills component
import checkMarkDark from "../../assets/checkmark-dark.svg"; // Dark theme checkmark icon
import checkMarkLight from "../../assets/checkmark-light.svg"; // Light theme checkmark icon
import SkillList from "../../common/SkillList"; // Importing SkillList component
import { useTheme } from "../../common/ThemeContext"; // Importing theme context for theme management

/**
 * Skills component displays a list of skills with corresponding checkmark icons.
 *
 * @returns {JSX.Element} A section containing skill lists.
 */
function Skills() {
  const { theme } = useTheme(); // Destructuring theme from context
  const checkMarkIcon = theme === "light" ? checkMarkLight : checkMarkDark; // Select checkmark based on theme

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>

      {/* Programming Languages */}
      <h2>Programming Languages</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Swift" />
      </div>
      <hr />

      {/* Front-End Development */}
      <h2>Front-End Development</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="JavaScript (ES6)" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="jQuery" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="AJAX (REST)" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      <hr />

      {/* Back-End Development */}
      <h2>Back-End Development</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Node.js" />
        <SkillList src={checkMarkIcon} skill="Express.js" />
        <SkillList src={checkMarkIcon} skill="Database Management (SQL)" />
      </div>
      <hr />

      {/* Frameworks and Libraries */}
      <h2>Frameworks and Libraries</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Jasmin" />
        <SkillList src={checkMarkIcon} skill="Babel" />
        <SkillList src={checkMarkIcon} skill="Jest" />
      </div>
      <hr />

      {/* Software Development Fundamentals */}
      <h2>Software Development Fundamentals</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Object-Oriented Programming" />
        <SkillList src={checkMarkIcon} skill="Data Structures and Algorithms" />
        <SkillList src={checkMarkIcon} skill="Version Control (Git)" />
        <SkillList src={checkMarkIcon} skill="Problem Solving" />
        <SkillList src={checkMarkIcon} skill="Agile Methodologies" />
        <SkillList
          src={checkMarkIcon}
          skill="Collaboration and Communication"
        />
      </div>
      <hr />
    </section>
  );
}

export default Skills; // Exporting Skills component for use in other parts of the application
