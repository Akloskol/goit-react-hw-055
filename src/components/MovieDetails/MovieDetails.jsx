import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import clsx from 'clsx';
import { Suspense } from 'react';
import { LoaderPage } from '../Loader';
import { format } from 'date-fns';

const linkClass = ({ isActive }) => {
  return clsx(css.block_title, isActive && css.active);
};

export const MovieDetails = ({ movie }) => {
  const year = format(new Date(movie.release_date), 'yyyy');

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div>
      <div className={css.card_movie}>
        <img
          width={250}
          src={
            movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg
          }
          alt="poster"
        />
        <div className={css.card_movie_desc}>
          <h2>
            {movie.original_title} ({year})
          </h2>
          <h4>Vote average: {movie.vote_average}</h4>
          <div>
            <h3>Overview</h3>
            <p className={css.list_details_text}>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            {movie.genres && (
              <p className={css.list_details_text}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className={css.card_movie_inf}>
        <h4 className={css.title_inf}>Additional information</h4>
        <NavLink to="cast" className={linkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={linkClass}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<LoaderPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
