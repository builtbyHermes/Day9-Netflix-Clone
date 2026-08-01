import { Link } from "react-router-dom";

import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {

  const imageUrl =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${movie.poster_path}`;

  return (

    <Link
      to={`/movies/${movie.id}`}
      className={styles.link}
    >

      <article className={styles.card}>

        <img
          className={styles.poster}
          src={imageUrl}
          alt={movie.title}
          loading="lazy"
        />

      </article>

    </Link>

  );

}

export default MovieCard;