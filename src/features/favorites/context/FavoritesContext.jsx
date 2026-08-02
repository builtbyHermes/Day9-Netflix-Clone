import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

const STORAGE_KEY = "favorite_movies";

function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const saved = localStorage.getItem(STORAGE_KEY);

    return saved
      ? JSON.parse(saved)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(favorites)

    );

  }, [favorites]);

  function addFavorite(movie) {

    setFavorites((prev) => [

      ...prev,

      movie,

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

  return (

    <FavoritesContext.Provider

      value={{

        favorites,

        addFavorite,

        removeFavorite,

        toggleFavorite,

        isFavorite,

      }}

    >

      {children}

    </FavoritesContext.Provider>

  );

}

export default FavoritesProvider;