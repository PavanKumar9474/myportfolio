import "../styles/Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institute: "Your College Name",
    year: "2023 - 2027",
    description:
      "Currently pursuing B.Tech in Computer Science with strong interest in Full Stack Development.",
  },
  {
    degree: "Intermediate",
    institute: "Your Junior College",
    year: "2021 - 2023",
    description:
      "Completed Intermediate with Mathematics, Physics and Chemistry.",
  },
  {
    degree: "SSC",
    institute: "Your School",
    year: "2020 - 2021",
    description:
      "Completed Secondary School Education.",
  },
];

function Education() {
  return (
    <section id="education" className="education">

      <div className="container">

        <h4>Academic Journey</h4>

        <h2>Education</h2>

        <div className="timeline">

          {education.map((item, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6, delay: index * .2 }}
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