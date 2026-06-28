import "../styles/Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experience = [
  {
    title: "Python Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    description:
      "Developed full-stack applications using ReactJS, FastAPI, PostgreSQL, JWT Authentication, REST APIs, Git and GitHub.",
  },
  {
    title: "Frontend Developer",
    company: "React Practice",
    duration: "2024 - 2025",
    description:
      "Built responsive websites using ReactJS, JavaScript, HTML5, CSS3 and modern UI design principles.",
  },
  {
    title: "Fontend web Developer",
    company: "Mini Projects",
    duration: "2024",
    description:
      "Created a Mini Projects By HTML , CSS , JS.",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="container">

        <h4>Professional Journey</h4>

        <h2>Experience</h2>

        <div className="timeline">

          {experience.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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