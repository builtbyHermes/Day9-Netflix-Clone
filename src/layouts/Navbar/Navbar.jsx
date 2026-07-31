import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";


function Navbar() {

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

        <a href="/">
          Home
        </a>

        <a href="/">
          Movies
        </a>

        <a href="/">
          TV Shows
        </a>

      </div>


      <div className={styles.actions}>

        <button>
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