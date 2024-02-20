import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fethReviews() {
      try {
        setLoading(true);
        const fethedReviews = await getReviews(movieId);
        setReviewsMovie(fethedReviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fethReviews();
  }, [movieId]);
  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {reviewsMovie.length > 0 ? (
        <ul className={css.list_reviews}>
          {reviewsMovie.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p className={css.list_reviews_text}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </div>
  );
}
