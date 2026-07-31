import { useEffect, useState } from "react";

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



  useEffect(() => {

    async function fetchMovies() {

      try {

        setLoading(true);
        setError(null);


        const [
          trending,
          popular,
          topRated

        ] = await Promise.all([
          getTrendingMovies(),
          getPopularMovies(),
          getTopRatedMovies(),
        ]);


        setTrendingMovies(trending);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);


      } catch (err) {

        setError(
          err.message || "Something went wrong"
        );

      } finally {

        setLoading(false);

      }

    }


    fetchMovies();


  }, []);



  return {
    trendingMovies,
    popularMovies,
    topRatedMovies,

    loading,
    error,
  };

}


export default useHomeMovies;