import { useState } from "react";

import styles from "./OptimizedImage.module.css";


function OptimizedImage({
  src,
  alt,
  className,
}) {


  const [loaded, setLoaded] = useState(false);


  const [error, setError] = useState(false);



  return (

    <div
      className={`${styles.wrapper} ${className || ""}`}
    >


      {!loaded && !error && (

        <div
          className={styles.skeleton}
        />

      )}



      {
        error ? (

          <img

            src="/placeholder-movie.png"

            alt={alt}

            className={styles.image}

          />

        )

        :

        (

          <img

            src={src}

            alt={alt}

            loading="lazy"

            onLoad={() => setLoaded(true)}

            onError={() => setError(true)}

            className={

              `${styles.image}

              ${loaded ? styles.loaded : ""}`

            }

          />

        )

      }


    </div>

  );

}


export default OptimizedImage;