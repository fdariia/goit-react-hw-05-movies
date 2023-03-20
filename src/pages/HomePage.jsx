import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../api/movies-api';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      const response = await fetchTrending();
      console.log(response);
      setMovies(response);
    }

    getTrendingMovies();
  }, []);

  return (
    <div className={css.homePage}>
      <h1 className={css.title}>Trending today</h1>

      {movies && (
        <ul>
          {movies.map(({ title, id }) => {
            return (
              <li className={css.homePageItem} key={id}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
