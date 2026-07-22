import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDownload
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";
import about from "../assets/about.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        {/* Left */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={about} alt="about" />
        </motion.div>

        {/* Right */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-subtitle">Who Am I?</div>
          <h2 className="section-title">About Me</h2>

          <p>{personalInfo.bio}</p>

          <div className="info-grid">
            <div className="info-card">
              <FaUser />
              <div>
                <h5>Name</h5>
                <p>{personalInfo.name}</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h5>Email</h5>
                <p>{personalInfo.email}</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h5>Location</h5>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="info-card">
              <FaBriefcase />
              <div>
                <h5>Availability</h5>
                <p>{personalInfo.availability}</p>
              </div>
            </div>
          </div>

          <a href={personalInfo.resume} download className="resume-btn">
            <FaDownload />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;