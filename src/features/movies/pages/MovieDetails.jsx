import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";


function MovieDetails() {

  const { id } = useParams();


  const {
    movie,
    loading,
    error
  } = useMovieDetails(id);



  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }


  if (!movie) {
    return null;
  }



  return (
    <div>

      <h1>
        {movie.title}
      </h1>


      <p>
        {movie.overview}
      </p>

    </div>
  );
}


export default MovieDetails;