// import { useState } from 'react'

import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Layout from "./components/Layout/Layout";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />} />
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />

          <Route path="*" element={<NotFoundPage to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
