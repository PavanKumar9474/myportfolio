import "../styles/Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container footer-container">

        <h2>
          Pavan <span>Kumar</span>
        </h2>

        <p>
          Python Full Stack Developer passionate about building modern,
          scalable and responsive web applications.
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/PavanKumar9474"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/a-pavan-kumar-reddy-b2a431300/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:pavanharsha2004@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <ul className="footer-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="copyright">

          Made with <FaHeart className="heart"/> by Pavan Kumar

          <br />

          © {year} All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;