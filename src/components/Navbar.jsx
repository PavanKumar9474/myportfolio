import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { personalInfo } from "../data/portfolioData";
import profile from "../assets/profile.jpeg";

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

  const nameParts = personalInfo.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <header className="navbar">
      <div className="container nav-container">

        <div className="logo">
          <img src={profile} alt="profile" />

          <h2>
            {firstName} <span>{lastName}</span>
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
              activeClass="active"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}

        </nav>

        <div className="icons">

          <div
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </div>

          <div
            className="menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
          >
            {menu ? <FaTimes /> : <FaBars />}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;