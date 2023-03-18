import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/movies-api';
import css from './styles.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);

  const IMAGE__API = 'https://image.tmdb.org/t/p/w500';

  const params = useParams();

  useEffect(() => {
    async function getCast() {
      const cast = await fetchCast(params.movieId);
      setCast(cast.cast.slice(0, 10));
    }

    getCast();
  }, [params.movieId]);
  console.log(cast);

  return (
    <div className={css.cast}>
      {cast && cast.length > 0 && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <li className={css.castItem} key={id}>
                <img
                  className={css.castImg}
                  src={
                    profile_path
                      ? `${IMAGE__API}${profile_path}`
                      : `https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg`
                  }
                  alt="cast"
                />
                <p className={css.castName}>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
