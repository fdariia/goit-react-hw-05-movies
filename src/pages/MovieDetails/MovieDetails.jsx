import {
  NavLink,
  useLocation,
  useParams,
  Outlet,
  Link,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchId } from '../../api/movies-api';
import css from './MovieDetails.module.css';

const StyledNavLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const IMAGE__API = 'https://image.tmdb.org/t/p/w500';

  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getMovieDetails() {
      const movie = await fetchId(params.movieId);
      setMovie(movie);
    }

    getMovieDetails();
  }, [params.movieId]);

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div className={css.movieDetails}>
      {movie && (
        <div>
          <Link to={backLinkHref}>
            <button className={css.button} type="button">
              Go back
            </button>
          </Link>

          <div className={css.poster}>
            <img
              className={css.posterImg}
              src={`${IMAGE__API}${movie.poster_path}`}
              alt="poster"
            />
            <div className={css.posterGeneralInfo}>
              <h2 className={css.posterTitle}>
                {movie.title} (
                {movie.release_date?.slice(0, movie.release_date?.indexOf('-'))}
                )
              </h2>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie && (
                <ul className={css.posterGenresList}>
                  {movie.genres.map(genre => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className={css.posterAdditionInfo}>
            <p>Additional info</p>
            <ul>
              <li className={css.posterAdditionInfoItem}>
                <StyledNavLink
                  className={css.posterAdditionalInfoLink}
                  to="cast"
                >
                  <h3>Cast</h3>
                </StyledNavLink>
              </li>
              <li className={css.posterAdditionInfoItem}>
                <StyledNavLink
                  className={css.posterAdditionalInfoLink}
                  to="reviews"
                >
                  <h3>Reviews</h3>
                </StyledNavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
