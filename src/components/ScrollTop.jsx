import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

import "../styles/ScrollTop.css";

function ScrollTop() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const toggle = () => {

      if (window.scrollY > 300) {

        setVisible(true);

      } else {

        setVisible(false);

      }

    };

    window.addEventListener("scroll", toggle);

    return () => window.removeEventListener("scroll", toggle);

  }, []);

  const scrollTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    visible && (

      <button

        className="scrollTop"

        onClick={scrollTop}

      >

        <FaArrowUp />

      </button>

    )

  );

}

export default ScrollTop;