import { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon
} from "react-icons/fa";

import profile from "../assets/profile.jpeg";

import "../styles/Navbar.css";

function Navbar() {

  const [menu,setMenu]=useState(false);

  return (

<header className="navbar">

<div className="container nav-container">

<div className="logo">

<img src={profile} alt="profile"/>

<h2>

Pavan <span>Kumar</span>

</h2>

</div>

<nav className={menu ? "nav-links active":"nav-links"}>

<Link
to="home"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Home

</Link>

<Link
to="about"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

About

</Link>

<Link
to="skills"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Skills

</Link>

<Link
to="projects"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Projects

</Link>

<Link
to="experience"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Experience

</Link>

<Link
to="education"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Education

</Link>

<Link
to="contact"
spy={true}
smooth={true}
duration={500}
onClick={()=>setMenu(false)}
>

Contact

</Link>

</nav>

<div className="icons">

<FaMoon className="moon"/>

<div
className="menu"
onClick={()=>setMenu(!menu)}
>

{menu ? <FaTimes/> : <FaBars/>}

</div>

</div>

</div>

</header>

  );

}

export default Navbar;