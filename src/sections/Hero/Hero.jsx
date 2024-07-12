import styles from "./HeroStyles.module.scss";
import heroImg from "../../assets/Rafael_A_AI-2-bg.png"; // Importing hero image
import sun from "../../assets/sun.svg"; // Light theme icon
import moon from "../../assets/moon.svg"; // Dark theme icon
import twitterLight from "../../assets/twitter-light.svg"; // Twitter icon for light theme
import twitterDark from "../../assets/twitter-dark.svg"; // Twitter icon for dark theme
import githubLight from "../../assets/github-light.svg"; // GitHub icon for light theme
import githubDark from "../../assets/github-dark.svg"; // GitHub icon for dark theme
import linkedinLight from "../../assets/linkedin-light.svg"; // LinkedIn icon for light theme
import linkedinDark from "../../assets/linkedin-dark.svg"; // LinkedIn icon for dark theme
import { useTheme } from "../../common/ThemeContext"; // Importing theme context

/**
 * Hero component displays a personal introduction and links to social profiles.
 *
 * @returns {JSX.Element} A section containing profile picture, theme toggle, and social links.
 */
function Hero() {
  const { theme, toggleTheme } = useTheme(); // Using theme context to access theme state

  // Select the appropriate icons based on the current theme
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Rafael Alvarado"
        />
        <img
          className={styles.colorMode}
          src={themeIcon} // Icon to toggle between light and dark mode
          alt="Color mode icon"
          onClick={toggleTheme} // Toggle theme on click
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rafael
          <br />
          Alvarado
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a
            href="https://x.com/13Ruffles13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://github.com/13Ruffles13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-alvarado-jr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          Driven by a passion for crafting innovative software solutions that
          empower businesses of all sizes to thrive.
        </p>
        <a
          href="https://docs.google.com/document/d/1QHODFAU3nWyLKzxQO9gzjVjnbYhu3GfBXFsVpgxoIes/export?format=pdf"
          download
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
