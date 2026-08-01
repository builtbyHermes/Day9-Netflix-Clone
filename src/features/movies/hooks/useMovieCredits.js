import { useEffect, useState } from "react";
import { getMovieCredits } from "../../../api/movieService";

function useMovieCredits(movieId) {
  const [cast, setCast] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchCredits() {
      try {
        setLoading(true);

        const data = await getMovieCredits(movieId);

        setCast(data);
      } catch (err) {
        setError("Failed to load cast.");
      } finally {
        setLoading(false);
      }
    }

    fetchCredits();
  }, [movieId]);

  return {
    cast,
    loading,
    error,
  };
}

export default useMovieCredits;