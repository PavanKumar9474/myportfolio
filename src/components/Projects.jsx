import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-subtitle">My Work</div>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
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
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
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