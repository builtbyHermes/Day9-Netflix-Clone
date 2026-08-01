import { useEffect, useState } from "react";
import { getMovieVideos } from "../../../api/movieService";

function useMovieVideos(movieId) {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchVideos() {
      try {
        setLoading(true);

        const data = await getMovieVideos(movieId);

        setVideos(data);
      } catch (err) {
        setError("Failed to load videos.");
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [movieId]);

  return {
    videos,
    loading,
    error,
  };
}

export default useMovieVideos;