import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React JS", level: 90 },
  { name: "Python", level: 95 },
  { name: "FastAPI", level: 90 },
  { name: "PostgreSQL", level: 85 },
  { name: "Git & GitHub", level: 85 },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h4>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
            >

              <div className="skill-title">

                <span>{skill.name}</span>

                <span>{skill.level}%</span>

              </div>

              <div className="progress">

                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;