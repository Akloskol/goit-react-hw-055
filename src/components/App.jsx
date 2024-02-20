//import css from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { NavBar } from './NavBar/NavBar';
import css from './App.module.css';
import { LoaderPage } from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <NavBar />
      </header>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
