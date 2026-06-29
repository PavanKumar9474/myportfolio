import "../styles/Hero.css";

import profile from "../assets/profile.jpeg";

import { Typewriter } from "react-simple-typewriter";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPaperPlane,
  FaDownload
} from "react-icons/fa";

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
          initial={{ opacity:0,x:-80 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
        >

          <h3>Hello, I'm</h3>

          <h1>A Pavan Kumar</h1>

          <h2>

            <Typewriter

              words={[
                "Full Stack Developer",
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

          <p>

            I build responsive web applications using
            ReactJS, FastAPI and PostgreSQL.

            Passionate about coding and solving
            real-world problems.

          </p>

          <div className="socials">

            <a href="https://github.com/PavanKumar9474">
              <FaGithub/>
            </a>

            <a href="https://www.linkedin.com/in/a-pavan-kumar-reddy-b2a431300/">
              <FaLinkedin/>
            </a>

            <a href="mailto:pavanharsha2004@gmail.com">
              <FaEnvelope/>
            </a>

          </div>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              className="btn primary"
            >

              <FaDownload/>

              Download Resume

            </a>

            <a
              href="#contact"
              className="btn secondary"
            >

              Available for Intership

              <FaPaperPlane/>

            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-right"
          initial={{ opacity:0,x:80 }}
          animate={{ opacity:1,x:0 }}
          transition={{ duration:1 }}
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