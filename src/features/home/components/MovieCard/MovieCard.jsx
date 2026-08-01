import styles from "./MovieCard.module.css";
import FavoriteButton from "../../../favorites/components/FavoriteButton";


function MovieCard({ movie }) {

  return (
    <article className={styles.card}>


      <div className={styles.posterWrapper}>

        <img
          className={styles.poster}
          src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${movie.poster_path}`}
          alt={movie.title}
        />


        <FavoriteButton
          movie={movie}
        />

      </div>



      <div className={styles.info}>

        <h3>
          {movie.title}
        </h3>


        <span>
          ⭐ {movie.vote_average.toFixed(1)}
        </span>


      </div>


    </article>
  );

}


export default MovieCard;