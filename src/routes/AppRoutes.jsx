import {
  Routes,
  Route
} from "react-router-dom";


import {
  lazy,
  Suspense
} from "react";


import MainLayout from "../layouts/MainLayout";



const Home = lazy(
  () => import("../features/home/pages/Home")
);


const MovieDetails = lazy(
  () => import("../features/movies/pages/MovieDetails")
);


const Search = lazy(
  () => import("../features/search/pages/Search")
);


const Favorites = lazy(
  () => import("../features/favorites/pages/Favorites")
);



function AppRoutes() {


return (

<Suspense

 fallback={
   <p>
     Loading page...
   </p>
 }

>


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


</Suspense>

);


}


export default AppRoutes;