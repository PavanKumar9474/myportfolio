import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "Python" },
  { name: "FastAPI" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "SQLAlchemy" },
  { name: "REST APIs" },
  { name: "JWT Authentication" },
  { name: "Docker" },
  { name: "Git" },
  { name: "GitHub Actions" },
  { name: "OpenAI API" },
  { name: "Google Gemini API" },
  { name: "Machine Learning Basics" },
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

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;