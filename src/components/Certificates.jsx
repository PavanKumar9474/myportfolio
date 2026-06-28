import "../styles/Certificates.css";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaAward
} from "react-icons/fa";

const certificates = [
  {
    title: "Web Development Intership",
    provider: "Vaultsphere",
    year: "2026",
  },
  {
    title: "Advanced Python Programming Workshop",
    provider: "Coding Club",
    year: "2025",
  },
  {
    title: "PowerBI Workshop",
    provider: "OfficeMaster",
    year: "2025",
  },
  {
    title: "HTML & CSS",
    provider: "cursa",
    year: "2025",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates">

      <div className="container">

        <h4>Achievements</h4>

        <h2>Certificates</h2>

        <div className="certificate-grid">

          {certificates.map((item,index)=>(

            <motion.div
              key={index}
              className="certificate-card"
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.2}}
              viewport={{once:true}}
            >

              <FaAward className="award"/>

              <h3>{item.title}</h3>

              <p>{item.provider}</p>

              <span>{item.year}</span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certificates;