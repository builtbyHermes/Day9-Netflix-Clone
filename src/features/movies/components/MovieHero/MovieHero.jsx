import styles from "./MovieHero.module.css";


function MovieHero({ movie }) {

  if (!movie) return null;


  const backdrop =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/original${movie.backdrop_path}`;


  const poster =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${movie.poster_path}`;

  const genres = movie.genres?.map((genre) => genre.name).join(" • ");


  return (

    <section
      className={styles.hero}
      style={{
        backgroundImage:`url(${backdrop})`,
      }}
    >


      <div className={styles.overlay}>


        <div className={styles.container}>


          <div className={styles.posterContainer}>

            <img
              src={poster}
              alt={movie.title}
              className={styles.poster}
            />

          </div>



          <div className={styles.details}>


            <h1 className={styles.title}>
              {movie.title}
            </h1>



            <div className={styles.meta}>

              <span className={styles.rating}>
                ⭐ {movie.vote_average.toFixed(1)}
              </span>


              <span>
                {movie.release_date?.split("-")[0]}
              </span>


              <span>
                {movie.runtime} min
              </span>


            </div>



            <div className={styles.genres}>

              {
                movie.genres?.map((genre)=>(

                  <span
                    key={genre.id}
                    className={styles.genre}
                  >
                    {genre.name}
                  </span>

                ))
              }

            </div>




            <p className={styles.overview}>
              {movie.overview}
            </p>



            <div className={styles.actions}>


              <button
                className={styles.playButton}
              >
                ▶ Play
              </button>



              <button
                className={styles.listButton}
              >
                + My List
              </button>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default MovieHero;