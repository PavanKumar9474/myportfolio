import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaDownload
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";
import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="floating one"></div>
      <div className="floating two"></div>
      <div className="floating three"></div>
      <div className="floating four"></div>
      <div className="floating five"></div>

      <div className="container hero-container">
        {/* Left */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Hello, I'm</h3>
          <h1>{personalInfo.name}</h1>
          <h2>
            <Typewriter
              words={[
                personalInfo.role,
                "React Developer",
                "FastAPI Developer",
                "Problem Solver"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
            />
          </h2>
          <p>{personalInfo.bio}</p>

          <div className="socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>

          <div className="hero-buttons">
            <a
              href={personalInfo.resume}
              download
              className="btn primary"
            >
              <FaDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn secondary"
            >
              Available for Internship
              <FaPaperPlane />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="profile-circle">
            <img
              src={profile}
              alt="profile"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;