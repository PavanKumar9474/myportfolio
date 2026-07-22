import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();
  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <footer className="footer">
      <div className="container footer-container">
        <h2>
          {firstName} <span>{lastName}</span>
        </h2>

        <p>{personalInfo.bio}</p>

        <div className="footer-icons">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href={`mailto:${personalInfo.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="copyright">
          Made with <FaHeart className="heart" /> by {personalInfo.name}
          <br />
          © {year} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;