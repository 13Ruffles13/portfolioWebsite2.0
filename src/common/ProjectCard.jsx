import React from "react";

/**
 * ProjectCard component displays a project card with an image, title, and description.
 *
 * @param {Object} props - Component properties
 * @param {string} props.src - URL of the project logo/image
 * @param {string} props.link - URL to navigate to when the card is clicked
 * @param {string} props.h3 - Title of the project
 * @param {string} props.p - Description of the project
 *
 * @returns {JSX.Element} A clickable project card containing an image and text.
 */
function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
