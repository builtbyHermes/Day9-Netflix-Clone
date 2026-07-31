import { useEffect } from "react";
import { getTrendingMovies } from "../../../api/movieService";


function Home() {

  useEffect(() => {

    async function fetchMovies(){

      const movies = await getTrendingMovies();

      console.log(movies);

    }

    fetchMovies();

  }, []);


  return (
    <h1>
      Home Page
    </h1>
  );
}


export default Home;