import { useEffect, useRef, useState } from "react";

import MovieCard from "../MovieCard/MovieCard";
import SkeletonCard from "../../../../components/Skeleton/SkeletonCard";

import styles from "./MovieRow.module.css";

function MovieRow({
  title,
  movies = [],
  loading,
}) {

  const containerRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateButtons() {

    const container = containerRef.current;

    if (!container) return;

    setCanScrollLeft(
      container.scrollLeft > 10
    );

    setCanScrollRight(
      container.scrollLeft <
      container.scrollWidth -
      container.clientWidth -
      10
    );

  }

  useEffect(() => {

    updateButtons();

    const container = containerRef.current;

    if (!container) return;

    container.addEventListener(
      "scroll",
      updateButtons
    );

    window.addEventListener(
      "resize",
      updateButtons
    );

    return () => {

      container.removeEventListener(
        "scroll",
        updateButtons
      );

      window.removeEventListener(
        "resize",
        updateButtons
      );

    };

  }, [movies]);



  function scrollLeft() {

    containerRef.current?.scrollBy({
      left: -1000,
      behavior: "smooth",
    });

  }



  function scrollRight() {

    containerRef.current?.scrollBy({
      left: 1000,
      behavior: "smooth",
    });

  }



  return (

    <section className={styles.row}>

      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.wrapper}>

        {
          !loading && canScrollLeft && (

            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={scrollLeft}
            >
              ❮
            </button>

          )
        }

        <div
          ref={containerRef}
          className={styles.container}
        >

          {

            loading

              ?

              Array.from({ length: 6 }).map((_, index) => (

                <SkeletonCard key={index} />

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

        {
          !loading && canScrollRight && (

            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={scrollRight}
            >
              ❯
            </button>

          )
        }

      </div>

    </section>

  );

}

export default MovieRow;