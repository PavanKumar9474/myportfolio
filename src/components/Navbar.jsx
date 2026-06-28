import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import profile from "../assets/profile.jpeg";
import "../styles/Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo">
          <img src={profile} alt="profile" />

          <h2>
            Pavan <span>Kumar</span>
          </h2>
        </div>

        <nav className={menu ? "nav-links active" : "nav-links"}>

          {[
            "home",
            "about",
            "skills",
            "projects",
            "experience",
            "education",
            "contact",
          ].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => setMenu(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

        </nav>

        <div className="icons">

          <div
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>

          <div
            className="menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;