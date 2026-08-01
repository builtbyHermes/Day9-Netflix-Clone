import useFavorites from "../hooks/useFavorites";
import styles from "./FavoriteButton.module.css";


function FavoriteButton({ movie }) {

  const {
    isFavorite,
    toggleFavorite
  } = useFavorites();


  const active = isFavorite(movie.id);


  function handleClick() {

    console.log("clicked movie:", movie);

    toggleFavorite(movie);

  }


  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {active ? "❤️" : "🤍"}
    </button>
  );
}


export default FavoriteButton;