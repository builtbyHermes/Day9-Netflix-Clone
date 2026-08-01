import { useState } from "react";

import useSearch from "../hooks/useSearch";

import SearchInput from "../components/SearchInput";
import SearchResults from "../components/SearchResults";


function Search() {

  const [query, setQuery] = useState("");

  const {
    results,
    loading,
    error
  } = useSearch(query);


  return (
    <section>

      <h1>
        Search Movies
      </h1>


      <SearchInput
        value={query}
        onChange={setQuery}
      />


      {
        loading && (
          <p>
            Searching...
          </p>
        )
      }


      {
        error && (
          <p>
            {error}
          </p>
        )
      }


      {
        query && !loading && (
          <p>
            Found {results.length} movies
          </p>
        )
      }


      <SearchResults
        movies={results}
      />


    </section>
  );
}


export default Search;