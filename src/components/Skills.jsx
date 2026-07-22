import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          My Expertise
        </motion.div>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="skill-title">
                <span>{skill}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;