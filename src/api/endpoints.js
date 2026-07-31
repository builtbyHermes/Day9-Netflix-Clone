const endpoints = {
  trendingMovies: "/trending/movie/week",

  popularMovies: "/movie/popular",

  topRatedMovies: "/movie/top_rated",

  upcomingMovies: "/movie/upcoming",

  nowPlayingMovies: "/movie/now_playing",

  movieDetails: (id) => `/movie/${id}`,

  movieCredits: (id) => `/movie/${id}/credits`,

  movieVideos: (id) => `/movie/${id}/videos`,

  similarMovies: (id) => `/movie/${id}/similar`,

  recommendations: (id) =>
    `/movie/${id}/recommendations`,

  searchMovies: "/search/movie",

  genres: "/genre/movie/list",
};


export default endpoints;