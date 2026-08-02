import { Link } from "react-router-dom";
import React from "react";
import useFavorites from "../../../favorites/hooks/useFavorites";

import styles from "./MovieCard.module.css";
import OptimizedImage from "../../../../components/OptimizedImage/OptimizedImage";

function MovieCard({ movie }) {


  const {
    toggleFavorite,
    isFavorite,

  } = useFavorites();



  const favorite = isFavorite(movie.id);



  function handleFavorite(e) {

    e.preventDefault();

    e.stopPropagation();

    toggleFavorite(movie);

  }



  const imageUrl =
    `${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${movie.poster_path}`;



  return (

    <Link

      to={`/movies/${movie.id}`}

      className={styles.link}

    >

      <article className={styles.card}>


                    <OptimizedImage

            src={imageUrl}

            alt={movie.title}

            className={styles.poster}

          />



        <button

          className={styles.favoriteButton}

          onClick={handleFavorite}

        >

          {favorite ? "❤️" : "♡"}

        </button>



      </article>


    </Link>

  );

}


export default React.memo(MovieCard);