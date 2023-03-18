import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchQuery } from '../api/movies-api';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [query, setQuery] = useState(() => searchQuery || '');

  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetchQuery(searchQuery);
      setMovies(response.data.results);
      setQuery('');
    };
    if (searchQuery) {
      getMovie();
    }
  }, [searchQuery]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery('');
  };

  return (
    <div className={css.moviesPage}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.formInput}
          type="text"
          value={query}
          onChange={handleChange}
        />
        <button className={css.formButton} type="submit">
          Search
        </button>
      </form>
      <div>
        {movies && movies.length > 0 && (
          <ul>
            {movies.map(({ title, id }) => {
              return (
                <li className={css.moviesPageItem} key={id}>
                  <Link to={`/movie/${id}`} state={{ from: location }}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
