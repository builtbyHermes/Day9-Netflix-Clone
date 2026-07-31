import useHomeMovies from "../hooks/useHomeMovies";
import MovieCard from "../components/MovieCard";

function Home() {
  const {
    trendingMovies,
    loading,
    error,
  } = useHomeMovies();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <MovieCard movie={trendingMovies[0]} />
  );
}

export default Home;