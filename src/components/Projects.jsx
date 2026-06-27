import "../styles/Projects.css";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import hospital from "../assets/hospital.png";
import hostel from "../assets/hostel.png";
import exam from "../assets/exam.png";

const projects = [
  {
    title: "Hospital Management System",
    image: hospital,
    description:
      "A full-stack hospital management system with patient registration, doctor appointments, authentication and admin dashboard.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "JWT"
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Hostel Complaint System",
    image: hostel,
    description:
      "Students can register complaints, administrators can assign rooms and resolve complaints with authentication.",
    technologies: [
      "React",
      "FastAPI",
      "SQLite"
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Smart Exam Navigation",
    image: exam,
    description:
      "Students can locate their examination hall, room and bench using hall ticket number with QR code support.",
    technologies: [
      "React",
      "FastAPI",
      "PostgreSQL"
    ],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="container">

        <h4>My Work</h4>

        <h2>Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .2 }}
              viewport={{ once: true }}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.technologies.map((tech, i) => (

                    <span key={i}>{tech}</span>

                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;