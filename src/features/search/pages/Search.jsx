import { useState } from "react";

import useSearch from "../hooks/useSearch";

import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";

import styles from "./Search.module.css";


function Search() {


  const [query, setQuery] = useState("");



  const {
    results,
    loading,
    error

  } = useSearch(query);




  return (

    <main className={styles.searchPage}>


      <section className={styles.searchHeader}>


        <h1>
          Search Movies
        </h1>



        <SearchInput

          value={query}

          onChange={setQuery}

        />


        {
          error && (

            <p className={styles.error}>
              {error}
            </p>

          )
        }



        {
          query &&
          !loading &&
          !error && (

            <p className={styles.count}>

              Found {results.length} movies

            </p>

          )
        }



      </section>





      <section className={styles.results}>


        <SearchResults

          movies={results}
          
          loading={loading}
        />


      </section>



    </main>

  );

}


export default Search;