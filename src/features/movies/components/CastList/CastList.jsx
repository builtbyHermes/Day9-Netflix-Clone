import useMovieCredits from "../../hooks/useMovieCredits";
import styles from "./CastList.module.css";

function CastList({ movieId }) {
  const {
    cast,
    loading,
    error,
  } = useMovieCredits(movieId);

  if (loading) return <p>Loading cast...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className={styles.castSection}>
      <h2>Cast</h2>

      <div className={styles.castGrid}>
        {cast.slice(0, 10).map((actor) => (
          <div
            key={actor.cast_id ?? actor.id}
            className={styles.castCard}
          >
            <img
              src={
                actor.profile_path
                  ? `${import.meta.env.VITE_TMDB_IMAGE_URL}/w185${actor.profile_path}`
                  : "/placeholder-profile.png"
              }
              alt={actor.name}
            />

            <h4>{actor.name}</h4>

            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CastList;