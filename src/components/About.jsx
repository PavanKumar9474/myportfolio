import "../styles/About.css";
import about from "../assets/about.png";

import { motion } from "framer-motion";

import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaDownload
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="container about-container">

        {/* Left */}

        <motion.div
          className="about-image"
          initial={{ opacity:0,x:-100 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
        >

          <img src={about} alt="about" />

        </motion.div>

        {/* Right */}

        <motion.div
          className="about-content"
          initial={{ opacity:0,x:100 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
          viewport={{ once:true }}
        >

          <h4>Who Am I?</h4>

          <h2>About Me</h2>

          <p>

            I'm <strong>Pavan Kumar</strong>, a Python Full Stack Developer
            passionate about building scalable web applications using
            React, FastAPI, PostgreSQL, HTML, CSS and JavaScript.

          </p>

          <p>

            I enjoy solving real-world problems through clean code,
            responsive interfaces, and efficient backend systems.
            I'm continuously learning new technologies to become
            a better software engineer.

          </p>

          <div className="info-grid">

            <div className="info-card">
              <FaUser />
              <div>
                <h5>Name</h5>
                <p>Pavan Kumar</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h5>Email</h5>
                <p>pavan@example.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h5>Location</h5>
                <p>India</p>
              </div>
            </div>

            <div className="info-card">
              <FaBriefcase />
              <div>
                <h5>Availability</h5>
                <p>Open to Work</p>
              </div>
            </div>

          </div>

          <a href="/resume.pdf" className="resume-btn">

            <FaDownload />

            Download Resume

          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default About;