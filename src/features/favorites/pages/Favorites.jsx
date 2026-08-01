import useFavorites from "../hooks/useFavorites";
import FavoritesGrid from "../components/FavoritesGrid";


function Favorites() {

  const {
    favorites
  } = useFavorites();


  console.log("Favorites page:", favorites);


  return (
    <section>

      <h1>
        My List
      </h1>


      {
        favorites.length === 0 ? (
          <p>
            No movies added yet.
          </p>
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