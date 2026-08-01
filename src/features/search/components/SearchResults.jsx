import MovieCard from "../../home/components/MovieCard/MovieCard";
import styles from "./SearchResults.module.css";


function SearchResults({
  movies
}) {

  if (!movies || movies.length === 0) {
    return (
      <p>
        No movies found.
      </p>
    );
  }


  return (
    <section className={styles.container}>

      <div className={styles.grid}>

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


export default SearchResults;