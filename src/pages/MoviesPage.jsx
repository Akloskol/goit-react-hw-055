//import axios from 'axios';
import { useEffect, useState } from 'react';
import css from '../components/App.module.css';
import { getMovies } from '../api';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from '../components/Loader';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { SearchMovie } from '../components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ErrorMessage, MessageNotFound } from '../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [isEmpty, setIsEmpty] = useState(false);

  const titleMovie = params.get('query') ?? '';
  const handleSearch = async newQuery => {
    if (titleMovie === newQuery) {
      return;
    }
    setSearchMovies([]);
    setParams({ query: newQuery });
    setIsEmpty(false);
  };

  useEffect(() => {
    const controller = new AbortController();

    if (titleMovie === '') {
      return;
    }

    if (!titleMovie) return;
    async function searchMovie() {
      try {
        setLoading(true);
        const result = await getMovies(titleMovie, {
          abortController: controller,
        });
        setSearchMovies(result.results);
        if (result.results.length === 0) {
          setIsEmpty(true);
          return;
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    searchMovie();

    return () => {
      controller.abort();
    };
  }, [titleMovie]);

  return (
    <div className={css.moviesPage}>
      <PageTitle />
      {error && <ErrorMessage />}
      <SearchMovie value={titleMovie} onSearch={handleSearch} />
      {loading && <Loader />}
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
      {isEmpty && <MessageNotFound />}
      <Toaster position="bottom-center" />
    </div>
  );
}
