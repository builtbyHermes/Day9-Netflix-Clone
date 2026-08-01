import styles from "./MovieRow.module.css";

import MovieCard from "../MovieCard/MovieCard";
import SkeletonCard from "../../../../components/Skeleton/SkeletonCard";


function MovieRow({ title, movies = [], loading }) {


  return (

    <section className={styles.row}>


      <h2 className={styles.title}>
        {title}
      </h2>



      <div className={styles.container}>


        {
          loading

          ?

          Array.from({ length: 6 }).map((_, index) => (

            <SkeletonCard
              key={index}
            />

          ))


          :


          movies.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
            />

          ))

        }


      </div>


    </section>

  );

}


export default MovieRow;