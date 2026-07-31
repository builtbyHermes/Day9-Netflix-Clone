import styles from "./HeroBanner.module.css";

function HeroBanner({ movie }) {

  if (!movie) return null;


  const backdropImage =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/original${movie.backdrop_path}`;


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


          <p>
            {movie.overview}
          </p>


          <div className={styles.actions}>

            <button className={styles.play}>
              ▶ Play
            </button>


            <button className={styles.info}>
              ⓘ More Info
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}


export default HeroBanner;