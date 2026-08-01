import { useEffect, useState } from "react";


const STORAGE_KEY = "favorite_movies";


function useFavorites() {

  const [favorites, setFavorites] = useState(() => {

    const saved = localStorage.getItem(
      STORAGE_KEY
    );

    return saved
      ? JSON.parse(saved)
      : [];

  });


useEffect(() => {

  console.log(
    "Saving favorites:",
    favorites
  );


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
  );

}, [favorites]);



function addFavorite(movie) {

  console.log("ADDING FAVORITE:", movie);


  setFavorites((prev) => [
    ...prev,
    movie
  ]);

}


  function removeFavorite(movieId) {

    setFavorites((prev) =>
      prev.filter(
        (movie) => movie.id !== movieId
      )
    );

  }



  function isFavorite(movieId) {

    return favorites.some(
      (movie) => movie.id === movieId
    );

  }



  function toggleFavorite(movie) {

    if (isFavorite(movie.id)) {

      removeFavorite(movie.id);

    } else {

      addFavorite(movie);

    }

  }



  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite
  };

}


export default useFavorites;