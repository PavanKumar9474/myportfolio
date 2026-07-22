import hospital from "../assets/hospital.png";
import hostel from "../assets/hostel.png";
import exam from "../assets/exam.png";

export const personalInfo = {
  name: "Pavan Kumar",
  role: "Python Full Stack Developer",
  email: "pavanharsha2004@gmail.com",
  phone: "+91 6302650118",
  location: "Guntakal, Anantapur, India",
  availability: "Open to Work",
  github: "https://github.com/PavanKumar9474",
  linkedin: "https://www.linkedin.com/in/a-pavan-kumar-reddy-b2a431300/",
  resume: "/resume.pdf",
  bio: "I'm a Python Full Stack Developer passionate about building scalable, responsive web applications using React, FastAPI, PostgreSQL, HTML, CSS, and JavaScript. I enjoy solving real-world problems through clean code, responsive interfaces, and efficient backend systems.",
};

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "SQLAlchemy",
  "REST APIs",
  "JWT Authentication",
  "Docker",
  "Git",
  "GitHub Actions",
  "OpenAI API",
  "Google Gemini API",
  "Machine Learning Basics"
];

export const projects = [
  {
    title: "Hospital Management System",
    image: hospital,
    description: "A full-stack hospital management system with patient registration, doctor appointments, authentication, and an admin dashboard.",
    technologies: ["React", "FastAPI", "PostgreSQL", "JWT"],
    github: "https://github.com/PavanKumar9474/hospital-appointment-system",
    live: "#",
  },
  {
    title: "Hostel Complaint System",
    image: hostel,
    description: "Students can register complaints, and administrators can assign rooms and resolve complaints with authentication.",
    technologies: ["React", "FastAPI", "SQLite"],
    github: "https://github.com/PavanKumar9474/hostel-grievance-system",
    live: "#",
  },
  {
    title: "Smart Exam Navigation",
    image: exam,
    description: "Students can locate their examination hall, room, and bench using their hall ticket number, with QR code support.",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    github: "https://github.com/PavanKumar9474/smart-exam-seating-system",
    live: "#",
  },
];

export const experience = [
  {
    title: "Python Full Stack Developer",
    company: "Personal Projects",
    duration: "2025 - Present",
    description: "Developed full-stack applications using ReactJS, FastAPI, PostgreSQL, JWT Authentication, REST APIs, Git, and GitHub.",
  },
  {
    title: "Frontend Developer",
    company: "React Practice",
    duration: "2024 - 2025",
    description: "Built responsive websites using ReactJS, JavaScript, HTML5, CSS3, and modern UI design principles.",
  },
  {
    title: "Frontend Web Developer",
    company: "Mini Projects",
    duration: "2024",
    description: "Created responsive mini-projects using HTML, CSS, and JavaScript.",
  },
];

export const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institute: "KUPPAM ENGINEERING COLLEGE",
    year: "2023 - 2027",
    description: "Currently pursuing B.Tech in Computer Science with a strong interest in Python Full Stack Development.",
  },
  {
    degree: "Intermediate",
    institute: "SSGS Junior College",
    year: "2021 - 2023",
    description: "Completed Intermediate with Mathematics, Physics, and Chemistry.",
  },
  {
    degree: "SSC",
    institute: "SVIS EM HIGH SCHOOL",
    year: "2020 - 2021",
    description: "Completed Secondary School Education.",
  },
];

export const certificates = [
  {
    title: "Web Development Internship",
    provider: "Vaultsphere",
    year: "2026",
  },
  {
    title: "Advanced Python Programming Workshop",
    provider: "Coding Club",
    year: "2025",
  },
  {
    title: "HTML & CSS",
    provider: "Cursa",
    year: "2025",
  },
];
