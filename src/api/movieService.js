import api from "./axios";
import endpoints from "./endpoints";


// Trending movies

export const getTrendingMovies = async () => {
  const response = await api.get(
    endpoints.trendingMovies
  );

  return response.data.results;
};



// Popular movies

export const getPopularMovies = async () => {
  const response = await api.get(
    endpoints.popularMovies
  );

  return response.data.results;
};



// Top rated movies

export const getTopRatedMovies = async () => {
  const response = await api.get(
    endpoints.topRatedMovies
  );

  return response.data.results;
};



// Upcoming movies

export const getUpcomingMovies = async () => {
  const response = await api.get(
    endpoints.upcomingMovies
  );

  return response.data.results;
};



// Movie details

export const getMovieDetails = async (id) => {
  const response = await api.get(
    endpoints.movieDetails(id)
  );

  return response.data;
};



// Movie credits

export const getMovieCredits = async (id) => {
  const response = await api.get(
    endpoints.movieCredits(id)
  );

  return response.data;
};



// Movie trailer/videos

export const getMovieVideos = async (id) => {
  const response = await api.get(
    endpoints.movieVideos(id)
  );

  return response.data.results;
};



// Similar movies

export const getSimilarMovies = async (id) => {
  const response = await api.get(
    endpoints.similarMovies(id)
  );

  return response.data.results;
};



// Search movies

export const searchMovies = async (query) => {
  const response = await api.get(
    endpoints.searchMovies,
    {
      params: {
        query,
      },
    }
  );

  return response.data.results;
};