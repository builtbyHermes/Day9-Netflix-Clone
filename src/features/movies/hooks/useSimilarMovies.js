import { useEffect, useState } from "react";

import { getSimilarMovies } from "../../../api/movieService";

function useSimilarMovies(movieId) {

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchSimilarMovies() {

      try {

        setLoading(true);

        setError(null);

        const data = await getSimilarMovies(movieId);

        setMovies(data);

      }

      catch (err) {

        setError(
          err.message || "Failed to load similar movies."
        );

      }

      finally {

        setLoading(false);

      }

    }

    if (movieId) {

      fetchSimilarMovies();

    }

  }, [movieId]);

  return {

    movies,

    loading,

    error,

  };

}

export default useSimilarMovies;