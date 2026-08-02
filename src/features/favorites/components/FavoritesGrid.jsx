import MovieCard from "../../home/components/MovieCard/MovieCard";
import useFavorites from "../hooks/useFavorites";
import React from "react";
import styles from "./FavoritesGrid.module.css";

function FavoritesGrid({ movies }) {

  const { removeFavorite } = useFavorites();

  return (

    <div className={styles.grid}>

      {movies.map((movie) => (

        <div
          key={movie.id}
          className={styles.item}
        >

          <MovieCard
            movie={movie}
          />

          <button

            className={styles.removeButton}

            onClick={() =>
              removeFavorite(movie.id)
            }

          >

            Remove

          </button>

        </div>

      ))}

    </div>

  );

}

export default React.memo(FavoritesGrid);