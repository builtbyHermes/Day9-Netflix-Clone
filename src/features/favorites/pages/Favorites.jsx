import useFavorites from "../hooks/useFavorites";

import FavoritesGrid from "../components/FavoritesGrid";

import styles from "./Favorites.module.css";


function Favorites() {

  const { favorites } = useFavorites();

  return (

    <section className={styles.page}>

      <div className={styles.header}>

      </div>

      {
        favorites.length === 0 ? (

          <div className={styles.empty}>

            <div className={styles.icon}>
              ❤️
            </div>

            <h2>
              Your List is Empty
            </h2>

            <p>
              Save your favorite movies and they'll appear here.
            </p>

          </div>

        ) : (

          <FavoritesGrid
            movies={favorites}
          />

        )
      }

    </section>

  );

}

export default Favorites;