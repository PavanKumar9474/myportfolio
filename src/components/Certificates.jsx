import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { certificates } from "../data/portfolioData";

function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-subtitle">Achievements</div>
        <h2 className="section-title">Certificates</h2>

        <div className="certificate-grid">
          {certificates.map((item, index) => (
            <motion.div
              key={index}
              className="certificate-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <FaAward className="award" />
              <h3>{item.title}</h3>
              <p>{item.provider}</p>
              <span>{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;