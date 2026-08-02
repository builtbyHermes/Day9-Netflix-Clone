import { useNavigate } from "react-router-dom";

import styles from "./HeroBanner.module.css";


function HeroBanner({ movie }) {

  const navigate = useNavigate();


  if (!movie) return null;


  const backdropImage =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/original${movie.backdrop_path}`;


  const releaseYear =
    movie.release_date?.split("-")[0];


  return (

    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${backdropImage})`,
      }}
    >

      <div className={styles.overlay}>


        <div className={styles.content}>


          <h1>
            {movie.title}
          </h1>



          <div className={styles.meta}>


            <span>
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>


            <span>
              {releaseYear}
            </span>


            <span>
              HD
            </span>


          </div>



          <p>
            {movie.overview}
          </p>



          <div className={styles.actions}>


            <button
              className={styles.play}
            >
              ▶ Play
            </button>



            <button
              className={styles.info}
              onClick={() =>
                navigate(`/movies/${movie.id}`)
              }
            >
               More Info
            </button>


          </div>


        </div>


      </div>


    </section>

  );

}


export default HeroBanner;