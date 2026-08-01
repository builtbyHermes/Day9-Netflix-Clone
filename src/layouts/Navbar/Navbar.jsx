import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.css";


function Navbar() {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    }


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);



  return (

    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >

      <div className={styles.logo}>
        NETFLIX
      </div>



      <div className={styles.links}>

        <Link to="/">
          Home
        </Link>


        <Link to="/">
          Movies
        </Link>


        <Link to="/">
          TV Shows
        </Link>


        <Link to="/favorites">
          My List
        </Link>

      </div>



      <div className={styles.actions}>

        <button
          onClick={() => navigate("/search")}
        >
          🔍
        </button>


        <button>
          👤
        </button>

      </div>


    </nav>

  );

}


export default Navbar;