import { useEffect, useState } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { getCast } from '../../api';

export default function Cast() {
  const [castMovie, setCastMovie] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  useEffect(() => {
    async function fethCast() {
      try {
        setLoading(true);
        const fethedCast = await getCast(movieId);
        setCastMovie(fethedCast.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fethCast();
  }, [movieId]);
  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {castMovie.length > 0 ? (
        <ul className={css.list_cast}>
          {castMovie.map(item => (
            <li key={item.id} className={css.list_item_cast}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any cast for this movie.</p>
      )}
    </div>
  );
}
