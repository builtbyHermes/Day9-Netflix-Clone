import MovieCard from "../../home/components/MovieCard/MovieCard";
import styles from "./FavoritesGrid.module.css";


function FavoritesGrid({
  movies
}) {

  return (
    <div className={styles.grid}>

      {
        movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
          />

        ))
      }

    </div>
  );

}


export default FavoritesGrid;