import { useCallback, useEffect, useState } from "react";

import { searchMovies as searchMoviesApi } from "../../../api/movieService";

function useSearch(query) {

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = useCallback(async () => {
    if (!query || !query.trim()) {
      setResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const data = await searchMoviesApi(query);

      setResults(data || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    searchMovies();
  }, [searchMovies]);

  return { results, loading, error };
}

export default useSearch;
