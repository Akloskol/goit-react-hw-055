import { useEffect, useState } from 'react';
import { getPopMovies } from '../api';
import { PopularMovie } from '../components/PopMovie/popMovie';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { Loader } from '../components/Loader';

export default function HomePage() {
  const [popMovie, setPopMovie] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fethHomeData() {
      try {
        setLoading(true);
        const fetchedHomeMovie = await getPopMovies();
        setPopMovie(fetchedHomeMovie.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fethHomeData();
  }, []);
  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <PopularMovie popMovie={popMovie} />
    </div>
  );
}
