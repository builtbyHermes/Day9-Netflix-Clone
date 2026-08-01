import useMovieVideos from "../../hooks/useMovieVideos";

function MovieTrailer({ movieId }) {
  const {
    videos,
    loading,
    error,
  } = useMovieVideos(movieId);

  if (loading) return <p>Loading trailer...</p>;

  if (error) return <p>{error}</p>;

  const trailer = videos.find(
    (video) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  if (!trailer) {
    return <p>No trailer available.</p>;
  }

  return (
    <section>
      <h2>Trailer</h2>

      <iframe
        width="100%"
        height="600"
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.name}
        allowFullScreen
      />
    </section>
  );
}

export default MovieTrailer;