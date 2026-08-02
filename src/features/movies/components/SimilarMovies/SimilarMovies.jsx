import MovieRow from "../../../home/components/MovieRow/MovieRow";

import useSimilarMovies from "../../hooks/useSimilarMovies";

import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";

function SimilarMovies({ movieId }) {

  const {

    movies,

    loading,

    error,

  } = useSimilarMovies(movieId);

  if (error) {

    return (

      <ErrorMessage
        message={error}
      />

    );

  }

  return (

    <MovieRow

      title="You Might Also Like"

      movies={movies}

      loading={loading}

    />

  );

}

export default SimilarMovies;