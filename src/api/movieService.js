import api from "./axios";
import endpoints from "./endpoints";

import {
  getCachedData,
  setCachedData,
} from "../utils/apiCache";



async function cachedRequest(
  key,
  request
) {


  const cached =
    getCachedData(key);



  if (cached) {

    return cached;

  }



  const data =
    await request();



  setCachedData(
    key,
    data
  );



  return data;

}







// Trending movies

export const getTrendingMovies = () => {


  return cachedRequest(

    "trending_movies",

    async () => {

      const response =
        await api.get(
          endpoints.trendingMovies
        );


      return response.data.results;

    }

  );


};








// Popular movies

export const getPopularMovies = () => {


  return cachedRequest(

    "popular_movies",

    async () => {


      const response =
        await api.get(
          endpoints.popularMovies
        );


      return response.data.results;


    }

  );


};








// Top rated movies

export const getTopRatedMovies = () => {


  return cachedRequest(

    "top_rated_movies",

    async () => {


      const response =
        await api.get(
          endpoints.topRatedMovies
        );


      return response.data.results;


    }

  );


};








// Upcoming movies

export const getUpcomingMovies = () => {


  return cachedRequest(

    "upcoming_movies",

    async () => {


      const response =
        await api.get(
          endpoints.upcomingMovies
        );


      return response.data.results;


    }

  );


};








// Movie details

export const getMovieDetails = (id) => {


  return cachedRequest(

    `movie_details_${id}`,

    async () => {


      const response =
        await api.get(
          endpoints.movieDetails(id)
        );


      return response.data;


    }

  );


};








// Movie credits

export const getMovieCredits = (id) => {


  return cachedRequest(

    `movie_credits_${id}`,

    async () => {


      const response =
        await api.get(
          endpoints.movieCredits(id)
        );


      return response.data.cast;


    }

  );


};








// Movie videos

export const getMovieVideos = (id) => {


  return cachedRequest(

    `movie_videos_${id}`,

    async () => {


      const response =
        await api.get(
          endpoints.movieVideos(id)
        );


      return response.data.results;


    }

  );


};








// Similar movies

export const getSimilarMovies = (id) => {


  return cachedRequest(

    `similar_movies_${id}`,

    async () => {


      const response =
        await api.get(
          endpoints.similarMovies(id)
        );


      return response.data.results;


    }

  );


};








// Search movies

export const searchMovies = async (
  query
) => {


  const response =
    await api.get(

      endpoints.searchMovies,

      {
        params:{
          query,
        },
      }

    );



  return response.data.results;


};