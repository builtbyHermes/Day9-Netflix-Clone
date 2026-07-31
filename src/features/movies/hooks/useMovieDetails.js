import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../api/movieService";


function useMovieDetails(id) {

  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    if (!id) return;


    async function fetchMovie() {

      try {

        setLoading(true);

        const data = await getMovieDetails(id);

        setMovie(data);


      } catch (err) {

        setError(
          "Failed to load movie details"
        );

      } finally {

        setLoading(false);

      }

    }


    fetchMovie();


  }, [id]);



  return {
    movie,
    loading,
    error
  };

}


export default useMovieDetails;