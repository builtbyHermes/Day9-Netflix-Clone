import useHomeMovies from "../hooks/useHomeMovies";
import MovieRow from "../components/MovieRow/MovieRow";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import SkeletonCard from "../../../components/Skeleton/SkeletonCard";

function Home() {
  const {
    trendingMovies,popularMovies,topRatedMovies,
    loading,
    error,
  } = useHomeMovies();
  
  const featuredMovie = trendingMovies[1];

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      
      <HeroBanner movie={featuredMovie} />

      <MovieRow
        title="Trending Now"
        movies={trendingMovies}
        loading={loading}
      />

      <MovieRow
        title="Popular"
        movies={popularMovies}
        loading={loading}
      />

      <MovieRow
        title="Top Rated"
        movies={topRatedMovies}
        loading={loading}
      />

      
     <SkeletonCard/>
  </>
  );
}

export default Home;