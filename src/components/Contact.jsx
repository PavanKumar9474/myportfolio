import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements["name"]?.value?.trim();
    const email = form.elements["email"]?.value?.trim();
    const subject = form.elements["subject"]?.value?.trim();
    const message = form.elements["message"]?.value?.trim();

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    alert(`New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
    form.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-subtitle">Let's Connect</div>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone />
              <div>
                <h3>Phone</h3>
                <p>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>

            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              name="message"
              required
            />
            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
