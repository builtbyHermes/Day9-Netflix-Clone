import MovieCard from "../../home/components/MovieCard/MovieCard";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

import styles from "./SearchResults.module.css";


function SearchResults({
  movies,
  loading
}) {



  if (loading) {


    return (

      <section className={styles.container}>

        <div className={styles.grid}>

          {
            Array.from({
              length: 12
            }).map((_, index) => (

              <SkeletonCard

                key={index}

              />

            ))
          }


        </div>


      </section>

    );


  }





  if (!movies || movies.length === 0) {


    return (

      <div className={styles.empty}>


        <h2>
          No movies found
        </h2>


        <p>
          Try searching for another movie title.
        </p>


      </div>

    );

  }






  return (

    <section className={styles.container}>


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


    </section>

  );

}


export default SearchResults;