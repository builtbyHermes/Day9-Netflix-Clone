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

      className={`
        ${styles.navbar}
        ${scrolled ? styles.scrolled : ""}
      `}

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

          className={styles.iconButton}

          onClick={() => navigate("/search")}

        >

          <svg

            width="22"

            height="22"

            viewBox="0 0 24 24"

            fill="none"

            stroke="currentColor"

            strokeWidth="2"

            strokeLinecap="round"

            strokeLinejoin="round"

          >

            <circle

              cx="11"

              cy="11"

              r="8"

            />


            <line

              x1="21"

              y1="21"

              x2="16.65"

              y2="16.65"

            />

          </svg>


        </button>







        <div className={styles.profile}>


          <button

            className={styles.iconButton}

            onClick={() =>
              setShowProfile(prev => !prev)
            }

          >


            <svg

              width="24"

              height="24"

              viewBox="0 0 24 24"

              fill="none"

              stroke="currentColor"

              strokeWidth="2"

              strokeLinecap="round"

              strokeLinejoin="round"

            >

              <path

                d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"

              />


              <circle

                cx="12"

                cy="7"

                r="4"

              />

            </svg>


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