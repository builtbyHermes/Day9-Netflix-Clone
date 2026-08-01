import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../features/home/pages/Home";
import MovieDetails from "../features/movies/pages/MovieDetails";
import Search from "../features/search/pages/Search";
import Favorites from "../features/favorites/pages/Favorites";


function AppRoutes() {
  return (

    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/movies/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/search"
          element={<Search />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

      </Route>


    </Routes>

  );
}

export default AppRoutes;