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
      <h1 className="sectionTitle">Skills</h1>{" "}
      {/* Main title for the skills section */}
      {/* Skill lists categorized into sections */}
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Angular" />
        <SkillList src={checkMarkIcon} skill="Vue" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux" />
        <SkillList src={checkMarkIcon} skill="Webpack" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Jest" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills; // Exporting Skills component for use in other parts of the application
