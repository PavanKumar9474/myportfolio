import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-subtitle">Professional Journey</div>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaBriefcase />
              </div>

              <div className="timeline-content">
                <span>{item.duration}</span>
                <h3>{item.title}</h3>
                <h5>{item.company}</h5>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;