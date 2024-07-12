import React from "react";

/**
 * SkillList component displays a skill with an associated icon.
 *
 * @param {Object} props - Component properties
 * @param {string} props.src - URL of the icon image for the skill (e.g., checkmark)
 * @param {string} props.skill - The name or description of the skill
 *
 * @returns {JSX.Element} A span containing an icon and the skill description.
 */
function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
