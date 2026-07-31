function useHomeMovies(){

  const [trendingMovies,setTrendingMovies] = useState([]);

  const [loading,setLoading] = useState(true);


  useEffect(()=>{

    async function fetchMovies(){

      const movies = await getTrendingMovies();

      setTrendingMovies(movies);

      setLoading(false);

    }


    fetchMovies();


  },[]);



  return {
    trendingMovies,
    loading
  };

}