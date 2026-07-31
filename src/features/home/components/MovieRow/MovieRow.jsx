import styles from "./MovieRow.module.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieRow({ title, movies }) {
  return (
    <section className={styles.row}>

      <h2 className={styles.title}>
        {title}
      </h2>


      <div className={styles.container}>

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
}

export default MovieRow;