import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import FavoritesProvider from "../src/features/favorites/context/FavoritesContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <FavoritesProvider>

        <ScrollToTop />

        <App />

      </FavoritesProvider>

    </BrowserRouter>

  </React.StrictMode>

);