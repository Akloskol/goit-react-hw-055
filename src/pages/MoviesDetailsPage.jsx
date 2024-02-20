import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMoviesById } from '../api';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { BackLink } from '../components/BackLink/BackLink';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedMovie = await getMoviesById(movieId, {
          abortController: controller,
        });
        setMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <div>
      <BackLink href={backLinkRef.current ?? '/movies'} />
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
}
