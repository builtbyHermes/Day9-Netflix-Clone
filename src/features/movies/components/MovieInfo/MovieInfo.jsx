import styles from "./MovieInfo.module.css";

function MovieInfo({ movie }) {
  if (!movie) return null;

  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.overviewSection}>
          <h2>Overview</h2>

          <p>{movie.overview}</p>
        </div>

        <div className={styles.factsSection}>
          <h2>Movie Facts</h2>

          <div className={styles.fact}>
            <span>Original Language</span>
            <span>{movie.original_language.toUpperCase()}</span>
          </div>

          <div className={styles.fact}>
            <span>Status</span>
            <span>{movie.status}</span>
          </div>

          <div className={styles.fact}>
            <span>Runtime</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className={styles.fact}>
            <span>Budget</span>
            <span>${movie.budget.toLocaleString()}</span>
          </div>

          <div className={styles.fact}>
            <span>Revenue</span>
            <span>${movie.revenue.toLocaleString()}</span>
          </div>
        </div>

        <div className={styles.productionSection}>
          <h2>Production Companies</h2>

          <ul>
            {movie.production_companies.map((company) => (
              <li key={company.id}>
                {company.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MovieInfo;