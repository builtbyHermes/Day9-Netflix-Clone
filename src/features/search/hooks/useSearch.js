import { useEffect, useState } from "react";
import { searchMovies } from "../../../api/movieService";


function useSearch(query) {

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);



  useEffect(() => {

    if (!query.trim()) {
      setResults([]);
      return;
    }


    const timer = setTimeout(async () => {

      try {

        setLoading(true);

        setError(null);


        const movies = await searchMovies(query);

        setResults(movies);


      } catch (err) {

        setError(
          "Failed to search movies."
        );

      } finally {

        setLoading(false);

      }


    }, 500);



    return () => {
      clearTimeout(timer);
    };


  }, [query]);



  return {
    results,
    loading,
    error
  };

}


export default useSearch;