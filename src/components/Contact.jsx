import "../styles/Contact.css";

import {
FaEnvelope,
FaPhone,
FaMapMarkerAlt,
FaGithub,
FaLinkedin
} from "react-icons/fa";

function Contact(){

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

<p>pavan@example.com</p>

</div>

</div>

<div className="contact-card">

<FaPhone/>

<div>

<h3>Phone</h3>

<p>+91 9876543210</p>

</div>

</div>

<div className="contact-card">

<FaMapMarkerAlt/>

<div>

<h3>Location</h3>

<p>India</p>

</div>

</div>

<div className="social-links">

<a href="#"><FaGithub/></a>

<a href="#"><FaLinkedin/></a>

</div>

</div>

<form className="contact-form">

<input
type="text"
placeholder="Your Name"
/>

<input
type="email"
placeholder="Your Email"
/>

<input
type="text"
placeholder="Subject"
/>

<textarea
rows="6"
placeholder="Your Message"
/>

<button>

Send Message

</button>

</form>

</div>

</div>

</section>

)

}

export default Contact;