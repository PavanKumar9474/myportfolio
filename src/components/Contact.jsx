import "../styles/Contact.css";

import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaGithub,
FaLinkedin
} from "react-icons/fa";

function Contact(){

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

    // Notify you (as requested): show the submitted details.
    alert(`New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);

    // Optional: reset the form after notifying.
    form.reset();
  };

return(

<section id="contact" className="contact">

<div className="container">

<h4>Let's Connect</h4>

<h2>Contact Me</h2>

<div className="contact-container">

<div className="contact-info">

<div className="contact-card">

<FaEnvelope/>

<div>

<h3>Email</h3>

<p>pavanharsha2004@gmail.com</p>

</div>

</div>

<div className="contact-card">

<FaPhone/>

<div>

<h3>Phone</h3>

<p>+91 6302650118</p>

</div>

</div>

<div className="contact-card">

<FaMapMarkerAlt/>

<div>

<h3>Location</h3>

<p>Guntakal,Anantapur,India</p>

</div>

</div>

<div className="social-links">

<a href="https://github.com/PavanKumar9474"><FaGithub/></a>

<a href="https://www.linkedin.com/in/a-pavan-kumar-reddy-b2a431300/"><FaLinkedin/></a>

</div>

</div>

<form className="contact-form" onSubmit={handleSubmit}>

<input
	type="text"
	placeholder="Your Name"
	name="name"
/>

<input
	type="email"
	placeholder="Your Email"
	name="email"
/>

<input
	type="text"
	placeholder="Subject"
	name="subject"
/>

<textarea
	rows="6"
	placeholder="Your Message"
	name="message"
/>

<button type="submit">

Send Message

</button>

</form>

</div>

</div>

</section>

)

}

export default Contact;
