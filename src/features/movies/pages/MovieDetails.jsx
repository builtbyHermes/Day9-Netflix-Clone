import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import MovieHero from "../components/MovieHero/MovieHero";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import MovieTrailer from "../components/MovieTrailer/MovieTrailer";
import CastList from "../components/CastList/CastList";

function MovieDetails() {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <MovieHero movie={movie} />

      <MovieInfo movie={movie} />

      <MovieTrailer movieId={movie.id} />

      <CastList movieId={movie.id} />
    </>
  );
}

export default MovieDetails;