import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ProfileMenu from "../ProfileMenu";

import styles from "./Navbar.module.css";


function Navbar() {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  useEffect(() => {

    function handleScroll() {

      setScrolled(window.scrollY > 50);

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
          className={styles.iconButton}
        >
          🔍
        </button>



        <div className={styles.profile}>


          <button
            onClick={() =>
              setShowProfile((prev) => !prev)
            }
            className={styles.iconButton}
          >
            👤
          </button>



          {
            showProfile && (
              <ProfileMenu />
            )
          }


        </div>


      </div>



    </nav>

  );

}


export default Navbar;