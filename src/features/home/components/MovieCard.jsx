import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.poster}
        src={`${
          import.meta.env.VITE_TMDB_IMAGE_URL
        }/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className={styles.info}>
        <h3>{movie.title}</h3>

        <span>⭐ {movie.vote_average.toFixed(1)}</span>
      </div>
    </article>
  );
}

export default MovieCard;