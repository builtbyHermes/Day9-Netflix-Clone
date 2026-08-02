import styles from "./ErrorMessage.module.css";

function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <section className={styles.container}>

      <div className={styles.icon}>
        ⚠
      </div>

      <h2>
        Oops!
      </h2>

      <p>
        {message}
      </p>

      {onRetry && (
        <button onClick={onRetry}>
          Try Again
        </button>
      )}

    </section>
  );
}

export default ErrorMessage;