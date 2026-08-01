import { useEffect, useState, useCallback } from "react";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../../../api/movieService";

function useHomeMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        trending,
        popular,
        topRated,
      ] = await Promise.all([
        getTrendingMovies(),
        getPopularMovies(),
        getTopRatedMovies(),
      ]);

      setTrendingMovies(trending);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    loading,
    error,
    retry: fetchMovies,
  };
}

export default useHomeMovies;