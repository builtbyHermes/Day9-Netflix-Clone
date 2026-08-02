import { useParams } from "react-router-dom";

import useMovieDetails from "../hooks/useMovieDetails";

import MovieHero from "../components/MovieHero/MovieHero";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import MovieTrailer from "../components/MovieTrailer/MovieTrailer";
import CastList from "../components/CastList/CastList";
import SimilarMovies from "../components/SimilarMovies/SimilarMovies";
import styles from "./MovieDetails.module.css";


function MovieDetails() {

  const { id } = useParams();


  const {
    movie,
    loading,
    error,

  } = useMovieDetails(id);



  if (loading) {

    return (

      <div className={styles.status}>

        Loading...

      </div>

    );

  }



  if (error) {

    return (

      <div className={styles.status}>

        {error}

      </div>

    );

  }



  if (!movie) return null;



  return (

    <main className={styles.page}>


      <MovieHero
        movie={movie}
      />

      

      <section className={styles.content}>


        <MovieInfo
          movie={movie}
        />



        <MovieTrailer
          movieId={movie.id}
        />



        <CastList
          movieId={movie.id}
        />
     
        <SimilarMovies movieId={movie.id} />
      </section>


    </main>

  );

}


export default MovieDetails;