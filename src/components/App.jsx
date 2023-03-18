import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import css from './App.module.css';

const SharedLayout = lazy(() => import('./SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage.jsx'));

const MoviesPage = lazy(() => import('../pages/MoviesPage.jsx'));

const MovieDetails = lazy(() =>
  import('../pages/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('../pages/MovieDetails/Cast/index.jsx'));
const Reviews = lazy(() => import('../pages/MovieDetails/Reviews/index.jsx'));

const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'));

export const App = () => {
  return (
    <div className={css.rootApp}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route
              path="/movie/:movieId"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MovieDetails />
                </Suspense>
              }
            >
              <Route
                path="cast"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Cast />
                  </Suspense>
                }
              />
              <Route
                path="reviews"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Reviews />
                  </Suspense>
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
