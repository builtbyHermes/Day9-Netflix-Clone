import useMovieVideos from "../../hooks/useMovieVideos";

import styles from "./MovieTrailer.module.css";


function MovieTrailer({ movieId }) {


  const {
    videos,
    loading,
    error,

  } = useMovieVideos(movieId);



  if (loading) {

    return (

      <p className={styles.status}>
        Loading trailer...
      </p>

    );

  }



  if (error) {

    return (

      <p className={styles.status}>
        {error}
      </p>

    );

  }



  const trailer = videos.find(
    (video) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );



  if (!trailer) {

    return (

      <p className={styles.status}>
        No trailer available.
      </p>

    );

  }



  return (

    <section className={styles.trailer}>


      <h2>
        Trailer
      </h2>



      <div className={styles.videoWrapper}>


        <iframe

          src={
            `https://www.youtube.com/embed/${trailer.key}`
          }

          title={trailer.name}

          allowFullScreen

          className={styles.video}

        />


      </div>


    </section>

  );

}


export default MovieTrailer;