import { Link, useLocation } from 'react-router-dom';
import css from './popMovie.module.css';

export const PopularMovie = ({ popMovie }) => {
  const location = useLocation();

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  return (
    <ul className={css.list_popular}>
      {popMovie.map(item => (
        <li key={item.id} className={css.list_item_popular}>
          <Link to={`/movies/${item.id}`} state={location}>
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  : defaultImg
              }
              alt="poster"
            />
            <p>{item.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
