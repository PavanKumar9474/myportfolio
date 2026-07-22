import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-subtitle">Academic Journey</div>
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item, index) => (
            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>

              <div className="timeline-content">
                <span>{item.year}</span>
                <h3>{item.degree}</h3>
                <h5>{item.institute}</h5>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;